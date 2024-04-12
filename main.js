import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { color } from "three/examples/jsm/nodes/Nodes.js";
import Box from "./CreateBox.js";
//field of view
const scene = new THREE.Scene();

//aspect ratio
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  //near and far clipping plane
  0.1,
  1000
);
// the renderer
const renderer = new THREE.WebGLRenderer(true, true);
renderer.shadowMap.enabled = true; //añadimos las sombras
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement); //control para ver escenario
////////////////////////////////////////////////////
//
//
//

//cubo

//const geometry = new THREE.BoxGeometry(1, 1, 1);
//const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); //meshBasicMaterial no nececista luz estos si
const cube = new Box(
  1,
  1,
  1,
  "#00ff00",
  { x: 0, y: -0.01, z: 0 },
  { x: 0, y: 0, z: 20 }
);
cube.castShadow = true; //le decimos que va a tener sombra
scene.add(cube);

//otro cubo (hace de suelo)
const geometryGround = new Box(
  5,
  0.5,
  40,
  "#0000ff",
  { x: 0, y: 0, z: 0 },
  { x: 0, y: -2, z: 0 }
);
//const materialGround = new THREE.MeshStandardMaterial({ color: 0x0000ff }); //meshBasicMaterial no nececista luz estos si
//const ground = new THREE.Mesh(geometryGround, materialGround);
geometryGround.receiveShadow = true; //le decimos que va a recibir la sombra de cubo
//geometryGround.position.y = -2;//lo hacemos arriba "{ x: 0, y: -2, z: 0 }"
scene.add(geometryGround);
//luz ambiental
scene.add(new THREE.AmbientLight(0xffffff, 0.3));
//añadimos luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.y = 2;
light.position.z = 1; //para que se vea bien la luz
light.castShadow = true; //aplicamos sombras
scene.add(light);
//pocion camara
camera.position.z = 30; //pocision camara
camera.position.y = 5;
//
//
//para detectar cuando se deja de pulasr (si no el objeto se moveria aun despues de pulsar la tecla)
const keys = {
  a: { pressed: false },
  d: { pressed: false },
  s: { pressed: false },
  w: { pressed: false },
  space: { pressed: false },
};
let lastJumpTime = 0;
const minJumpInterval = 2050; // Intervalo mínimo de tiempo entre saltos en milisegundos.

//atrapamos las teclas
window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyA":
      keys.a.pressed = true;

      break;
    case "KeyD":
      keys.d.pressed = true;

      break;
    case "KeyS":
      keys.w.pressed = true;

      break;
    case "KeyW":
      keys.s.pressed = true;

      break;
    case "Space":
      const currentTime = performance.now(); // Obtenemos el tiempo actual.

      // Verifica si ha pasado suficiente tiempo desde el último salto.
      if (currentTime - lastJumpTime > minJumpInterval) {
        // Realiza el salto.
        cube.velocity.y = 0.1;

        // Actualiza el tiempo del último salto.
        lastJumpTime = currentTime;
      }

      break;
  }
});
window.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "KeyA":
      keys.a.pressed = false;

      break;
    case "KeyD":
      keys.d.pressed = false;

      break;
    case "KeyS":
      keys.w.pressed = false;

      break;
    case "KeyW":
      keys.s.pressed = false;

      break;
  }
});
//
//enemigos
//añady array
const enemies = [];
//frame enemy spawn
let frames = 0;
let spawnRate = 200;
//
//Funcion para renderizar
function animate() {
  const animationID = requestAnimationFrame(animate);
  renderer.render(scene, camera);
  //hacer que no se mueva si no se toca nada
  cube.velocity.x = 0;
  //movimiento del cubo eje x
  if (keys.a.pressed) {
    cube.velocity.x = -0.05;
  } else if (keys.d.pressed) {
    cube.velocity.x = +0.05;
  }
  cube.velocity.z = 0;
  //movimiento del cubo eje z
  if (keys.s.pressed) {
    cube.velocity.z = -0.05;
  } else if (keys.w.pressed) {
    cube.velocity.z = +0.05;
  }

  cube.updateBoTo(geometryGround); //pasamos por parametro lo que sera el sueloS
  //para cada enemigo tambien
  enemies.forEach((enemy) => {
    enemy.updateBoTo(geometryGround, true);
    if (cube.boxCollicion(cube, enemy)) {
      window.cancelAnimationFrame(animationID);
    }
  });
  if (frames % spawnRate === 0) {
    if (spawnRate > 20) {
      spawnRate -= 1;
    }
    const enemy = new Box(
      1,
      1,
      1,
      "red",
      { x: 0, y: 0, z: 0.005 }, //gravedad
      { x: (Math.random() - 0.5) * 5, y: 0, z: -20 }, //pocision
      true
    );
    enemy.castShadow = true; //le decimos que va a tener sombra
    scene.add(enemy);
    enemies.push(enemy);
  }
  frames++;
}
//aplicamos
animate();
