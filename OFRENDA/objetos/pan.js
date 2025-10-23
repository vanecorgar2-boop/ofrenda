import * as THREE from "../js/three.module.js";

export default function PanDeMuerto({x,y,z}){

    // Materiales
    var materialPan = new THREE.MeshLambertMaterial({ color: 0xD2B48C, side: THREE.DoubleSide });
    var materialAzucar = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 90 });

    // Base del pan (esfera aplastada)
    var geometriaBase = new THREE.SphereGeometry(3, 32, 32);
    var meshBase = new THREE.Mesh(geometriaBase, materialPan);
    meshBase.scale.y = 0.6; 

    // Geometrías para el molde del hueso
    var geometriaCuerpoHueso = new THREE.CylinderGeometry(0.3, 0.3, 3, 32);
    var geometriaNudillo = new THREE.SphereGeometry(0.5, 32, 32);

    // Molde del hueso
    var huesoMolde = new THREE.Group();
    var cuerpo = new THREE.Mesh(geometriaCuerpoHueso, materialPan);
    var nudillo1 = new THREE.Mesh(geometriaNudillo, materialPan);
    var nudillo2 = new THREE.Mesh(geometriaNudillo, materialPan);
    nudillo1.position.y = 1.5; 
    nudillo2.position.y = -1.5;
    huesoMolde.add(cuerpo, nudillo1, nudillo2);

    // Grupo para los 4 huesitos
    var grupoHuesos = new THREE.Group();

    // Hueso 1 
    var hueso1 = huesoMolde.clone();
    hueso1.rotation.x = 1.5708; 
    hueso1.rotation.z = 0.3; 
    hueso1.position.z = 1.5;

    // Hueso 2
    var hueso2 = huesoMolde.clone();
    hueso2.rotation.x =1.5708;
    hueso2.rotation.z = -0.3; 
    hueso2.position.z = -1.5;

    // Hueso 3 
    var hueso3 = huesoMolde.clone();
    hueso3.rotation.z = 1.5708;
    hueso3.rotation.x = -0.3;
    hueso3.position.x = 1.5;

    // Hueso 4 
    var hueso4 = huesoMolde.clone();
    hueso4.rotation.z = 1.5708;
    hueso4.rotation.x = 0.3; 
    hueso4.position.x = -1.5;

    grupoHuesos.add(hueso1, hueso2, hueso3, hueso4);
    grupoHuesos.position.y = 1.3; 

    // Cráneo 
    var geometriaCranio = new THREE.SphereGeometry(0.8, 32, 32);
    var meshCranio = new THREE.Mesh(geometriaCranio, materialPan);
    meshCranio.position.y = 1.6;


    // Plato 
    var materialPlato = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });
    var geometriaPlato = new THREE.CylinderGeometry(4, 4, 0.3, 32);
    var plato = new THREE.Mesh(geometriaPlato, materialPlato);
    plato.position.y = -1.8;


    var PanDeMuertoGroup = new THREE.Group();
    PanDeMuertoGroup.add(plato);
    PanDeMuertoGroup.add(meshBase);
    PanDeMuertoGroup.add(grupoHuesos);
    PanDeMuertoGroup.add(meshCranio);

    
    PanDeMuertoGroup.position.set(x,y,z);

    return PanDeMuertoGroup;
}
