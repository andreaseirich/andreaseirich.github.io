/**
 * Cinematic 3D background – scroll-reactive, atmospheric
 */

(function () {
  const canvas = document.getElementById('canvas-3d');
  if (!canvas) return;

  let scene, camera, renderer, particles, particleGeometry, mouse = { x: 0, y: 0 };
  let torusKnot, particleBaseY;
  const clock = new THREE.Clock();

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 14);

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const ambient = new THREE.AmbientLight(0x0f0a1a, 0.5);
    scene.add(ambient);
    const point = new THREE.PointLight(0x7c3aed, 0.6, 100);
    point.position.set(10, 8, 12);
    scene.add(point);
    const point2 = new THREE.PointLight(0x06b6d4, 0.3, 80);
    point2.position.set(-8, -6, 10);
    scene.add(point2);

    const geometry = new THREE.TorusKnotGeometry(1.4, 0.4, 128, 24);
    const material = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    torusKnot = new THREE.Mesh(geometry, material);
    torusKnot.rotation.x = Math.PI * 0.22;
    scene.add(torusKnot);

    const count = 1200;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 24;
      sizes[i] = Math.random() * 1.2 + 0.4;
    }
    particleBaseY = new Float32Array(count);
    for (let i = 0; i < count; i++) particleBaseY[i] = positions[i * 3 + 1];
    particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.06,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true
    });
    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    animate();
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onMouseMove(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  function getScrollProgress() {
    const d = document.documentElement.scrollHeight - window.innerHeight;
    return d <= 0 ? 0 : Math.min(1, window.scrollY / d);
  }

  function onScroll() {
    const p = getScrollProgress();
    if (window.updateReelProgress) window.updateReelProgress(p);
  }

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    const scroll = typeof getScrollProgress === 'function' ? getScrollProgress() : 0;

    if (torusKnot) {
      torusKnot.rotation.x = Math.PI * 0.22 + mouse.y * 0.12 + t * 0.04;
      torusKnot.rotation.y = t * 0.06 + mouse.x * 0.15;
      torusKnot.material.opacity = 0.12 + 0.08 * (1 - scroll);
    }
    if (particles && particleBaseY) {
      particles.rotation.y = t * 0.015 + scroll * 0.5;
      const pos = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleBaseY.length; i++) {
        pos[i * 3 + 1] = particleBaseY[i] + Math.sin(t * 0.5 + i * 0.008) * 0.5;
      }
      particleGeometry.attributes.position.needsUpdate = true;
    }

    camera.position.z = 14 + scroll * 4;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  init();
})();
