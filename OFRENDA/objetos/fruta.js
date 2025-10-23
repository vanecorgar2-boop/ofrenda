import * as THREE from "../js/three.module.js";
export default function E01({x, y, z}) {

  // --- Materiales ---
  const materialFruta = new THREE.MeshStandardMaterial({ color: 0xff7f27 }); // naranja
  const materialTallo = new THREE.MeshStandardMaterial({ color: 0x3b2f2f }); // café oscuro
  const materialHoja = new THREE.MeshStandardMaterial({ color: 0x3cb371 }); // verde hoja

  // --- Geometrías ---
  // Cuerpo principal
  const cuerpo = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 32, 32),
    materialFruta
  );
  cuerpo.position.set(0, 1.5, 0);

  // Tallo
  const tallo = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.1, 0.5, 16),
    materialTallo
  );
  tallo.position.set(0, 3, 0);

  // Hoja
  const hoja = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 16, 16, 0, 3.14159),
    materialHoja
  );
  hoja.rotation.z = 3.14159 / 2;
  hoja.position.set(0.5, 3.2, 0);

  // Agrupar
  var fruta = new THREE.Group();
  fruta.add(cuerpo);
  fruta.add(tallo);
  fruta.add(hoja);

  fruta.position.set(x, y, z);

  return fruta;
}