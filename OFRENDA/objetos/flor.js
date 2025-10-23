import * as THREE from "../js/three.module.js";
export default function E01({ x, y, z }) {

  // --- CENTRO DE LA FLOR ---
  var gCentro = new THREE.SphereGeometry(0.4, 16, 16);
  var mCentro = new THREE.MeshLambertMaterial({ color: 0xff8000  }); // dorado
  var centro = new THREE.Mesh(gCentro, mCentro);
  centro.position.set(0, 0, 0);

  // --- PÉTALOS ---
  var gPetalo = new THREE.SphereGeometry(0.25, 12, 12);
  var mPetalo = new THREE.MeshLambertMaterial({ color: 0xff8000 }); // naranja

  var p1 = new THREE.Mesh(gPetalo, mPetalo); p1.position.set(0.5, 0, 0);
  var p2 = new THREE.Mesh(gPetalo, mPetalo); p2.position.set(-0.5, 0, 0);
  var p3 = new THREE.Mesh(gPetalo, mPetalo); p3.position.set(0, 0, 0.5);
  var p4 = new THREE.Mesh(gPetalo, mPetalo); p4.position.set(0, 0, -0.5);

  var p5 = new THREE.Mesh(gPetalo, mPetalo); p5.position.set(0.35, 0, 0.35);
  var p6 = new THREE.Mesh(gPetalo, mPetalo); p6.position.set(-0.35, 0, 0.35);
  var p7 = new THREE.Mesh(gPetalo, mPetalo); p7.position.set(0.35, 0, -0.35);
  var p8 = new THREE.Mesh(gPetalo, mPetalo); p8.position.set(-0.35, 0, -0.35);

  var p9 = new THREE.Mesh(gPetalo, mPetalo); p9.position.set(0.25, -0.15, 0);
  var p10 = new THREE.Mesh(gPetalo, mPetalo); p10.position.set(-0.25, -0.15, 0);
  var p11 = new THREE.Mesh(gPetalo, mPetalo); p11.position.set(0, -0.15, 0.25);
  var p12 = new THREE.Mesh(gPetalo, mPetalo); p12.position.set(0, -0.15, -0.25);

  // --- TALLO ---
  var gTallo = new THREE.CylinderGeometry(0.08, 0.1, 2, 10);
  var mTallo = new THREE.MeshLambertMaterial({ color: 0x228b22 });
  var tallo = new THREE.Mesh(gTallo, mTallo);
  tallo.position.set(0, -1.3, 0);

  // --- HOJAS ---
  var gHoja = new THREE.SphereGeometry(0.3, 10, 10);
  var mHoja = new THREE.MeshLambertMaterial({ color: 0x2ecc71 });

  var hoja1 = new THREE.Mesh(gHoja, mHoja); hoja1.scale.set(1.4, 0.3, 0.7); hoja1.position.set(0.4, -1, 0.3);
  var hoja2 = new THREE.Mesh(gHoja, mHoja); hoja2.scale.set(1.4, 0.3, 0.7); hoja2.position.set(-0.4, -1.3, -0.3);

  // --- GRUPO FINAL ---
  var flor = new THREE.Group();
  flor.add(
    centro,
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12,
    tallo,
    hoja1, hoja2
  );

  flor.position.set(x, y, z);

  return flor;
}



  