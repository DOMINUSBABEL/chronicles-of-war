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

  renderOnCampaign(ctx) {
    if (!this.isAlive) return;

    ctx.save();
    const fac = FACTIONS[this.faction] || FACTIONS.spain;

    // 1. Army Base / Stand
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.beginPath();
    ctx.ellipse(this.x, this.y + 10, 14, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. Banner Pole
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y + 10);
    ctx.lineTo(this.x, this.y - 26);
    ctx.stroke();

    // 3. Faction Banner Flag
    ctx.fillStyle = fac.colors.primary;
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - 26);
    ctx.lineTo(this.x + 22, this.y - 20);
    ctx.lineTo(this.x, this.y - 12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Flag heraldic icon
    ctx.fillStyle = '#fff';
    ctx.font = '10px "Outfit", sans-serif';
    ctx.fillText(fac.banner, this.x + 6, this.y - 18);

    // 4. Battalion Count Badge
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(this.x + 16, this.y - 2, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 9px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.regiments.length.toString(), this.x + 16, this.y - 2);

    // 5. General Name & Total Troops
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(this.commanderName, this.x, this.y + 24);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '9px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`${this.getTotalSoldiers()} hombres`, this.x, this.y + 35);

    // 6. Movement Points Bar
    const mpWidth = 24;
    const mpPercent = this.currentMP / this.maxMP;
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(this.x - mpWidth * 0.5, this.y - 32, mpWidth, 3);
    ctx.fillStyle = '#10b981';
    ctx.fillRect(this.x - mpWidth * 0.5, this.y - 32, mpWidth * mpPercent, 3);

    ctx.restore();
  }
}

window.StrategicArmy = StrategicArmy;
