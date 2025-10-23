import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";
export default function E01({ x, y, z, scene}) {

  var geometry02 = new RoundedBoxGeometry(1.2, 4, 1, 8, 0.5);
  var material02 = new THREE.MeshLambertMaterial({});
  var mesh02 = new THREE.Mesh(geometry02, material02);
  var mesh03 = new THREE.Mesh(geometry02, material02);
  mesh03.rotation.set(0, 0, 0.785);
  var mesh04 = new THREE.Mesh(geometry02, material02);
  mesh04.rotation.set(0, 0, 1.57);
  var mesh05 = new THREE.Mesh(geometry02, material02);
  mesh05.rotation.set(0, 0, 2.355);

  var flor = new THREE.Group();
  flor.add(mesh02, mesh03, mesh04, mesh05);


  // Aquí creamos el grupo que contendrá todo el arco
  const arcoGroup = new THREE.Group();

  // Clones y posicionamiento, sin scene.add
  var flor1 = flor.clone(); flor1.position.set(-12, 2, 0);
  var flor1A = flor.clone(); flor1A.rotation.set(0, 1.57, 0); flor1A.position.set(-12, 2, 0);

  var flor2 = flor.clone(); flor2.position.set(-12, 4.8, 0);
  var flor2A = flor.clone(); flor2A.rotation.set(0, 1.57, 0); flor2A.position.set(-12, 4.8, 0);

  var flor3 = flor.clone(); flor3.position.set(-12, 7.6, 0);
  var flor3A = flor.clone(); flor3A.rotation.set(0, 1.57, 0); flor3A.position.set(-12, 7.6, 0);

  var flor4 = flor.clone(); flor4.position.set(-12, 10.4, 0);
  var flor4A = flor.clone(); flor4A.rotation.set(0, 1.57, 0); flor4A.position.set(-12, 10.4, 0);

  var flor5 = flor.clone(); flor5.position.set(-12, 13.2, 0);
  var flor5A = flor.clone(); flor5A.rotation.set(0, 1.57, 0); flor5A.position.set(-12, 13.2, 0);

  var flor6 = flor.clone(); flor6.position.set(-12, 16, 0);
  var flor6A = flor.clone(); flor6A.rotation.set(0, 1.57, 0); flor6A.position.set(-12, 16, 0);

  var flor7 = flor.clone(); flor7.position.set(-12, 18.8, 0);
  var flor7A = flor.clone(); flor7A.rotation.set(0, 1.57, 0); flor7A.position.set(-12, 18.8, 0);

  var flor8 = flor.clone(); flor8.position.set(-12, 21.6, 0);
  var flor8A = flor.clone(); flor8A.rotation.set(0, 1.57, 0); flor8A.position.set(-12, 21.6, 0);

  var flor9 = flor.clone(); flor9.position.set(-12, 24.4, 0);
  var flor9A = flor.clone(); flor9A.rotation.set(0, 1.57, 0); flor9A.position.set(-12, 24.4, 0);

  var flor10 = flor.clone(); flor10.position.set(-9, 24.8, 0);
  var flor10A = flor.clone(); flor10A.rotation.set(0, 1.57, 0); flor10A.position.set(-9, 24.8, 0);

  var flor11 = flor.clone(); flor11.position.set(-6, 25.3, 0);
  var flor11A = flor.clone(); flor11A.rotation.set(0, 1.57, 0); flor11A.position.set(-6, 25.3, 0);

  var flor12 = flor.clone(); flor12.position.set(-3, 25.7, 0);
  var flor12A = flor.clone(); flor12A.rotation.set(0, 1.57, 0); flor12A.position.set(-3, 25.7, 0);

  var flor13 = flor.clone(); flor13.position.set(0, 25.9, 0);
  var flor13A = flor.clone(); flor13A.rotation.set(0, 1.57, 0); flor13A.position.set(0, 25.9, 0);

  var flor14 = flor.clone(); flor14.position.set(3, 25.7, 0);
  var flor14A = flor.clone(); flor14A.rotation.set(0, 1.57, 0); flor14A.position.set(3, 25.7, 0);

  var flor15 = flor.clone(); flor15.position.set(6, 25.3, 0);
  var flor15A = flor.clone(); flor15A.rotation.set(0, 1.57, 0); flor15A.position.set(6, 25.3, 0);

  var flor16 = flor.clone(); flor16.position.set(9, 24.8, 0);
  var flor16A = flor.clone(); flor16A.rotation.set(0, 1.57, 0); flor16A.position.set(9, 24.8, 0);

  var flor17 = flor.clone(); flor17.position.set(12, 2, 0);
  var flor17A = flor.clone(); flor17A.rotation.set(0, 1.57, 0); flor17A.position.set(12, 2, 0);

  var flor18 = flor.clone(); flor18.position.set(12, 4.8, 0);
  var flor18A = flor.clone(); flor18A.rotation.set(0, 1.57, 0); flor18A.position.set(12, 4.8, 0);

  var flor19 = flor.clone(); flor19.position.set(12, 7.6, 0);
  var flor19A = flor.clone(); flor19A.rotation.set(0, 1.57, 0); flor19A.position.set(12, 7.6, 0);

  var flor20 = flor.clone(); flor20.position.set(12, 10.4, 0);
  var flor20A = flor.clone(); flor20A.rotation.set(0, 1.57, 0); flor20A.position.set(12, 10.4, 0);

  var flor21 = flor.clone(); flor21.position.set(12, 13.2, 0);
  var flor21A = flor.clone(); flor21A.rotation.set(0, 1.57, 0); flor21A.position.set(12, 13.2, 0);

  var flor22 = flor.clone(); flor22.position.set(12, 16, 0);
  var flor22A = flor.clone(); flor22A.rotation.set(0, 1.57, 0); flor22A.position.set(12, 16, 0);

  var flor23 = flor.clone(); flor23.position.set(12, 18.8, 0);
  var flor23A = flor.clone(); flor23A.rotation.set(0, 1.57, 0); flor23A.position.set(12, 18.8, 0);

  var flor24 = flor.clone(); flor24.position.set(12, 21.6, 0);
  var flor24A = flor.clone(); flor24A.rotation.set(0, 1.57, 0); flor24A.position.set(12, 21.6, 0);

  var flor25 = flor.clone(); flor25.position.set(12, 24.4, 0);
  var flor25A = flor.clone(); flor25A.rotation.set(0, 1.57, 0); flor25A.position.set(12, 24.4, 0);


  // Añadir todos los clones al grupo
  arcoGroup.add(
    flor1, flor1A, flor2, flor2A, flor3, flor3A, flor4, flor4A, flor5, flor5A,
    flor6, flor6A, flor7, flor7A, flor8, flor8A, flor9, flor9A, flor10, flor10A,
    flor11, flor11A, flor12, flor12A, flor13, flor13A, flor14, flor14A, flor15, flor15A,
    flor16, flor16A, flor17, flor17A, flor18, flor18A, flor19, flor19A, flor20, flor20A,
    flor21, flor21A, flor22, flor22A, flor23, flor23A, flor24, flor24A, flor25, flor25A
  );

  arcoGroup.position.set(x, y, z);

// --- LUCES ---
//arriba
var pl01 = new THREE.PointLight(0xA000FF, 6.5, 250, 0.9);
pl01.position.set(0, 350, -3);
scene.add(pl01);

var pl02 = new THREE.PointLight(0xFF7A00, 6.9, 250, 0.9);
pl02.position.set(150, 250, 0);
scene.add(pl02);  0xFF7A00

var pl03 = new THREE.PointLight(0xFFD000, 6.9, 250, 0.9);
pl03.position.set(-150, 250, 0);
scene.add(pl03);

  return arcoGroup;
}
