/**
 * Chronicles of War - Territory & Dynamic Frontlines System
 * Replicates and improves the War of Dots dynamic border, city capture, and supply limit mechanics
 */

class TerritorySystem {
  constructor(width = 1600, height = 1200, gridSize = 40) {
    this.width = width;
    this.height = height;
    this.gridSize = gridSize;
    this.cols = Math.ceil(width / gridSize);
    this.rows = Math.ceil(height / gridSize);

    // Dynamic grid: 0 = Blue, 1 = Red, -1 = Neutral
    this.grid = new Int8Array(this.cols * this.rows);
    this.influence = new Float32Array(this.cols * this.rows); // -1.0 (Full Red) to +1.0 (Full Blue)

    // Capture points & Supply (War of Dots economy)
    this.blueScore = 50;
    this.redScore = 50;
    this.blueSupplyCap = 15;
    this.redSupplyCap = 15;
    this.blueUnitCount = 0;
    this.redUnitCount = 0;

    this.recomputeTimer = 0;
  }

  update(dt, units, camps) {
    this.recomputeTimer += dt;
    if (this.recomputeTimer < 0.25) return; // Update every 250ms for performance
    this.recomputeTimer = 0;

    // 1. Reset influence towards neutral or camps
    for (let i = 0; i < this.influence.length; i++) {
      this.influence[i] *= 0.92; // Gradual decay
    }

    // 2. Project unit presence
    let blueUnits = 0;
    let redUnits = 0;

    for (let u = 0; u < units.length; u++) {
      const unit = units[u];
      if (!unit.alive) continue;

      if (unit.team === 0) blueUnits++;
      else redUnits++;

      const power = (unit.currentSoldiers / unit.maxSoldiers) * (unit.team === 0 ? 1.0 : -1.0);
      const centerCol = Math.floor(unit.x / this.gridSize);
      const centerRow = Math.floor(unit.y / this.gridSize);
      const radiusInCells = Math.ceil((unit.radius + 60) / this.gridSize);

      for (let r = Math.max(0, centerRow - radiusInCells); r <= Math.min(this.rows - 1, centerRow + radiusInCells); r++) {
        for (let c = Math.max(0, centerCol - radiusInCells); c <= Math.min(this.cols - 1, centerCol + radiusInCells); c++) {
          const distSq = (c - centerCol) * (c - centerCol) + (r - centerRow) * (r - centerRow);
          if (distSq <= radiusInCells * radiusInCells) {
            const weight = 1.0 - Math.sqrt(distSq) / radiusInCells;
            const idx = r * this.cols + c;
            this.influence[idx] += power * weight * 1.5;
            // Clamp
            this.influence[idx] = Math.max(-1.0, Math.min(1.0, this.influence[idx]));
          }
        }
      }
    }

    this.blueUnitCount = blueUnits;
    this.redUnitCount = redUnits;

    // 3. Camp / Town Capture Check (War of Dots city rules)
    if (camps) {
      camps.forEach(camp => {
        let blueNear = 0;
        let redNear = 0;
        for (let u = 0; u < units.length; u++) {
          const unit = units[u];
          if (!unit.alive) continue;
          const d = Math.hypot(unit.x - camp.x, unit.y - camp.y);
          if (d < 70) {
            if (unit.team === 0) blueNear += unit.currentSoldiers;
            else redNear += unit.currentSoldiers;
          }
        }

        if (blueNear > redNear + 5) {
          camp.captureProgress = (camp.captureProgress || 0) + 0.08;
          if (camp.captureProgress >= 1.0) {
            camp.team = 0;
            camp.captureProgress = 1.0;
          }
        } else if (redNear > blueNear + 5) {
          camp.captureProgress = (camp.captureProgress || 0) - 0.08;
          if (camp.captureProgress <= -1.0) {
            camp.team = 1;
            camp.captureProgress = -1.0;
          }
        }
      });

      // Recalculate supply caps (5 units per captured city as in War of Dots)
      let blueCamps = 0;
      let redCamps = 0;
      camps.forEach(c => {
        if (c.team === 0) blueCamps++;
        else if (c.team === 1) redCamps++;
      });
      this.blueSupplyCap = 5 + blueCamps * 5;
      this.redSupplyCap = 5 + redCamps * 5;
    }

    // 4. Calculate Territorial Percentages
    let blueCells = 0;
    let redCells = 0;
    for (let i = 0; i < this.influence.length; i++) {
      if (this.influence[i] > 0.15) blueCells++;
      else if (this.influence[i] < -0.15) redCells++;
    }
    const total = this.cols * this.rows;
    this.blueScore = Math.round((blueCells / total) * 100);
    this.redScore = Math.round((redCells / total) * 100);
  }

  renderFrontline(ctx) {
    ctx.save();
    // Render soft territorial shading & frontlines
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const inf = this.influence[r * this.cols + c];
        if (Math.abs(inf) > 0.18) {
          ctx.fillStyle = inf > 0
            ? `rgba(37, 99, 235, ${Math.min(0.16, inf * 0.16)})`
            : `rgba(220, 38, 38, ${Math.min(0.16, -inf * 0.16)})`;
          ctx.fillRect(c * this.gridSize, r * this.gridSize, this.gridSize, this.gridSize);
        }
      }
    }
    ctx.restore();
  }
}

window.TerritorySystem = TerritorySystem;
