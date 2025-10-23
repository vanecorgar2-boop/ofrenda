import * as THREE from "../js/three.module.js";
export default function E01({ x, y, z }) {

    var materialcruz = new THREE.MeshLambertMaterial({ color: 0x8B4513 });

    // Brazo vertical de la cruz
    var geometriaVertical = new THREE.BoxGeometry(1, 8, 1); 
    var meshVertical = new THREE.Mesh(geometriaVertical, materialcruz);

    // Brazo horizontal de la cruz
    var geometriaHorizontal = new THREE.BoxGeometry(5, 1, 1); 
    var meshHorizontal = new THREE.Mesh(geometriaHorizontal, materialcruz);
    meshHorizontal.position.set(0, 2, 0);

    // Grupo para unir las dos piezas
    var cruzGroup = new THREE.Group();
    cruzGroup.add(meshVertical, meshHorizontal);

    cruzGroup.position.set(x, y, z);

    return cruzGroup;
}
