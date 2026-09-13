/**
 * Chronicles of War - RTS Input & Tactical Formations Controller
 * Supports Marquee drag-select, Line-dragging deployment, Waypoints, and Hotkeys
 */

class InputController {
  constructor(canvas, engine) {
    this.canvas = canvas;
    this.engine = engine;

    this.mouseWorldX = 0;
    this.mouseWorldY = 0;
    this.mouseScreenX = 0;
    this.mouseScreenY = 0;

    // Drag / Selection state
    this.isLeftDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.dragCurX = 0;
    this.dragCurY = 0;

    // Right-click line deployment
    this.isRightDragging = false;
    this.lineStartX = 0;
    this.lineStartY = 0;
    this.lineCurX = 0;
    this.lineCurY = 0;

    // Camera pan state
    this.isPanning = false;
    this.panStartX = 0;
    this.panStartY = 0;

    this.shiftDown = false;
    this.ctrlDown = false;

    // Mobile / Tablet Touch state (Pinch zoom & pan)
    this.lastTouchDist = 0;
    this.lastTouchMidX = 0;
    this.lastTouchMidY = 0;
    this.isTouchInteracting = false;

    this._bindEvents();
  }

  _bindEvents() {
    window.addEventListener('keydown', (e) => this._onKeyDown(e));
    window.addEventListener('keyup', (e) => this._onKeyUp(e));

    this.canvas.addEventListener('mousedown', (e) => this._onMouseDown(e));
    window.addEventListener('mousemove', (e) => this._onMouseMove(e));
    window.addEventListener('mouseup', (e) => this._onMouseUp(e));
    this.canvas.addEventListener('wheel', (e) => this._onWheel(e), { passive: false });
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    // Mobile & Tablet Touch Listeners
    this.canvas.addEventListener('touchstart', (e) => this._onTouchStart(e), { passive: false });
    window.addEventListener('touchmove', (e) => this._onTouchMove(e), { passive: false });
    window.addEventListener('touchend', (e) => this._onTouchEnd(e), { passive: false });
  }

  _updateMouseCoords(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouseScreenX = e.clientX - rect.left;
    this.mouseScreenY = e.clientY - rect.top;

    const cam = this.engine.camera;
    this.mouseWorldX = (this.mouseScreenX - cam.x) / cam.zoom;
    this.mouseWorldY = (this.mouseScreenY - cam.y) / cam.zoom;
  }

  _onTouchStart(e) {
    if (e.touches.length === 1) {
      const t = e.touches[0];
      const fakeEvent = { clientX: t.clientX, clientY: t.clientY, button: 0, altKey: false };
      this._onMouseDown(fakeEvent);
    } else if (e.touches.length === 2) {
      e.preventDefault();
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      this.lastTouchDist = Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY);
      this.lastTouchMidX = (t0.clientX + t1.clientX) * 0.5;
      this.lastTouchMidY = (t0.clientY + t1.clientY) * 0.5;
      this.isTouchInteracting = true;
    }
  }

  _onTouchMove(e) {
    if (e.touches.length === 1 && !this.isTouchInteracting) {
      const t = e.touches[0];
      const fakeEvent = { clientX: t.clientX, clientY: t.clientY, buttons: 1 };
      this._onMouseMove(fakeEvent);
    } else if (e.touches.length === 2) {
      e.preventDefault();
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      const newDist = Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY);
      const newMidX = (t0.clientX + t1.clientX) * 0.5;
      const newMidY = (t0.clientY + t1.clientY) * 0.5;

      if (this.lastTouchDist > 0) {
        const factor = newDist / this.lastTouchDist;
        const rect = this.canvas.getBoundingClientRect();
        const screenX = newMidX - rect.left;
        const screenY = newMidY - rect.top;

        if (this.engine.campaign && this.engine.campaign.activeMode === 'campaign') {
          const cmap = this.engine.campaign.map;
          const oldZoom = cmap.zoom;
          cmap.isTransitioning = false;
          cmap.zoom = Math.max(0.4, Math.min(4.5, cmap.zoom * factor));
          cmap.camX = screenX - (screenX - cmap.camX) * (cmap.zoom / oldZoom) + (newMidX - this.lastTouchMidX);
          cmap.camY = screenY - (screenY - cmap.camY) * (cmap.zoom / oldZoom) + (newMidY - this.lastTouchMidY);
          cmap.targetZoom = cmap.zoom;
          cmap.targetCamX = cmap.camX;
          cmap.targetCamY = cmap.camY;
        } else {
          const cam = this.engine.camera;
          const oldZoom = cam.zoom;
          cam.zoom = Math.max(0.4, Math.min(2.5, cam.zoom * factor));
          cam.x = screenX - (screenX - cam.x) * (cam.zoom / oldZoom) + (newMidX - this.lastTouchMidX);
          cam.y = screenY - (screenY - cam.y) * (cam.zoom / oldZoom) + (newMidY - this.lastTouchMidY);
        }
      }
      this.lastTouchDist = newDist;
      this.lastTouchMidX = newMidX;
      this.lastTouchMidY = newMidY;
    }
  }

  _onTouchEnd(e) {
    if (e.touches.length === 0) {
      if (this.isTouchInteracting) {
        this.isTouchInteracting = false;
        this.lastTouchDist = 0;
      } else {
        const rect = this.canvas.getBoundingClientRect();
        const fakeEvent = {
          clientX: this.mouseScreenX + rect.left,
          clientY: this.mouseScreenY + rect.top,
          button: 0
        };
        this._onMouseUp(fakeEvent);
      }
    }
  }

  _onMouseDown(e) {
    this._updateMouseCoords(e);

    // Campaign 4X Mode
    if (this.engine.campaign && this.engine.campaign.activeMode === 'campaign') {
      this.panStartX = e.clientX;
      this.panStartY = e.clientY;
      this.hasDraggedCampaign = false;

      if (e.button === 0) {
        this.isLeftDragging = true;
      } else if (e.button === 2) {
        this.isRightDragging = true;
      } else if (e.button === 1) {
        this.isPanning = true;
      }
      return;
    }

    // RTS Tactical Mode
    // Middle click: Pan camera
    if (e.button === 1 || (e.button === 0 && e.altKey)) {
      this.isPanning = true;
      this.panStartX = e.clientX;
      this.panStartY = e.clientY;
      return;
    }

    // Left click: Marquee selection or click unit
    if (e.button === 0) {
      this.isLeftDragging = true;
      this.dragStartX = this.mouseWorldX;
      this.dragStartY = this.mouseWorldY;
      this.dragCurX = this.mouseWorldX;
      this.dragCurY = this.mouseWorldY;
    }
    // Right click: Move command or Formation Line Drag
    else if (e.button === 2) {
      this.isRightDragging = true;
      this.lineStartX = this.mouseWorldX;
      this.lineStartY = this.mouseWorldY;
      this.lineCurX = this.mouseWorldX;
      this.lineCurY = this.mouseWorldY;
    }
  }

  _onMouseMove(e) {
    this._updateMouseCoords(e);

    // Campaign 4X Mode Pan Dragging
    if (this.engine.campaign && this.engine.campaign.activeMode === 'campaign') {
      if ((this.isLeftDragging || this.isPanning) && (e.buttons & 1 || e.buttons & 4)) {
        const dx = e.clientX - this.panStartX;
        const dy = e.clientY - this.panStartY;
        if (Math.hypot(dx, dy) > 2) {
          this.hasDraggedCampaign = true;
          const cmap = this.engine.campaign.map;
          cmap.isTransitioning = false;
          cmap.camX += dx;
          cmap.camY += dy;
          cmap.targetCamX = cmap.camX;
          cmap.targetCamY = cmap.camY;
          this.panStartX = e.clientX;
          this.panStartY = e.clientY;
        }
      }
      return;
    }

    if (this.isPanning) {
      const dx = e.clientX - this.panStartX;
      const dy = e.clientY - this.panStartY;
      this.engine.camera.x += dx;
      this.engine.camera.y += dy;
      this.panStartX = e.clientX;
      this.panStartY = e.clientY;
      return;
    }

    if (this.isLeftDragging) {
      this.dragCurX = this.mouseWorldX;
      this.dragCurY = this.mouseWorldY;
    }

    if (this.isRightDragging) {
      this.lineCurX = this.mouseWorldX;
      this.lineCurY = this.mouseWorldY;
    }
  }

  _onMouseUp(e) {
    this._updateMouseCoords(e);

    if (this.isPanning) {
      this.isPanning = false;
      return;
    }

    // 1. CAMPAIGN 4X MODE INPUT
    if (this.engine.campaign && this.engine.campaign.activeMode === 'campaign') {
      const cmap = this.engine.campaign.map;

      if (e.button === 0) {
        this.isLeftDragging = false;
        // If dragged the map, don't trigger selection
        if (this.hasDraggedCampaign) {
          this.hasDraggedCampaign = false;
          return;
        }

        // World coordinates on campaign map
        const cWorldX = (this.mouseScreenX - cmap.camX) / cmap.zoom;
        const cWorldY = (this.mouseScreenY - cmap.camY) / cmap.zoom;

        // Check Army click first
        const clickedArmy = this.engine.campaign.armies.find(a => a.isAlive && Math.hypot(cWorldX - a.x, cWorldY - a.y) < 28);
        if (clickedArmy) {
          this.engine.campaign.selectArmy(clickedArmy);
          return;
        }

        // Check Province click
        const clickedProv = cmap.getProvinceAt(this.mouseScreenX, this.mouseScreenY);
        if (clickedProv) {
          this.engine.campaign.selectProvince(clickedProv);
          return;
        }
      } else if (e.button === 2) {
        this.isRightDragging = false;
        if (this.engine.campaign.selectedArmy) {
          const targetProv = cmap.getProvinceAt(this.mouseScreenX, this.mouseScreenY);
          if (targetProv) {
            this.engine.campaign.orderArmyMarch(this.engine.campaign.selectedArmy, targetProv);
            return;
          }
        }
      }
      return;
    }

    // 2. RTS TACTICAL MODE INPUT
    // Left click release
    if (e.button === 0 && this.isLeftDragging) {
      this.isLeftDragging = false;
      const dragDist = Math.hypot(this.dragCurX - this.dragStartX, this.dragCurY - this.dragStartY);

      if (dragDist > 12) {
        // Marquee drag selection box
        const xMin = Math.min(this.dragStartX, this.dragCurX);
        const xMax = Math.max(this.dragStartX, this.dragCurX);
        const yMin = Math.min(this.dragStartY, this.dragCurY);
        const yMax = Math.max(this.dragStartY, this.dragCurY);

        this.engine.selectUnitsInBox(xMin, yMin, xMax, yMax, this.shiftDown);
      } else {
        // Single unit click selection
        this.engine.selectUnitAt(this.mouseWorldX, this.mouseWorldY, this.shiftDown);
      }
    }

    // Right click release
    if (e.button === 2 && this.isRightDragging) {
      this.isRightDragging = false;
      const lineDist = Math.hypot(this.lineCurX - this.lineStartX, this.lineCurY - this.lineStartY);

      if (lineDist > 25) {
        // Line Drag Formation Deployment (Units align along drawn line)
        this.engine.deploySelectedInLine(this.lineStartX, this.lineStartY, this.lineCurX, this.lineCurY);
      } else {
        // Standard Move Order to Point
        this.engine.moveSelectedTo(this.mouseWorldX, this.mouseWorldY, this.shiftDown);
      }
    }
  }

  _onWheel(e) {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.12 : 0.89;

    // Zoom on Campaign 4X Map
    if (this.engine.campaign && this.engine.campaign.activeMode === 'campaign') {
      const cmap = this.engine.campaign.map;
      const oldZoom = cmap.zoom;
      cmap.isTransitioning = false;
      cmap.zoom = Math.max(0.4, Math.min(4.5, cmap.zoom * zoomFactor));
      const mouseX = this.mouseScreenX;
      const mouseY = this.mouseScreenY;
      cmap.camX = mouseX - (mouseX - cmap.camX) * (cmap.zoom / oldZoom);
      cmap.camY = mouseY - (mouseY - cmap.camY) * (cmap.zoom / oldZoom);
      cmap.targetZoom = cmap.zoom;
      cmap.targetCamX = cmap.camX;
      cmap.targetCamY = cmap.camY;
      return;
    }

    // Zoom on RTS Tactical Battlefield
    const cam = this.engine.camera;
    const oldZoom = cam.zoom;
    cam.zoom = Math.max(0.4, Math.min(2.5, cam.zoom * zoomFactor));

    const mouseX = this.mouseScreenX;
    const mouseY = this.mouseScreenY;
    cam.x = mouseX - (mouseX - cam.x) * (cam.zoom / oldZoom);
    cam.y = mouseY - (mouseY - cam.y) * (cam.zoom / oldZoom);
  }

  _onKeyDown(e) {
    if (e.key === 'Shift') this.shiftDown = true;
    if (e.key === 'Control') this.ctrlDown = true;

    // Space: Tactical Pause
    if (e.code === 'Space') {
      e.preventDefault();
      this.engine.togglePause();
    }

    // Formation Hotkeys
    if (e.key === '1') this.engine.setFormationForSelected('line');
    if (e.key === '2') this.engine.setFormationForSelected('column');
    if (e.key === '3') this.engine.setFormationForSelected('square');
    if (e.key === '4') this.engine.setFormationForSelected('skirmish');

    // S: Stop immediately (from War of Dots)
    if (e.key.toLowerCase() === 's') {
      this.engine.stopSelectedUnits();
    }

    // C: Cancel orders / Deselect
    if (e.key.toLowerCase() === 'c') {
      this.engine.deselectAll();
    }
  }

  _onKeyUp(e) {
    if (e.key === 'Shift') this.shiftDown = false;
    if (e.key === 'Control') this.ctrlDown = false;
  }

  renderOverlays(ctx) {
    const cam = this.engine.camera;

    // 1. Marquee Selection Box
    if (this.isLeftDragging) {
      const xMin = Math.min(this.dragStartX, this.dragCurX);
      const yMin = Math.min(this.dragStartY, this.dragCurY);
      const width = Math.abs(this.dragCurX - this.dragStartX);
      const height = Math.abs(this.dragCurY - this.dragStartY);

      if (width > 4 || height > 4) {
        ctx.save();
        ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.fillRect(xMin, yMin, width, height);
        ctx.strokeRect(xMin, yMin, width, height);
        ctx.restore();
      }
    }

    // 2. Right-Click Line Drag Deployment
    if (this.isRightDragging) {
      const lineDist = Math.hypot(this.lineCurX - this.lineStartX, this.lineCurY - this.lineStartY);
      if (lineDist > 15) {
        ctx.save();
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(this.lineStartX, this.lineStartY);
        ctx.lineTo(this.lineCurX, this.lineCurY);
        ctx.stroke();

        // Facing arrow (perpendicular to line)
        const midX = (this.lineStartX + this.lineCurX) * 0.5;
        const midY = (this.lineStartY + this.lineCurY) * 0.5;
        const lineAngle = Math.atan2(this.lineCurY - this.lineStartY, this.lineCurX - this.lineStartX);
        const faceAngle = lineAngle - Math.PI * 0.5;

        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(midX + Math.cos(faceAngle) * 24, midY + Math.sin(faceAngle) * 24);
        ctx.lineTo(midX + Math.cos(faceAngle + 2.5) * 12, midY + Math.sin(faceAngle + 2.5) * 12);
        ctx.lineTo(midX + Math.cos(faceAngle - 2.5) * 12, midY + Math.sin(faceAngle - 2.5) * 12);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }
    }
  }
}

window.InputController = InputController;
