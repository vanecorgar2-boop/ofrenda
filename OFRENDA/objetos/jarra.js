import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

///// JARRA DE AGUA

    // Cuerpo
    var mesh1 = new THREE.Mesh(
        new THREE.CylinderGeometry(2, 2.5, 6, 32),
        new THREE.MeshBasicMaterial({ color: 0xADD8E6, side: THREE.DoubleSide })
    );
    mesh1.position.set(0, 3, 0);

    // Base de la jarra
    var mesh2 = new THREE.Mesh(
        new THREE.CylinderGeometry(2.6, 2.6, 0.3, 32),
        new THREE.MeshBasicMaterial({ color: 0x87CEEB, side: THREE.DoubleSide })
    );
    mesh2.position.set(0, -0.1, 0);

    // Arriba del cuer
    var mesh3 = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 2, 2, 32),
        new THREE.MeshBasicMaterial({ color: 0xE5FFF6, side: THREE.DoubleSide })
    );
    mesh3.position.set(0, 6.5, 0);

    // Donde se agarra
    var mesh4 = new THREE.Mesh(
        new THREE.TorusGeometry(1.8, 0.2, 16, 30),
        new THREE.MeshBasicMaterial({ color: 0xADD8E6, side: THREE.DoubleSide })
    );
    mesh4.position.set(-2.3, 3.5, 0);
    mesh4.rotation.z = 1.57;

    // Agua
    var mesh5 = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 2.2, 4.5, 32),
        new THREE.MeshBasicMaterial({ color: 0xEDFBFF, side: THREE.DoubleSide })
    );
    mesh5.position.set(0, 2.7, 0);

    // Borde superior
    var mesh6 = new THREE.Mesh(
        new THREE.TorusGeometry(1.7, 0.08, 16, 100),
        new THREE.MeshBasicMaterial({ color: 0xB0E0E6, side: THREE.DoubleSide })
    );
    mesh6.position.set(0, 7.5, 0);
    mesh6.rotation.x = 1.57;

    // Pico
    var mesh7 = new THREE.Mesh(
        new THREE.ConeGeometry(0.8, 1.2, 12),
        new THREE.MeshBasicMaterial({ color: 0xADC4C2, side: THREE.DoubleSide })
    );
    mesh7.position.set(1.5, 6.8, 0);
    mesh7.rotation.y = -0.2;

var Jarra = new THREE.Group();
Jarra.add(mesh1,mesh2,mesh3,mesh4, mesh5, mesh6, mesh7);
Jarra.position.set(x,y,z);

    return Jarra;

}




    
