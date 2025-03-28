import React, { useEffect, useRef } from "react";
import * as THREE from 'three'


function Canvas(){

    const canvasRef = useRef(null);
    console.log("canvas")

    useEffect(() => {
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ canvas });

        const fov = 75;
        const aspect = 2;
        const near = 0.1;
        const far = 5;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;

        const scene = new THREE.Scene();
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const material = new THREE.MeshBasicMaterial({ color: 0x44aa88});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube)

        renderer.render(scene, camera);

    }, []);

    return(

        <canvas ref={canvasRef} />

);
}

export default Canvas;