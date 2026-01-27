/**
 * 3D Background Scene – Three.js
 * Floating geometry, particles, mouse-reactive.
 */

(function () {
  const canvas = document.getElementById('canvas-3d');
  if (!canvas) return;

  let scene, camera, renderer, particles, particleGeometry, mouse = { x: 0, y: 0 };
  let torusKnot;
  let particleBaseY;
  const clock = new THREE.Clock();

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 12;

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Subtle ambient + point lights
    const ambient = new THREE.AmbientLight(0x1a0a2e, 0.6);
    scene.add(ambient);
    const point = new THREE.PointLight(0x6a11cb, 0.8, 80);
    point.position.set(8, 8, 10);
    scene.add(point);
    const point2 = new THREE.PointLight(0x2575fc, 0.5, 60);
    point2.position.set(-6, -4, 8);
    scene.add(point2);

    // Torus knot – wireframe style
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 24);
    const material = new THREE.MeshBasicMaterial({
      color: 0x6a11cb,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    torusKnot = new THREE.Mesh(geometry, material);
    torusKnot.rotation.x = Math.PI * 0.2;
    scene.add(torusKnot);

    // Particle cloud
    const count = 800;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sizes[i] = Math.random() * 1.5 + 0.5;
    }
    particleBaseY = new Float32Array(count);
    for (let i = 0; i < count; i++) particleBaseY[i] = positions[i * 3 + 1];
    particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x2575fc,
      size: 0.08,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true
    });
    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
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

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    if (torusKnot) {
      torusKnot.rotation.x = Math.PI * 0.2 + mouse.y * 0.15 + t * 0.08;
      torusKnot.rotation.y = t * 0.12 + mouse.x * 0.2;
    }
    if (particles && particleBaseY) {
      particles.rotation.y = t * 0.02;
      const pos = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleBaseY.length; i++) {
        pos[i * 3 + 1] = particleBaseY[i] + Math.sin(t + i * 0.01) * 0.4;
      }
      particleGeometry.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);
  }

  init();
})();
