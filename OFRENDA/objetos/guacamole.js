import * as THREE from "../js/three.module.js";
export default function E01({ x, y, z }) {

    // Molcajete
    var geoMolcajete = new THREE.SphereGeometry(2.5, 32, 32, 0, 3.1416 * 2, 0, 1.5708);
    var matMolcajete = new THREE.MeshLambertMaterial({ color: 0x333333 }); 
    var meshMolcajete = new THREE.Mesh(geoMolcajete, matMolcajete);
    meshMolcajete.rotation.x = 3.1416; 
    meshMolcajete.position.set(0, 1, 0);

    // Patitas del molcajete 
    var patita1 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 0.5, 16),
        matMolcajete
    );
    patita1.position.set(1, -1.2, 1);

    var patita2 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 0.5, 16),
        matMolcajete
    );
    patita2.position.set(-1, -1.2, 1);

    var patita3 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 0.5, 16),
        matMolcajete
    );
    patita3.position.set(0, -1.2, -1.2);

    // Guacamole 
    var geoGuacamole = new THREE.SphereGeometry(2.5, 32, 32);
    var matGuacamole = new THREE.MeshLambertMaterial({ color: 0x76c043 }); 
    var meshGuacamole = new THREE.Mesh(geoGuacamole, matGuacamole);
    meshGuacamole.scale.set(1, 0.2, 1);
    meshGuacamole.position.set(0, 1, 0);

    // Totopos 
    var geoTotopo = new THREE.ConeGeometry(0.4, 0.1, 3);
    var matTotopo = new THREE.MeshLambertMaterial({ color: 0xffcc66 }); 

    var totopo1 = new THREE.Mesh(geoTotopo, matTotopo);
    totopo1.rotation.set(-0.5, 0.5, 0);
    totopo1.position.set(0.5, 1.6, 0.2);

    var totopo2 = new THREE.Mesh(geoTotopo, matTotopo);
    totopo2.rotation.set(-0.3, -0.3, 0);
    totopo2.position.set(-0.4, 1.6, -0.3);

    var totopo3 = new THREE.Mesh(geoTotopo, matTotopo);
    totopo3.rotation.set(-0.2, 0.2, 0);
    totopo3.position.set(1, 1.5, -0.6);

    // Grupo general
    var molcajeteGroup = new THREE.Group();
    molcajeteGroup.add(meshMolcajete);
    molcajeteGroup.add(patita1);
    molcajeteGroup.add(patita2);
    molcajeteGroup.add(patita3);
    molcajeteGroup.add(meshGuacamole);
    molcajeteGroup.add(totopo1);
    molcajeteGroup.add(totopo2);
    molcajeteGroup.add(totopo3);

    molcajeteGroup.position.set(x, y, z);

    return molcajeteGroup;
}