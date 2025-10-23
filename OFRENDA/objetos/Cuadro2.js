import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){


 // CUADRO

    // MARCO
    var g1 = new THREE.BoxGeometry(4, 5, 0.3); 
    var m1 = new THREE.MeshBasicMaterial({ color: 0x806B80, side: THREE.DoubleSide }); 
    var mesh1 = new THREE.Mesh(g1, m1);
    mesh1.position.set(0, 2.5, 0); 

    // VIDRIO CON FOTO
    var g2 = new THREE.BoxGeometry(3.6, 4.6, 0.1);
    var texture = new THREE.TextureLoader().load("./assets/jenny.jpg"); 
    var m2 = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    var mesh2 = new THREE.Mesh(g2, m2);
    mesh2.position.set(0, 2.5, 0.2); 

    // ADORNO
    var g3 = new THREE.SphereGeometry(0.2, 16, 16);
    var m3 = new THREE.MeshBasicMaterial({ color: 0xFFFF00, side: THREE.DoubleSide }); 
    var mesh3 = new THREE.Mesh(g3, m3);
    mesh3.position.set(2, 5, 0.3); 

    var g4 = new THREE.SphereGeometry(0.2, 16, 16);
    var m4 = new THREE.MeshBasicMaterial({ color: 0xFFFF00, side: THREE.DoubleSide });
    var mesh4 = new THREE.Mesh(g4, m4);
    mesh4.position.set(-2, 5, 0.3); 

    var g5 = new THREE.SphereGeometry(0.2, 16, 16);
    var m5 = new THREE.MeshBasicMaterial({ color: 0xFFFF00, side: THREE.DoubleSide });
    var mesh5 = new THREE.Mesh(g5, m5);
    mesh5.position.set(2, 0, 0.3); 

    var g6 = new THREE.SphereGeometry(0.2, 16, 16);
    var m6 = new THREE.MeshBasicMaterial({ color: 0xFFFF00, side: THREE.DoubleSide });
    var mesh6 = new THREE.Mesh(g6, m6);
    mesh6.position.set(-2, 0, 0.3); 

var Cuadro2 = new THREE.Group();
Cuadro2.add(mesh1,mesh2,mesh3,mesh4, mesh5, mesh6);
Cuadro2.position.set(x,y,z);

    return Cuadro2;

}



