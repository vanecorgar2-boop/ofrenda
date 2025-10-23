import * as THREE from "../js/three.module.js";

export default function Vaso({x,y,z}){

    // CUERPO DEL VASO
    var g1 = new THREE.CylinderGeometry(1.5, 1.2, 3, 32);
    var m1 = new THREE.MeshLambertMaterial({ 
        color: 0xE1F5FE,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide 
    });
    var mesh1 = new THREE.Mesh(g1, m1);
    mesh1.position.set(0, 1.6, 0);

    // BASE DEL VASO
    var g2 = new THREE.CylinderGeometry(1.2, 1.2, 0.2, 32);
    var mesh2 = new THREE.Mesh(g2, m1); 
    mesh2.position.set(0, 0.1, 0); 

    // CONTENIDO (AGUA)
    var g3 = new THREE.CylinderGeometry(1.4, 1.1, 2.5, 32);
    var m3 = new THREE.MeshLambertMaterial({ color: 0x00BFFF, side: THREE.DoubleSide });
    var mesh3 = new THREE.Mesh(g3, m3);
    mesh3.position.set(0, 1.45, 0); 

    // GRUPO
    var Vaso = new THREE.Group();
    Vaso.add(mesh1, mesh2, mesh3);
    Vaso.position.set(x,y,z);

    return Vaso;
}