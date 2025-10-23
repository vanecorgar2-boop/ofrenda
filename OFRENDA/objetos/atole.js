import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){
 
 // --- BASE DEL TAZÓN ---
  var g1 = new THREE.CylinderGeometry(1.2, 1.5, 0.3, 32);
  var m1 = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
  var mesh1 = new THREE.Mesh(g1, m1);
  mesh1.position.set(0, 0, 0);

  // --- CUERPO DEL TAZÓN ---
  var g2 = new THREE.CylinderGeometry(1.5, 1.8, 1.2, 32);
  var m2 = new THREE.MeshLambertMaterial({ color: 0xA0522D });
  var mesh2 = new THREE.Mesh(g2, m2);
  mesh2.position.set(0, 0.7, 0);

  // --- BORDE SUPERIOR ---
  var g3 = new THREE.TorusGeometry(1.6, 0.08, 16, 100);
  var m3 = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
  var mesh3 = new THREE.Mesh(g3, m3);
  mesh3.position.set(0, 1.4, 0);
  mesh3.rotation.x = 1.57; // alineado horizontalmente

  // --- ATOLE (LÍQUIDO INTERIOR) ---
  var g4 = new THREE.CylinderGeometry(1.4, 1.4, 0.4, 32);
  var m4 = new THREE.MeshLambertMaterial({ color: 0xF5DEB3 }); 
  var mesh4 = new THREE.Mesh(g4, m4);
  mesh4.position.set(0, 1.25, 0);

var atole= new THREE.Group();
atole.add(mesh1,mesh2,mesh3,mesh4,);
atole.position.set(x,y,z);

  return atole;
}