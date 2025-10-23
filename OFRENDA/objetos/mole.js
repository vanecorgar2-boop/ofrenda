import * as THREE from "../js/three.module.js";
export default function E01({ x, y, z }) {

    // Muslo
    var geoMuslo = new THREE.SphereGeometry(1, 32, 32);
    var matMuslo = new THREE.MeshLambertMaterial({ color: 0x3e2723 }); // color pollo dorado
    var meshMuslo = new THREE.Mesh(geoMuslo, matMuslo);
    meshMuslo.scale.set(1, 1.3, 0.8);
    meshMuslo.position.set(0, 1.5, 0);

    // Hueso 
    var geoHueso = new THREE.CylinderGeometry(0.2, 0.2, 1.5, 16);
    var matHueso = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var meshHueso = new THREE.Mesh(geoHueso, matHueso);
    meshHueso.rotation.z = Math.PI / 2;
    meshHueso.position.set(-1.5, 1.5, 0);

    var geoHuesoPunta = new THREE.SphereGeometry(0.3, 16, 16);
    var punta1 = new THREE.Mesh(geoHuesoPunta, matHueso);
    punta1.position.set(-2.2, 1.5, 0);

    var punta2 = new THREE.Mesh(geoHuesoPunta, matHueso);
    punta2.position.set(-0.8, 1.5, 0);

    // Mole 
    var geoMole = new THREE.SphereGeometry(1.2, 32, 32);
    var matMole = new THREE.MeshLambertMaterial({ color: 0x3e2723 }); // color chocolate
    var meshMole = new THREE.Mesh(geoMole, matMole);
    meshMole.scale.set(2, 0.4, 2); 
    meshMole.position.set(0, 0.5, 0);

    

    // Parte externa del plato 
    var geoBorde = new THREE.CylinderGeometry(3, 3,0.2, 32);
    var matPlato = new THREE.MeshLambertMaterial({ color: 0xFFFFFF}); // gris claro
    var meshBorde = new THREE.Mesh(geoBorde, matPlato);
    meshBorde.position.set(0, 0.15, 0);

    
    // Grupo
    var piernaGroup = new THREE.Group();
    piernaGroup.add(meshMuslo);
    piernaGroup.add(meshHueso);
    piernaGroup.add(punta1);
    piernaGroup.add(punta2);
    piernaGroup.add(meshMole);
    
 piernaGroup.add(meshBorde);
   

    piernaGroup.position.set(x, y, z);

    return piernaGroup;
}