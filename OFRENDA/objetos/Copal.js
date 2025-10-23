import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

//  COPAL CON HUMO

  // --- BASE DEL COPAL ---
  var g1 = new THREE.CylinderGeometry(0.8, 1.2, 0.3, 32);
  var m1 = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); // café oscuro
  var mesh1 = new THREE.Mesh(g1, m1);
  mesh1.position.set(0, 0.2, 0);

  // --- CUERPO PRINCIPAL ---
  var g2 = new THREE.CylinderGeometry(1.2, 0.8, 0.6, 32);
  var m2 = new THREE.MeshLambertMaterial({ color: 0xA0522D }); // tono barro
  var mesh2 = new THREE.Mesh(g2, m2);
  mesh2.position.set(0, 0.8, 0);

  // --- BORDE SUPERIOR ---
  var g3 = new THREE.TorusGeometry(1.0, 0.05, 16, 100);
  var m3 = new THREE.MeshLambertMaterial({ color: 0x5C3317 }); // marrón oscuro
  var mesh3 = new THREE.Mesh(g3, m3);
  mesh3.position.set(0, 1.1, 0);
  mesh3.rotation.x = 1.57;

  // --- CARBÓN / RESINA ENCENDIDA ---
  var g4 = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 32);
  var m4 = new THREE.MeshLambertMaterial({ color: 0x2F2F2F }); // negro carbón
  var mesh4 = new THREE.Mesh(g4, m4);
  mesh4.position.set(0, 1.15, 0);

  // --- BRILLO DEL FUEGO (RESINA ENCENDIDA) ---
  var g5 = new THREE.SphereGeometry(0.25, 16, 16);
  var m5 = new THREE.MeshLambertMaterial({ color: 0xFF4500, emissive: 0xFF8C00 }); // rojo-naranja encendido
  var mesh5 = new THREE.Mesh(g5, m5);
  mesh5.position.set(0, 1.25, 0);

  // --- HUMO (3 PARTES LIGERAS) ---
  var g6 = new THREE.SphereGeometry(0.2, 16, 16);
  var m6 = new THREE.MeshLambertMaterial({ color: 0xD3D3D3, transparent: true, opacity: 0.6 });
  var mesh6 = new THREE.Mesh(g6, m6);
  mesh6.position.set(0, 1.6, 0);

  var g7 = new THREE.SphereGeometry(0.25, 16, 16);
  var m7 = new THREE.MeshLambertMaterial({ color: 0xDCDCDC, transparent: true, opacity: 0.5 });
  var mesh7 = new THREE.Mesh(g7, m7);
  mesh7.position.set(0, 1.9, 0.1);

  var g8 = new THREE.SphereGeometry(0.3, 16, 16);
  var m8 = new THREE.MeshLambertMaterial({ color: 0xE8E8E8, transparent: true, opacity: 0.4 });
  var mesh8 = new THREE.Mesh(g8, m8);
  mesh8.position.set(0, 2.2, -0.1);


var Copal = new THREE.Group();
Copal.add(mesh1,mesh2,mesh3,mesh4, mesh5, mesh6,  mesh7, mesh8);
Copal.position.set(x,y,z);

    return Copal;

}



