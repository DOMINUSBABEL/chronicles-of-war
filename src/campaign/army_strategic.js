/**
 * Chronicles of War - Strategic Army & General Entity
 * Manages armies on the 4X campaign map, battalions, movement points, and replenishment
 */

class StrategicArmy {
  constructor(id, faction, commanderName, startProvinceId, regiments = []) {
    this.id = id;
    this.faction = faction;
    this.commanderName = commanderName;
    this.provinceId = startProvinceId;
    this.isAlive = true;

    // Movement Points (MP)
    this.maxMP = 100;
    this.currentMP = 100;

    // Battalion roster
    this.regiments = regiments; // Array of { unitKey, soldiers, maxSoldiers, health, morale }

    // Map Coordinates
    this.x = 0;
    this.y = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.isMarching = false;
    this.marchPath = [];
  }

  initCoords(province) {
    if (province) {
      // Offset slightly from city center
      this.x = province.x + 22;
      this.y = province.y + 12;
      this.targetX = this.x;
      this.targetY = this.y;
    }
  }

  get totalSoldiers() {
    return this.getTotalSoldiers();
  }

  getTotalSoldiers() {
    return this.regiments.reduce((acc, r) => acc + (r.soldiers || r.maxSoldiers || 40), 0);
  }

  getCombatPower() {
    let power = 0;
    this.regiments.forEach(r => {
      const uDef = this._findUnitDef(r.unitKey);
      const soldiers = r.soldiers || 40;
      if (uDef) {
        power += soldiers * (uDef.meleeDamage + (uDef.rangedDamage || 0) * 0.8);
      } else {
        power += soldiers * 30;
      }
    });
    return Math.round(power);
  }

  _findUnitDef(unitKey) {
    const erasObj = typeof ERAS !== 'undefined' ? ERAS : (globalThis.ERAS || (globalThis.window && globalThis.window.ERAS) || {});
    for (const eraKey of Object.keys(erasObj)) {
      if (erasObj[eraKey].units[unitKey]) {
        return erasObj[eraKey].units[unitKey];
      }
    }
    return null;
  }

  addRegiment(unitKey) {
    const uDef = this._findUnitDef(unitKey);
    const count = uDef ? uDef.soldierCount : 40;
    this.regiments.push({
      unitKey: unitKey,
      soldiers: count,
      maxSoldiers: count,
      health: 100,
      morale: 100
    });
  }

  canMoveTo(destProvince) {
    if (this.currentMP < 50) return false;
    // Must be adjacent
    return true;
  }

  moveTo(destProvince, onArrivalCallback) {
    if (!destProvince) return;
    this.currentMP -= 50;
    this.provinceId = destProvince.id;
    this.targetX = destProvince.x + 22;
    this.targetY = destProvince.y + 12;
    this.isMarching = true;
    this.onArrival = onArrivalCallback;
  }

  update(dt) {
    if (this.isMarching) {
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 4) {
        this.x = this.targetX;
        this.y = this.targetY;
        this.isMarching = false;
        if (this.onArrival) {
          this.onArrival(this);
          this.onArrival = null;
        }
      } else {
        const step = Math.min(dist, 160 * dt);
        this.x += (dx / dist) * step;
        this.y += (dy / dist) * step;
      }
    }
  }

  replenish(province) {
    if (province && province.owner === this.faction) {
      const healPercent = province.hasBuilding('barracks') ? 0.18 : 0.08;
      this.regiments.forEach(r => {
        if (r.soldiers < r.maxSoldiers) {
          r.soldiers = Math.min(r.maxSoldiers, Math.ceil(r.soldiers + r.maxSoldiers * healPercent));
        }
        r.health = 100;
        r.morale = 100;
      });
    }
  }

  applyAttrition(percent) {
    this.regiments.forEach(r => {
      r.soldiers = Math.max(1, Math.floor(r.soldiers * (1 - percent)));
    });
  }

  resetTurnMP() {
    this.currentMP = this.maxMP;
  }

  renderOnCampaign(ctx, isHovered = false, isSelected = false) {
    if (!this.isAlive) return;

    ctx.save();
    const fac = (typeof FACTIONS !== 'undefined' && FACTIONS[this.faction]) ? FACTIONS[this.faction] : {
      banner: '⚔️',
      colors: { primary: '#d97706', accent: '#fbbf24' }
    };

    const totalSoldiers = this.getTotalSoldiers();
    const primaryColor = fac.colors.primary || '#d97706';

    // 1. Compact AoH3 Army Counter Box
    const boxW = Math.max(44, 26 + totalSoldiers.toString().length * 6.5);
    const boxH = 15;
    const boxX = this.x - boxW * 0.5;
    const boxY = this.y - boxH * 0.5;

    // Outer glow if selected
    if (isSelected) {
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 8;
    }

    // Counter Background
    ctx.fillStyle = isSelected ? 'rgba(30, 41, 59, 0.96)' : 'rgba(15, 23, 42, 0.90)';
    ctx.strokeStyle = isSelected ? '#fbbf24' : primaryColor;
    ctx.lineWidth = isSelected ? 1.8 : 1.2;

    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 4);
    ctx.fill();
    ctx.stroke();

    ctx.shadowBlur = 0; // Reset shadow

    // Faction Banner & Soldier Count
    ctx.fillStyle = '#fff';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(fac.banner || '⚔️', boxX + 4, boxY + boxH * 0.5);

    ctx.fillStyle = isSelected ? '#fbbf24' : '#f8fafc';
    ctx.font = 'bold 9px "Outfit", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(totalSoldiers.toString(), boxX + boxW - 4, boxY + boxH * 0.5);

    // 2. Mini Movement Points Pip Bar (Below Counter)
    const mpPercent = Math.max(0, Math.min(1, this.currentMP / this.maxMP));
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(boxX, boxY + boxH + 2, boxW, 2);
    ctx.fillStyle = mpPercent > 0.5 ? '#10b981' : (mpPercent > 0.2 ? '#f59e0b' : '#ef4444');
    ctx.fillRect(boxX, boxY + boxH + 2, boxW * mpPercent, 2);

    // 3. Commander Tooltip (Only displayed if Hovered or Selected)
    if (isHovered || isSelected) {
      const tooltipW = Math.max(110, this.commanderName.length * 6.5);
      const tooltipH = 24;
      const tipX = this.x - tooltipW * 0.5;
      const tipY = boxY - tooltipH - 6;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(tipX, tipY, tooltipW, tooltipH, 4);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 9px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(this.commanderName, this.x, tipY + 9);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '8px sans-serif';
      ctx.fillText(`${this.regiments.length} regimientos • ${totalSoldiers} hombres`, this.x, tipY + 19);
    }

    ctx.restore();
  }
}

window.StrategicArmy = StrategicArmy;
