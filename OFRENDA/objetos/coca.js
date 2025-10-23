import * as THREE from "../js/three.module.js";
export default function E01({ x, y, z }) {

    // CUERPO
    var geoCuerpo = new THREE.CylinderGeometry(1.2, 1.2, 7, 32);
    var matCuerpo = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    var meshCuerpo = new THREE.Mesh(geoCuerpo, matCuerpo);
    meshCuerpo.position.set(0, 0, 0);

    // CUELLO
    var geoCuello = new THREE.CylinderGeometry(0.5, 0.7, 2, 32);
    var matCuello = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    var meshCuello = new THREE.Mesh(geoCuello, matCuello);
    meshCuello.position.set(0, 4.5, 0);

    // TAPA
    var geoTapa = new THREE.CylinderGeometry(0.55, 0.55, 0.3, 32);
    var matTapa = new THREE.MeshLambertMaterial({ color: 0x8b0000, side: THREE.DoubleSide });
    var meshTapa = new THREE.Mesh(geoTapa, matTapa);
    meshTapa.position.set(0, 5.7, 0);

    // ETIQUETA
    var geoEtiqueta = new THREE.CylinderGeometry(1.22, 1.22, 1.5, 32);
    var matEtiqueta = new THREE.MeshLambertMaterial({ color: 0xd32f2f, side: THREE.DoubleSide });
    var meshEtiqueta = new THREE.Mesh(geoEtiqueta, matEtiqueta);
    meshEtiqueta.position.set(0, 0, 0);

    // GRUPO
    var botella = new THREE.Group();
    botella.add(meshCuerpo, meshCuello, meshTapa, meshEtiqueta);
    botella.position.set(x, y, z);

    return botella;
}
