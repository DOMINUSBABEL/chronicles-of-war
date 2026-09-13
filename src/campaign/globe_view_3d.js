/**
 * Chronicles of War - 3D Globe Projection Module
 * Renders the 4X Strategic Campaign Map onto an interactive 3D Earth Globe using Three.js
 * Supports atmospheric halo, solar illumination, orbit rotation, and raycast province picking
 */

class GlobeView3D {
  constructor(campaignManager) {
    this.campaign = campaignManager;
    this.container = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.globeMesh = null;
    this.atmosphereMesh = null;
    this.texture = null;

    this.isActive = false;
    this.animFrameId = null;

    // Orbit & Camera state
    this.radius = 100;
    this.camDistance = 240;
    this.rotX = 0.35; // Tilt
    this.rotY = -1.2; // Centered on Europe / Atlantic
    this.targetRotX = this.rotX;
    this.targetRotY = this.rotY;

    this.isDragging = false;
    this.prevMouseX = 0;
    this.prevMouseY = 0;

    // Raycasting for 3D globe clicks
    this.raycaster = null;
    this.mouse = null;
    this.offscreenCanvas = null;
    this.offscreenCtx = null;
    this.lastTextureUpdate = 0;
  }

  init(containerId = 'globe-container') {
    if (typeof THREE === 'undefined') {
      console.warn('Three.js is not loaded. 3D Globe View unavailable.');
      return false;
    }

    this.container = document.getElementById(containerId);
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = containerId;
      document.body.appendChild(this.container);
    }

    const w = window.innerWidth;
    const h = window.innerHeight;

    // 1. Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, w / h, 1, 3000);
    this.camera.position.set(0, 0, this.camDistance);

    // 2. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff7ed, 0.9);
    sunLight.position.set(200, 150, 200);
    this.scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.4);
    rimLight.position.set(-200, -50, -100);
    this.scene.add(rimLight);

    // 4. Create Offscreen Canvas for Texture
    this.offscreenCanvas = document.createElement('canvas');
    this.offscreenCanvas.width = 2400;
    this.offscreenCanvas.height = 1200;
    this.offscreenCtx = this.offscreenCanvas.getContext('2d');

    // 5. Globe Mesh
    const sphereGeom = new THREE.SphereGeometry(this.radius, 64, 64);
    this.texture = new THREE.CanvasTexture(this.offscreenCanvas);
    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.ClampToEdgeWrapping;
    this.texture.minFilter = THREE.LinearFilter;

    const globeMat = new THREE.MeshStandardMaterial({
      map: this.texture,
      roughness: 0.65,
      metalness: 0.1
    });

    this.globeMesh = new THREE.Mesh(sphereGeom, globeMat);
    this.scene.add(this.globeMesh);

    // 6. Atmospheric Halo Rim Mesh
    const atmosGeom = new THREE.SphereGeometry(this.radius * 1.025, 48, 48);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    this.atmosphereMesh = new THREE.Mesh(atmosGeom, atmosMat);
    this.scene.add(this.atmosphereMesh);

    // 7. Raycaster & Coordinates
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this._bindControls();
    return true;
  }

  _bindControls() {
    const el = this.renderer.domElement;

    el.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        this.isDragging = true;
        this.prevMouseX = e.clientX;
        this.prevMouseY = e.clientY;
        this.dragDist = 0;
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isActive) return;
      if (this.isDragging) {
        const dx = e.clientX - this.prevMouseX;
        const dy = e.clientY - this.prevMouseY;
        this.dragDist += Math.abs(dx) + Math.abs(dy);

        this.targetRotY += dx * 0.005;
        this.targetRotX += dy * 0.005;

        // Clamp vertical pitch so we don't flip upside down
        this.targetRotX = Math.max(-1.3, Math.min(1.3, this.targetRotX));

        this.prevMouseX = e.clientX;
        this.prevMouseY = e.clientY;
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (!this.isActive) return;
      if (this.isDragging) {
        this.isDragging = false;
        // Click if didn't drag
        if (this.dragDist < 6) {
          this._handleGlobeClick(e);
        }
      }
    });

    el.addEventListener('wheel', (e) => {
      if (!this.isActive) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? 15 : -15;
      this.camDistance = Math.max(130, Math.min(380, this.camDistance + delta));
    }, { passive: false });

    window.addEventListener('resize', () => {
      if (!this.renderer || !this.camera) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });
  }

  _handleGlobeClick(e) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.globeMesh);

    if (intersects.length > 0) {
      const hit = intersects[0];
      if (hit.uv) {
        const worldX = hit.uv.x * this.campaign.map.mapWidth;
        const worldY = (1 - hit.uv.y) * this.campaign.map.mapHeight;

        // Check if clicked province
        const prov = this.campaign.map.getProvinceAt(worldX, worldY);
        if (prov) {
          this.campaign.selectProvince(prov);
          this.campaign.game.sound.playTrumpetCall();
        }
      }
    }
  }

  toggle(enable) {
    this.isActive = (enable !== undefined) ? enable : !this.isActive;

    if (this.container) {
      this.container.style.display = this.isActive ? 'block' : 'none';
    }

    const canvas2D = document.getElementById('game-canvas');
    if (canvas2D) {
      canvas2D.style.display = this.isActive ? 'none' : 'block';
    }

    if (this.isActive) {
      this._updateTexture();
      this._loop();
    } else {
      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }
    }
  }

  _updateTexture() {
    if (!this.offscreenCtx || !this.campaign || !this.campaign.map) return;
    const ctx = this.offscreenCtx;
    const cmap = this.campaign.map;

    // Save cmap camera state and render at global scale onto offscreen canvas
    const oldCamX = cmap.camX;
    const oldCamY = cmap.camY;
    const oldZoom = cmap.zoom;

    cmap.camX = 0;
    cmap.camY = 0;
    cmap.zoom = this.offscreenCanvas.width / cmap.mapWidth;

    cmap.render(ctx, this.campaign.armies, this.campaign.selectedArmy);

    // Restore cmap camera state
    cmap.camX = oldCamX;
    cmap.camY = oldCamY;
    cmap.zoom = oldZoom;

    if (this.texture) {
      this.texture.needsUpdate = true;
    }
  }

  _loop() {
    if (!this.isActive) return;

    // Smooth rotation lerp
    this.rotX += (this.targetRotX - this.rotX) * 0.12;
    this.rotY += (this.targetRotY - this.rotY) * 0.12;

    if (this.globeMesh) {
      this.globeMesh.rotation.x = this.rotX;
      this.globeMesh.rotation.y = this.rotY;
    }

    // Camera distance lerp
    this.camera.position.z += (this.camDistance - this.camera.position.z) * 0.1;

    // Update texture every 6 frames to reflect animations/moves
    const now = performance.now();
    if (now - this.lastTextureUpdate > 100) {
      this._updateTexture();
      this.lastTextureUpdate = now;
    }

    this.renderer.render(this.scene, this.camera);
    this.animFrameId = requestAnimationFrame(() => this._loop());
  }
}

if (typeof window !== 'undefined') {
  window.GlobeView3D = GlobeView3D;
}
