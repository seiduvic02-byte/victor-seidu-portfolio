import './style.css';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="header" id="top">
    <a class="brand" href="#top" aria-label="Victor Seidu home"><span class="brand-mark">V<span>✳</span></span><span class="brand-name">VICTOR<br>SEIDU<span class="reg">®</span></span></a>
    <div class="header-center"><span class="availability-dot"></span> INDEPENDENT CREATIVE PORTFOLIO <span class="divider">/</span> 2025—26</div>
    <nav class="nav" aria-label="Main navigation"><a href="#work">WORK <span>↗</span></a><a href="#about">ABOUT <span>↗</span></a><a class="nav-contact" href="mailto:hello@victorseidu.com">LET'S TALK <span>↗</span></a></nav>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-grid"></div>
      <div class="hero-topline"><span>DESIGN IS A WAY OF SEEING.</span><span>PORTFOLIO / VOL. 01</span></div>
      <div class="hero-copy">
        <div class="eyebrow"><span class="asterisk">✳</span> THE CREATIVE PRACTICE OF VICTOR SEIDU</div>
        <h1 id="hero-title">MAKING<br>IDEAS <em>FEEL</em><br>ALIVE<span class="period">.</span></h1>
        <p>Building digital experiences with depth,<br class="desktop"> detail, and a little bit of the unexpected.</p>
        <a class="round-link" href="#work"><span>EXPLORE SELECTED WORK</span><span class="round-arrow">↘</span></a>
      </div>
      <div class="art-stage" aria-label="Interactive abstract 3D sculpture. Drag to rotate." role="img">
        <div class="stage-glow"></div><canvas id="scene"></canvas>
        <div class="stage-label label-top"><span>FIG. 001</span><span>AN EXPLORATION<br>IN FORM & FEELING</span></div>
        <div class="stage-label label-right"><span>OBJECT<br>IN MOTION</span><span class="tiny-cross">+</span></div>
        <div class="stage-cross cross-one">+</div><div class="stage-cross cross-two">+</div>
        <div class="stage-index"><span>01</span><i></i><span>03</span></div>
        <div class="drag-hint"><span class="drag-icon">↔</span> DRAG TO ROTATE</div>
      </div>
      <div class="hero-bottom"><div><span class="orange-dot"></span> AVAILABLE FOR SELECT PROJECTS</div><div class="hero-bottom-center">INDEPENDENT BY DESIGN. <span>CURIOUS BY NATURE.</span></div><a href="#work">SCROLL TO EXPLORE <span>↓</span></a></div>
    </section>

    <section class="intro" id="about"><div class="section-kicker"><span>01 / THE APPROACH</span><span>✳</span></div><div class="intro-content"><p class="intro-lead">Good design doesn't just look good.<br><span>It makes you feel something.</span></p><div class="intro-side"><p>From the first sketch to the final interaction, I bring ideas into focus through thoughtful design and a distinctly dimensional perspective.</p><a href="mailto:hello@victorseidu.com">MORE ABOUT THE PRACTICE <span>↗</span></a></div></div></section>

    <section class="work" id="work"><div class="section-kicker"><span>02 / SELECTED EXPLORATIONS</span><span>2025 — 2026</span></div><div class="work-heading"><div><span class="orange-star">✳</span><h2>FORM MEETS<br><em>FEELING.</em></h2></div><p>A collection of visual explorations<br>made to move, connect, and inspire.</p></div>
      <div class="projects">
        <article class="project"><div class="project-image project-one"><div class="project-number">01 / 03</div><div class="orb orb-one"><div></div></div><span class="project-overlay">FORM STUDY Nº 01</span><span class="project-corner">↗</span></div><div class="project-meta"><div><h3>Form in motion</h3><p>AN EXPLORATION OF MOVEMENT & MATERIAL</p></div><span>3D EXPLORATION / 2026</span></div></article>
        <article class="project"><div class="project-image project-two"><div class="project-number">02 / 03</div><div class="orb orb-two"><div></div></div><span class="project-overlay">MATERIAL STUDY Nº 02</span><span class="project-corner">↗</span></div><div class="project-meta"><div><h3>Beyond the surface</h3><p>A STUDY IN DEPTH & CONTRAST</p></div><span>VISUAL DIRECTION / 2025</span></div></article>
      </div><div class="work-foot"><span>THERE'S ALWAYS MORE TO EXPLORE.</span><span>GOOD THINGS TAKE SHAPE. ✳</span></div>
    </section>
    <section class="contact" id="contact"><div class="section-kicker"><span>03 / HAVE AN IDEA?</span><span>LET'S MAKE SOMETHING MATTER.</span></div><div class="contact-main"><div><p>GOT SOMETHING IN MIND?</p><h2>LET'S MAKE<br><em>IT REAL.</em></h2></div><a href="mailto:hello@victorseidu.com" class="contact-circle" aria-label="Send an email">↗</a></div><div class="contact-bottom"><a href="mailto:hello@victorseidu.com">HELLO@VICTORSEIDU.COM ↗</a><span>CREATIVE IN EVERY DIMENSION.</span></div></section>
  </main>
  <footer><a class="footer-brand" href="#top">VICTOR SEIDU<span>®</span></a><span>INDEPENDENT CREATIVE PORTFOLIO</span><span>© 2026 / MADE WITH INTENTION</span><a href="#top">BACK TO TOP ↑</a></footer>
`;

const canvas = document.querySelector('#scene');
const stage = document.querySelector('.art-stage');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0, 11);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = new RoomEnvironment();
  scene.environment = pmrem.fromScene(environment, 0.04).texture;
  environment.dispose();
  scene.add(new THREE.AmbientLight(0xffffff, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 4); key.position.set(3, 5, 7); scene.add(key);
  const orangeLight = new THREE.PointLight(0xff5c19, 35, 20); orangeLight.position.set(-4, -1, 3); scene.add(orangeLight);
  const rim = new THREE.PointLight(0xaacaff, 30, 20); rim.position.set(4, 1, -3); scene.add(rim);

  const sculpture = new THREE.Group(); scene.add(sculpture);
  sculpture.rotation.set(-0.13, -0.3, -0.17);
  const chrome = new THREE.MeshPhysicalMaterial({ color: 0xaab1b1, metalness: 0.95, roughness: 0.16, clearcoat: 0.9, clearcoatRoughness: 0.1 });
  const darkChrome = new THREE.MeshPhysicalMaterial({ color: 0x454e4a, metalness: 0.95, roughness: 0.23 });
  const orange = new THREE.MeshPhysicalMaterial({ color: 0xff5a1f, metalness: 0.55, roughness: 0.25, clearcoat: 1 });
  const pale = new THREE.MeshPhysicalMaterial({ color: 0xc8d0c7, metalness: 0.8, roughness: 0.3 });

  // Intertwined, polished forms create the central sculptural object.
  const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.12, 0.31, 300, 32, 2, 3), chrome);
  knot.rotation.set(0.3, 0.1, 0.3); sculpture.add(knot);
  const knot2 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.87, 0.12, 240, 20, 2, 3), orange);
  knot2.rotation.set(1.4, 0.4, 0.1); sculpture.add(knot2);
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), darkChrome); sculpture.add(core);

  function torus(radius, tube, material, rotation, arc = Math.PI * 2) {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 12, 220, arc), material);
    mesh.rotation.set(...rotation); sculpture.add(mesh); return mesh;
  }
  torus(2.08, 0.025, orange, [1.15, 0.25, 0.2]);
  torus(2.13, 0.008, pale, [1.15, 0.25, 0.2]);
  torus(2.35, 0.012, chrome, [0.2, 1.1, 0.3]);
  torus(1.89, 0.014, pale, [0.9, -0.55, 0.9], Math.PI * 1.62);
  torus(2.48, 0.009, orange, [0.4, 0.8, -0.4], Math.PI * 1.05);

  // Small machined components and satellite forms add complexity at every scale.
  const details = new THREE.Group(); sculpture.add(details);
  for (let i = 0; i < 18; i++) {
    const angle = (i / 18) * Math.PI * 2;
    const block = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.075, i % 3 === 0 ? 0.32 : 0.19), i % 3 === 0 ? orange : chrome);
    block.position.set(Math.cos(angle) * 2.08, Math.sin(angle) * 2.08 * 0.38, Math.sin(angle) * 2.08 * 0.92);
    block.rotation.set(angle, 0, angle); details.add(block);
  }
  const satellites = [
    [-2.25, 1.25, 0.2, 0.28, orange], [2.12, -1.4, 0.3, 0.32, chrome],
    [1.83, 1.65, -0.1, 0.15, orange], [-1.68, -1.85, 0.1, 0.13, pale],
    [0.2, 2.28, -0.2, 0.11, chrome]
  ];
  satellites.forEach(([x, y, z, size, mat], i) => {
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(size, i % 2), mat);
    mesh.position.set(x, y, z); mesh.rotation.set(i, i * 2, 0); sculpture.add(mesh);
  });
  for (let i = 0; i < 38; i++) {
    const angle = i * 2.399; const radius = 1.7 + (i % 7) * 0.16;
    const dot = new THREE.Mesh(new THREE.SphereGeometry(i % 7 === 0 ? 0.035 : 0.014, 8, 8), i % 4 === 0 ? orange : pale);
    dot.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, Math.sin(i * 7) * 1.1); sculpture.add(dot);
  }
  let targetX = -0.13, targetY = -0.3, currentX = targetX, currentY = targetY;
  let dragging = false, lastX = 0, lastY = 0;
  stage.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX; lastY = e.clientY; stage.setPointerCapture(e.pointerId); stage.classList.add('dragging'); });
  stage.addEventListener('pointermove', e => { if (!dragging) return; targetY += (e.clientX - lastX) * 0.008; targetX += (e.clientY - lastY) * 0.008; lastX = e.clientX; lastY = e.clientY; });
  const stopDrag = () => { dragging = false; stage.classList.remove('dragging'); };
  stage.addEventListener('pointerup', stopDrag); stage.addEventListener('pointercancel', stopDrag);
  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    camera.position.z = w < 500 ? 12.5 : 11;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize); resize();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function animate() {
    requestAnimationFrame(animate);
    if (!dragging && !reducedMotion.matches) targetY += 0.002;
    currentX += (targetX - currentX) * 0.06; currentY += (targetY - currentY) * 0.06;
    sculpture.rotation.x = currentX; sculpture.rotation.y = currentY;
    renderer.render(scene, camera);
  }
  animate();
} catch (error) {
  console.warn('3D scene unavailable:', error);
  stage.classList.add('scene-fallback');
}
