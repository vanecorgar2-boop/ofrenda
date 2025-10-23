import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

  // --- CUERPO PRINCIPAL ---
  var g1 = new THREE.CylinderGeometry(0.9, 1.2, 3, 32);
  var m1 = new THREE.MeshLambertMaterial({ color: 0x556B2F }); 
  var mesh1 = new THREE.Mesh(g1, m1);
  mesh1.position.set(0, 1.5, 0);

  // --- CUELLO ---
  var g2 = new THREE.CylinderGeometry(0.35, 0.45, 1.2, 32);
  var m2 = new THREE.MeshLambertMaterial({ color: 0x6B8E23 }); 
  var mesh2 = new THREE.Mesh(g2, m2);
  mesh2.position.set(0, 3.6, 0);

  // --- BOCA DE LA BOTELLA ---
  var g3 = new THREE.TorusGeometry(0.35, 0.05, 16, 100);
  var m3 = new THREE.MeshLambertMaterial({ color: 0x4F4F4F }); 
  var mesh3 = new THREE.Mesh(g3, m3);
  mesh3.rotation.x = 1.57079; 
  mesh3.position.set(0, 4.3, 0);

  // --- TAPÓN ---
  var g4 = new THREE.CylinderGeometry(0.3, 0.3, 0.4, 16);
  var m4 = new THREE.MeshLambertMaterial({ color: 0xC19A6B }); 
  var mesh4 = new THREE.Mesh(g4, m4);
  mesh4.position.set(0, 4.6, 0);

  // --- DETALLE DECORATIVO (como cuerda o etiqueta) ---
  var g5 = new THREE.TorusGeometry(0.8, 0.05, 16, 100);
  var m5 = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
  var mesh5 = new THREE.Mesh(g5, m5);
  mesh5.rotation.x = 1.570796; 
  mesh5.position.set(0, 1.2, 0);

  //GRUPO

  var Mezcal = new THREE.Group();
  Mezcal.add(mesh1, mesh2, mesh3, mesh4);
  Mezcal.position.set(x, y, z);
  

  return Mezcal;
}