import * as THREE from "../js/three.module.js";
export default function E01({ x, y, z }) {

    // Tazón
    var geoTazon = new THREE.CylinderGeometry(3.7, 3, 2, 32);
    var matTazon = new THREE.MeshLambertMaterial({ color: 0xFFFFFF }); 
    var meshTazon = new THREE.Mesh(geoTazon, matTazon);
    meshTazon.position.set(0, 0, 0);

    // Caldo
    var geoCaldo = new THREE.CylinderGeometry(3.2, 3, 1.1, 32);
    var matCaldo = new THREE.MeshLambertMaterial({ color: 0xB51616 }); 
    var meshCaldo = new THREE.Mesh(geoCaldo, matCaldo);
    meshCaldo.position.set(0, 0.5, 0);

    // Granos de maíz
    var geoMaiz = new THREE.SphereGeometry(0.4, 40, 70);
    var matMaiz = new THREE.MeshLambertMaterial({ color: 0xffffcc }); 

    var maiz1 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz1.position.set(1, 0.8, 0.5);

    var maiz2 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz2.position.set(-1, 0.8, -1.7);

    var maiz3 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz3.position.set(0.9, 0.8, -1);

     var maiz4 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz4.position.set(0, 0.8, 0.);

 var maiz5 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz5.position.set(0.5, 0.8, -1.7);

    var maiz6 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz6.position.set(2, 0.8,- 2.2);

    var maiz7 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz7.position.set(-1, 0.8, -0);

    var maiz8 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz8.position.set(1.6, 0.8, 2);

     var maiz9 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz9.position.set(1.2, 0.8, 2.6)

 var maiz10 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz10.position.set(-1.3, 0.8, -2.5);

    var maiz11 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz11.position.set(1.9,0.8, 1.3);

    var maiz12 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz12.position.set(-0.8, 0.8,- 1);

    var maiz13 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz13.position.set(-1.9, 0.8, 0.5);

    var maiz14 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz14.position.set(-1.5, 0.8, -1.6);

     var maiz15 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz15.position.set(1.1, 0.8, 2)

 var maiz16 = new THREE.Mesh(geoMaiz, matMaiz);
    maiz16.position.set(-0.5, 0.8, -2.8);

   
    // Lechuga
    var geoLechuga = new THREE.SphereGeometry(0.15, 12, 12);
    var matLechuga = new THREE.MeshLambertMaterial({ color: 0x66bb6a }); // Verde

    var lechuga1 = new THREE.Mesh(geoLechuga, matLechuga);
    lechuga1.position.set(0.2, 1, 0.6);

    var lechuga2 = new THREE.Mesh(geoLechuga, matLechuga);
    lechuga2.position.set(-0.4, 1, -0.3);

    var lechuga3 = new THREE.Mesh(geoLechuga, matLechuga);
    lechuga3.position.set(0.2, 1, 2.5);

    var lechuga4 = new THREE.Mesh(geoLechuga, matLechuga);
    lechuga4.position.set(-0.4, 1, -2.2);
    // Agrupar todo
    var pozoleGroup = new THREE.Group();
    pozoleGroup.add(meshTazon);
    pozoleGroup.add(meshCaldo);
    pozoleGroup.add(maiz1);
    pozoleGroup.add(maiz2);
    pozoleGroup.add(maiz3);
    pozoleGroup.add(maiz4);
    pozoleGroup.add(maiz5);
    pozoleGroup.add(maiz6);
    pozoleGroup.add(maiz7);
    pozoleGroup.add(maiz8);
    pozoleGroup.add(maiz9);
    pozoleGroup.add(maiz10);
     pozoleGroup.add(maiz11);
    pozoleGroup.add(maiz12);
    pozoleGroup.add(maiz13);
    pozoleGroup.add(maiz14);
    pozoleGroup.add(maiz15);
    pozoleGroup.add(maiz16);
    pozoleGroup.add(lechuga1);
    pozoleGroup.add(lechuga2);
pozoleGroup.add(lechuga3);
    pozoleGroup.add(lechuga4);

    pozoleGroup.position.set(x, y, z);

    return pozoleGroup;
}
