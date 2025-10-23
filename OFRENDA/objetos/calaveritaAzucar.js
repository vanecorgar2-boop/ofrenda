import * as THREE from "../js/three.module.js";
export default function E01({ x, y, z }) {


    // Cráneo 
    var geoCranio = new THREE.SphereGeometry(2, 32, 32);
    var matCranio = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var meshCranio = new THREE.Mesh(geoCranio, matCranio);
    meshCranio.scale.set(1, 1.2, 1);
    meshCranio.position.set(0, 2, 0);

    // Ojos 
    var geoOjo = new THREE.SphereGeometry(0.6, 16, 16);
    var matOjo = new THREE.MeshLambertMaterial({ color: 0xF21FCC });

    var ojoIzq = new THREE.Mesh(geoOjo, matOjo);
    ojoIzq.position.set(-0.7, 2, 1.5);

    var ojoDer = new THREE.Mesh(geoOjo, matOjo);
    ojoDer.position.set(0.7, 2, 1.5);

    // Marcos verdes de los ojos
    var geoMarcoOjo = new THREE.TorusGeometry(0.5, 0.08, 8, 16);
    var matMarco = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

    var marcoIzq = new THREE.Mesh(geoMarcoOjo, matMarco);
    marcoIzq.rotation.z = 1.5708;
    marcoIzq.position.set(-0.7, 2, 1.9);

    var marcoDer = new THREE.Mesh(geoMarcoOjo, matMarco);
    marcoDer.rotation.z = 1.5708;
    marcoDer.position.set(0.7, 2, 1.9);

    // Nariz
    var geoNariz = new THREE.ConeGeometry(0.3, 0.5, 4);
    var matNariz = new THREE.MeshLambertMaterial({ color: 0x444444 });
    var meshNariz = new THREE.Mesh(geoNariz, matNariz);
    meshNariz.rotation.x = 3.1416;
    meshNariz.position.set(0, 1., 2);

    // Boca 
    var matBoca = new THREE.MeshLambertMaterial({ color: 0xff9900 });
    var boca1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, 0.05), matBoca);
    boca1.position.set(-0.5, 0., 1.4);
    var boca2 = boca1.clone(); boca2.position.x = -0.25;
    var boca3 = boca1.clone(); boca3.position.x = 0;
    var boca4 = boca1.clone(); boca4.position.x = 0.25;
    var boca5 = boca1.clone(); boca5.position.x = 0.5;

// Mandíbula - esfera achatada (ovalo)
var geoMandibula = new THREE.SphereGeometry(1.4, 32, 32);
var matMandibula = new THREE.MeshLambertMaterial({ color: 0xffffff });
var meshMandibula = new THREE.Mesh(geoMandibula, matMandibula);
meshMandibula.scale.set(1, 0.6, 1);
meshMandibula.position.set(0, -0., 0); 
  
   
    // Grupo total
    var calaveritaGroup = new THREE.Group();
    calaveritaGroup.add(meshCranio);
    calaveritaGroup.add(ojoIzq);
    calaveritaGroup.add(ojoDer);
    calaveritaGroup.add(marcoIzq);
    calaveritaGroup.add(marcoDer);
    calaveritaGroup.add(meshNariz);
    calaveritaGroup.add(boca1);
    calaveritaGroup.add(boca2);
    calaveritaGroup.add(boca3);
    calaveritaGroup.add(boca4);
    calaveritaGroup.add(boca5);

    
    calaveritaGroup.add(meshMandibula);

    calaveritaGroup.position.set(x, y, z);
    return calaveritaGroup;
}
