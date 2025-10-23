import * as THREE from "../js/three.module.js";
export default function E01({ x, y, z }) {

    ///// CATRINA /////

    // Grupo principal
    var catrinaGroup = new THREE.Group();

    // Colores y materiales
    var blanco = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    var negro = new THREE.MeshLambertMaterial({ color: 0x000000, side: THREE.DoubleSide });
    var rosa = new THREE.MeshLambertMaterial({ color: 0xff6fa1, side: THREE.DoubleSide });
    var dorado = new THREE.MeshLambertMaterial({ color: 0xffd700, side: THREE.DoubleSide });
    var morado = new THREE.MeshLambertMaterial({ color: 0x800080, side: THREE.DoubleSide });
    var petalo_mat = new THREE.MeshLambertMaterial({ color: 0xFF66B2, side: THREE.DoubleSide });
    var centro_mat = new THREE.MeshLambertMaterial({ color: 0xFFD700, side: THREE.DoubleSide });
    var petalo_mat1 = new THREE.MeshLambertMaterial({ color: 0xCC4FFF, side: THREE.DoubleSide });
    var centro_mat1 = new THREE.MeshLambertMaterial({ color: 0xFFD700, side: THREE.DoubleSide });

    // Cabeza
    var cabeza = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), blanco);
    cabeza.position.set(0, 5, 0);
    catrinaGroup.add(cabeza);

    // Ojos
    var ojo_geo = new THREE.SphereGeometry(0.6, 20, 20);
    var ojo_izq = new THREE.Mesh(ojo_geo, negro);
    ojo_izq.position.set(-1.2, 5, 2.5);
    catrinaGroup.add(ojo_izq);
    var ojo_der = new THREE.Mesh(ojo_geo, negro);
    ojo_der.position.set(1.3, 5, 2.5);
    catrinaGroup.add(ojo_der);

    // Contornos de ojos
    var contorno_geo = new THREE.SphereGeometry(1.3, 24, 25);
    var contorno_izq = new THREE.Mesh(contorno_geo, rosa);
    contorno_izq.position.set(-0.9, 5, 1.7);
    catrinaGroup.add(contorno_izq);
    var contorno_der = new THREE.Mesh(contorno_geo, rosa);
    contorno_der.position.set(1, 5, 1.7);
    catrinaGroup.add(contorno_der);

    // Nariz
    var nariz = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1, 3), negro);
    nariz.rotation.x = -1.57;
    nariz.position.set(0, 4, 2.6);
    catrinaGroup.add(nariz);

    // Boca
    var boca = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.3, 0.2), negro);
    boca.position.set(0, 3, 2.5);
    catrinaGroup.add(boca);

    // Sombrero
    var sombrero = new THREE.Group();
    sombrero.position.set(0, 8, 0);
    sombrero.add(new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 0.8, 64), negro));
    var copa = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 3.5, 32), negro);
    copa.position.set(0, 2, 0);
    sombrero.add(copa);
    var borde = new THREE.Mesh(new THREE.CylinderGeometry(7.2, 7.2, 0.15, 64), dorado);
    borde.position.set(0, 0.5, 0);
    sombrero.add(borde);
    catrinaGroup.add(sombrero);
    catrinaGroup.sombrero = sombrero;

    // Flores grandes
    var florb = new THREE.Group();
    var centro = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), centro_mat);
    florb.add(centro);
    var posiciones = [
        [0.8, 0, 0], [-0.8, 0, 0], [0, 0.8, 0], [0, -0.8, 0],
        [0.6, 0.6, 0], [-0.6, 0.6, 0], [0.6, -0.6, 0], [-0.6, -0.6, 0]
    ];
    posiciones.forEach(p => {
        var petalo = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), petalo_mat);
        petalo.position.set(...p);
        florb.add(petalo);
    });

    // Clonar flores grandes
    [[0, 9.8, 2.7], [2, 9.8, 2.6], [-2, 9.8, 2.4], [1, 5, 2], [-1, 5, 2]].forEach(p => {
        var flor = florb.clone();
        flor.position.set(...p);
        catrinaGroup.add(flor);
    });

    // Flor pequeña
    var florch = new THREE.Group();
    var centro1 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 15, 12), centro_mat1);
    florch.add(centro1);
    var posicionesC = [
        [0.7, 0, 0.3], [-0.7, 0, 0.3], [-0.1, 0.7, 0.3],
        [-0.1, -0.7, 0.3], [0.5, 0.5, 0.3], [-0.5, 0.5, 0.3],
        [0.5, -0.5, 0.3], [-0.5, -0.5, 0.3]
    ];
    posicionesC.forEach(p => {
        var petaloC = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), petalo_mat1);
        petaloC.position.set(...p);
        florch.add(petaloC);
    });

    var flor6 = florch.clone();
    flor6.position.set(0, 6.9, 2.4);
    catrinaGroup.add(flor6);

    // Cuerpo
    var columna = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 6, 16), blanco);
    columna.position.set(0, -1, 0);
    catrinaGroup.add(columna);

    // Costillas
    var costillas = [
        [2.4, -0.8], [2.2, -2.2], [2.0, -3.6]
    ];
    costillas.forEach(c => {
        var torus = new THREE.Mesh(new THREE.TorusGeometry(c[0], 0.12, 18, 70, 5.9), blanco);
        torus.rotation.y = 3.14;
        torus.position.set(0, c[1], 0);
        catrinaGroup.add(torus);
    });

    // Pelvis
    var pelvis = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.15, 8, 40), blanco);
    pelvis.rotation.x = 1.57;
    pelvis.position.set(0, -4, 0);
    catrinaGroup.add(pelvis);

    // Brazos
    function crearBrazo(lado) {
        var brazo = new THREE.Group();
        var humero = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 3, 16), blanco);
        humero.position.set(0, -1.5, 0);
        brazo.add(humero);
        var codo = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), blanco);
        codo.position.set(0, -3, 0);
        brazo.add(codo);
        var ante = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 3, 16), blanco);
        ante.position.set(0, -4.5, 0);
        brazo.add(ante);
        var mano = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), blanco);
        mano.position.set(0, -6, 0);
        brazo.add(mano);
        brazo.position.set(lado, 3, 0);
        brazo.rotation.z = lado * 0.6;
        catrinaGroup.add(brazo);
    }
    crearBrazo(1);
    crearBrazo(-1);

    
    // Posición general
    catrinaGroup.position.set(x, y, z);

    return catrinaGroup;
}
