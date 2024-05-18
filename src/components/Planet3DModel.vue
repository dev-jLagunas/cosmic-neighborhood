<script setup>
import { onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import stars from "/3d-skins/stardot.png";

// Props
const props = defineProps(["planetSkin"]);

// Scene
const scene = new THREE.Scene();

// Load Textures
const textureLoader = new THREE.TextureLoader();
const planetTexture = textureLoader.load(props.planetSkin);
const starTexture = textureLoader.load(stars);

// Create Earth Mesh
const createEarth = () => {
  const geometry = new THREE.SphereGeometry(1, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    map: planetTexture,
  });
  const earthMesh = new THREE.Mesh(geometry, material);
  scene.add(earthMesh);

  return earthMesh;
};

// Create Stars
const createStars = () => {
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    size: 0.15,
    map: starTexture,
    transparent: true,
    depthWrite: false,
  });

  const starVertices = [];
  for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(200);
    const y = THREE.MathUtils.randFloatSpread(200);
    const z = THREE.MathUtils.randFloatSpread(200);
    starVertices.push(x, y, z);
  }

  starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
  );

  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
};

// Set Up Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Set Up Lights
const setupLights = () => {
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
  directionalLight.position.set(1, 1, 2);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.08);
  scene.add(ambientLight);
};

// Set Up Camera
const setupCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );

  camera.position.z = 20;
  scene.add(camera);
  return camera;
};

// Set Up Renderer

const setupRenderer = () => {
  const canvas = document.querySelector(".webgl");
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  return renderer;
};

// Handle Window Resize
const handleResize = (camera, renderer) => {
  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
};

// Initialize
const init = () => {
  const earthMesh = createEarth();
  createStars();
  setupLights();
  const camera = setupCamera();
  const renderer = setupRenderer();

  // Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  handleResize(camera, renderer);

  const animate = () => {
    requestAnimationFrame(animate);

    earthMesh.rotation.y += 0.003;

    controls.update();

    renderer.render(scene, camera);
  };

  animate();
};

onMounted(init);
</script>

<template>
  <canvas class="webgl"></canvas>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
