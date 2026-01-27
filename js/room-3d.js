/**
 * 3D room experience – look around (right-drag), no scroll.
 * Three.js + CSS3DRenderer, WebGL atmosphere. Custom yaw/pitch look.
 */

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { CSS3DRenderer } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/renderers/CSS3DRenderer.js';

const PANEL_W = 680;
const PANEL_H = 480;
const RADIUS = 1200;
const PANELS = [
  { id: 'hero', angle: 0, html: () => `
    <div class="panel panel-hero">
      <p class="panel-label">— Software Developer & Web Developer —</p>
      <h1 class="panel-hero-title">Andreas<br>Eirich</h1>
      <p class="panel-hero-tag">Innovative solutions for modern requirements</p>
      <p class="panel-hint">Drag with <strong>right mouse</strong> or <strong>two fingers</strong> to look around · No scrolling</p>
    </div>` },
  { id: 'about', angle: 72, html: () => `
    <div class="panel">
      <p class="panel-label">— About —</p>
      <h2 class="panel-title">Building systems that matter</h2>
      <p class="panel-body">Robotics & AI student at IU, building real-world systems with Django, Python, and Raspberry Pi. Tutor for mathematics up to Abitur level. Focus: documentation, ethics, and quality—E-Commerce, automation, privacy-first applications.</p>
    </div>` },
  { id: 'projects', angle: 144, html: () => `
    <div class="panel">
      <p class="panel-label">— Projects —</p>
      <h2 class="panel-title">Selected work</h2>
      <div class="panel-projects">
        <a href="honey-treasures.html" class="panel-project"><span class="panel-project-icon">🍯</span> Honey Treasures <em>→</em></a>
        <a href="tutorflow.html" class="panel-project"><span class="panel-project-icon">▸</span> TutorFlow <em>→</em></a>
        <a href="chatcompanion.html" class="panel-project"><span class="panel-project-icon">🛡</span> ChatCompanion <em>→</em></a>
      </div>
    </div>` },
  { id: 'tech', angle: 216, html: () => `
    <div class="panel">
      <p class="panel-label">— Tech —</p>
      <h2 class="panel-title">Stack & principles</h2>
      <ul class="panel-tech">
        <li><strong>Tech</strong> Python, Django, JavaScript, HTML/CSS</li>
        <li><strong>Architecture</strong> Service-layer, RESTful APIs</li>
        <li><strong>Principles</strong> Maintainability, security-first, clean code</li>
      </ul>
    </div>` },
  { id: 'contact', angle: 288, html: () => `
    <div class="panel">
      <p class="panel-label">— Contact —</p>
      <h2 class="panel-title">Get in touch</h2>
      <form id="contact-form" class="panel-form">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" required>
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message" rows="3" required></textarea>
        <div id="form-status" class="form-status"></div>
        <button type="submit" id="submit-btn">Send</button>
      </form>
    </div>` }
];

function createPanel(p) {
  const wrap = document.createElement('div');
  wrap.style.width = PANEL_W + 'px';
  wrap.style.height = PANEL_H + 'px';
  wrap.style.pointerEvents = 'auto';
  wrap.innerHTML = p.html();
  const obj = new THREE.CSS3DObject(wrap);
  const rad = (p.angle * Math.PI) / 180;
  obj.position.x = RADIUS * Math.sin(rad);
  obj.position.z = RADIUS * Math.cos(rad);
  obj.rotation.y = -rad;
  return obj;
}

function setupWebGL(container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000);
  camera.position.set(0, 0, 0);

  const canvas = document.createElement('canvas');
  canvas.id = 'canvas-3d';
  canvas.setAttribute('aria-hidden', 'true');
  container.appendChild(canvas);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const ambient = new THREE.AmbientLight(0x0f0a1a, 0.5);
  scene.add(ambient);
  const pl = new THREE.PointLight(0x7c3aed, 0.6, 2000);
  pl.position.set(800, 400, 800);
  scene.add(pl);
  const pl2 = new THREE.PointLight(0x06b6d4, 0.25, 1500);
  pl2.position.set(-600, -200, 600);
  scene.add(pl2);

  const geo = new THREE.TorusKnotGeometry(180, 50, 128, 24);
  const mat = new THREE.MeshBasicMaterial({ color: 0x7c3aed, wireframe: true, transparent: true, opacity: 0.12 });
  const knot = new THREE.Mesh(geo, mat);
  knot.rotation.x = Math.PI * 0.2;
  scene.add(knot);

  const n = 1500;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 4000;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 4000;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 2000;
  }
  const bg = new THREE.BufferGeometry();
  bg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(bg, new THREE.PointsMaterial({
    color: 0x06b6d4,
    size: 1.2,
    transparent: true,
    opacity: 0.35,
    sizeAttenuation: true
  }));
  scene.add(pts);

  const clock = new THREE.Clock();
  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', resize);

  return { scene, camera, renderer, knot, pts, clock };
}

function setupCSS3D(container, camera) {
  const cssScene = new THREE.Scene();
  const cssRenderer = new CSS3DRenderer();
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.domElement.className = 'css3d-scene';
  cssRenderer.domElement.style.pointerEvents = 'auto';
  container.appendChild(cssRenderer.domElement);

  PANELS.forEach(p => {
    const obj = createPanel(p);
    cssScene.add(obj);
  });

  function resize() {
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', resize);

  return { scene: cssScene, renderer: cssRenderer };
}

function setupLookAround(camera, container) {
  let yaw = 0, pitch = 0;
  let dragging = false;
  let prevX = 0, prevY = 0;
  const sens = 0.003;
  camera.rotation.order = 'YXZ';

  container.addEventListener('mousedown', (e) => {
    if (e.button !== 2) return;
    e.preventDefault();
    dragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });
  container.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    yaw -= (e.clientX - prevX) * sens;
    pitch -= (e.clientY - prevY) * sens;
    pitch = Math.max(-0.45 * Math.PI, Math.min(0.45 * Math.PI, pitch));
    prevX = e.clientX;
    prevY = e.clientY;
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
  });
  container.addEventListener('mouseup', (e) => { if (e.button === 2) dragging = false; });
  container.addEventListener('mouseleave', () => { dragging = false; });
  container.addEventListener('contextmenu', (e) => e.preventDefault());

  let touchIds = [];
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 2 || touchIds.length > 0) return;
    touchIds = [e.touches[0].identifier, e.touches[1].identifier];
    prevX = (e.touches[0].clientX + e.touches[1].clientX) * 0.5;
    prevY = (e.touches[0].clientY + e.touches[1].clientY) * 0.5;
    dragging = true;
  }, { passive: true });
  container.addEventListener('touchmove', (e) => {
    if (!dragging || e.touches.length !== 2) return;
    const tx = (e.touches[0].clientX + e.touches[1].clientX) * 0.5;
    const ty = (e.touches[0].clientY + e.touches[1].clientY) * 0.5;
    yaw -= (tx - prevX) * sens;
    pitch -= (ty - prevY) * sens;
    pitch = Math.max(-0.45 * Math.PI, Math.min(0.45 * Math.PI, pitch));
    prevX = tx;
    prevY = ty;
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
  }, { passive: true });
  container.addEventListener('touchend', (e) => {
    if (e.touches.length < 2) { touchIds = []; dragging = false; }
  }, { passive: true });
}

(function init() {
  const container = document.getElementById('room-container');
  if (!container) return;

  const { scene, camera, renderer, knot, pts, clock } = setupWebGL(container);
  setupLookAround(camera, container);

  const { scene: cssScene, renderer: cssRenderer } = setupCSS3D(container, camera);

  function loop() {
    requestAnimationFrame(loop);
    const t = clock.getElapsedTime();
    knot.rotation.y = t * 0.02;
    pts.rotation.y = t * 0.008;
    renderer.render(scene, camera);
    cssRenderer.render(cssScene, camera);
  }
  loop();

  window.dispatchEvent(new CustomEvent('room3d-ready'));
})();
