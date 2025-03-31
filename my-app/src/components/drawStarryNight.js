import * as THREE from 'three';


export function drawStarryNight(canvas) {

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    );

    camera.position.set(1, 0, 3);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    //

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 1000;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
        colors[i] = Math.random();
    };

    particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
    );

    particlesGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3)
    );

    const pointsMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, pointsMaterial);
    scene.add(particlesMesh);

    const animate = () => {
        particlesMesh.rotation.y += 0.002;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();

    const onWindowResize = () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(window.devicePixelRatio);
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
        window.removeEventListener("resize", onWindowResize);
        renderer.dispose();
    };

    }