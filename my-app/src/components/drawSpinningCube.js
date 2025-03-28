import * as THREE from 'three';


export function drawSpinningCube(canvas) {

    const scene = new THREE.Scene();

    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;

    const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

    const rendrer = new THREE.WebGLRenderer({ canvas });
//    rendrer.setSize( window.innerWidth, window.innerHeight );
    rendrer.setAnimationLoop( animate );

    const geometry = new THREE.BoxGeometry( 1, 1, 1);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 });

    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 2;

    function animate() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        rendrer.render( scene, camera );
    }

}