/**
 * 3D background – WebGL (torus, particles), mouse-follow. ES module, Three.js from import map.
 */
import * as THREE from 'three';

(function () {
  'use strict';

  var canvas = document.getElementById('canvas-3d');
  if (!canvas) return;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000);
  camera.position.set(0, 0, 0);
  camera.rotation.order = 'YXZ';

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  var ambient = new THREE.AmbientLight(0x0f0a1a, 0.5);
  scene.add(ambient);
  var pl = new THREE.PointLight(0x7c3aed, 0.6, 2000);
  pl.position.set(800, 400, 800);
  scene.add(pl);
  var pl2 = new THREE.PointLight(0x06b6d4, 0.25, 1500);
  pl2.position.set(-600, -200, 600);
  scene.add(pl2);

  var geo = new THREE.TorusKnotGeometry(180, 50, 128, 24);
  var mat = new THREE.MeshBasicMaterial({ color: 0x7c3aed, wireframe: true, transparent: true, opacity: 0.12 });
  var knot = new THREE.Mesh(geo, mat);
  knot.rotation.x = Math.PI * 0.2;
  scene.add(knot);

  var n = 1500;
  var pos = new Float32Array(n * 3);
  for (var i = 0; i < n; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 4000;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 4000;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 2000;
  }
  var bg = new THREE.BufferGeometry();
  bg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  var pts = new THREE.Points(bg, new THREE.PointsMaterial({
    color: 0x06b6d4,
    size: 1.2,
    transparent: true,
    opacity: 0.35,
    sizeAttenuation: true
  }));
  scene.add(pts);

  var clock = new THREE.Clock();
  var rangeYaw = 0.85 * Math.PI;
  var rangePitch = 0.35 * Math.PI;
  var lerp = 0.06;
  var targetYaw = 0, targetPitch = 0;
  var yaw = 0, pitch = 0;
  var hasMouse = false;
  var moveSensitivity = 0.0012;

  function setTarget(normX, normY) {
    hasMouse = true;
    targetYaw = (normX - 0.5) * 2 * rangeYaw;
    targetPitch = (normY - 0.5) * 2 * rangePitch;
    targetPitch = Math.max(-rangePitch, Math.min(rangePitch, targetPitch));
  }

  function applyMovement(dx, dy) {
    hasMouse = true;
    targetYaw += moveSensitivity * dx;
    targetPitch -= moveSensitivity * dy;
    targetPitch = Math.max(-rangePitch, Math.min(rangePitch, targetPitch));
  }

  function isLocked() {
    return document.pointerLockElement === document.body;
  }

  function updateLockUI() {
    var wrap = document.getElementById('room-lock-wrap');
    if (wrap) wrap.classList.toggle('hidden', isLocked());
    document.body.classList.toggle('pointer-locked', isLocked());
  }

  document.addEventListener('mousemove', function (e) {
    if (isLocked()) {
      applyMovement(e.movementX, e.movementY);
    } else {
      setTarget(e.clientX / window.innerWidth, e.clientY / window.innerHeight);
    }
  });
  window.addEventListener('mouseleave', function () {
    if (!isLocked()) hasMouse = false;
  });
  window.addEventListener('touchmove', function (e) {
    if (e.touches.length < 1) return;
    var t = e.touches[0];
    setTarget(t.clientX / window.innerWidth, t.clientY / window.innerHeight);
  }, { passive: true });
  window.addEventListener('touchstart', function (e) {
    if (e.touches.length < 1) return;
    var t = e.touches[0];
    setTarget(t.clientX / window.innerWidth, t.clientY / window.innerHeight);
  }, { passive: true });
  window.addEventListener('touchend', function (e) {
    if (e.touches.length === 0 && !isLocked()) hasMouse = false;
  }, { passive: true });

  document.addEventListener('pointerlockchange', updateLockUI);

  var lockBtn = document.getElementById('room-lock-btn');
  var lockWrap = document.getElementById('room-lock-wrap');
  if (typeof document.body.requestPointerLock !== 'function' && lockWrap) {
    lockWrap.style.display = 'none';
  } else if (lockBtn) {
    lockBtn.addEventListener('click', function () {
      if (isLocked()) return;
      document.body.requestPointerLock();
    });
  }
  updateLockUI();

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function loop() {
    requestAnimationFrame(loop);
    var t = clock.getElapsedTime();
    knot.rotation.y = t * 0.02;
    pts.rotation.y = t * 0.008;
    if (!hasMouse) {
      targetYaw *= 0.96;
      targetPitch *= 0.96;
    }
    yaw += (targetYaw - yaw) * lerp;
    pitch += (targetPitch - pitch) * lerp;
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
    renderer.render(scene, camera);
  }
  loop();
})();
