import * as THREE from "../js/three.module.js";
export default function E01({ x, y, z }) {
  // Crear grupo principal
  

  // Cuerpo de la taza
  var matTaza = new THREE.MeshPhongMaterial({ color: 0xffffff });
  var geoTaza = new THREE.CylinderGeometry(1, 1, 2, 32, 1, true);
  var meshTaza = new THREE.Mesh(geoTaza, matTaza);
  meshTaza.position.y = 1;

  // Fondo
  var geoFondo = new THREE.CircleGeometry(1, 32);
  var meshFondo = new THREE.Mesh(geoFondo, matTaza);
  meshFondo.rotation.x = -1.5708; 
  meshFondo.position.y = 0;

  // Café
  var matCafe = new THREE.MeshPhongMaterial({ color: 0x4b2e05 });
  var geoCafe = new THREE.CircleGeometry(0.95, 32);
  var meshCafe = new THREE.Mesh(geoCafe, matCafe);
  meshCafe.rotation.x = -1.5708; 
  meshCafe.position.y = 2.01;

  // Plato
  var matPlato = new THREE.MeshPhongMaterial({ color: 0xf5f5f5 });
  var geoPlato = new THREE.CylinderGeometry(1.8, 1.8, 0.1, 32);
  var meshPlato = new THREE.Mesh(geoPlato, matPlato);
  meshPlato.position.y = 0;

  // Asa
  var geoAsa = new THREE.TorusGeometry(0.55, 0.12, 16, 32);
  var meshAsa = new THREE.Mesh(geoAsa, matTaza);
  meshAsa.rotation.z = 1.5708; 
  meshAsa.position.set(1.1, 1, 0);


  var Taza = new THREE.Group();
  Taza.add(meshTaza, meshFondo, meshCafe, meshPlato, meshAsa);


  // Posición general
  Taza.position.set(x, y, z);

  return Taza;
}