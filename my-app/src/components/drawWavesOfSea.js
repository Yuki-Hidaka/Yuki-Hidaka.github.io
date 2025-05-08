import * as THREE from 'three';

// geminiで生成

export function drawWavesOfSea(canvas) {

    // シーン、カメラ、レンダラーの作成
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });
//    renderer.setSize(window.innerWidth, window.innerHeight);
//    document.body.appendChild(renderer.domElement);

    // パーティクルシステムの作成
    const width = 20;
    const height = 20;
    const segmentsX = 50;
    const segmentsY = 50;
    const geometry = new THREE.PlaneGeometry(width, height, segmentsX, segmentsY);

    const material = new THREE.MeshPhongMaterial({color: 0x0088ff, specular: 0x555555, shininess: 30});

    const sea = new THREE.Mesh(geometry, material);
    sea.rotation.x = -Math.PI / 2;
    scene.add(sea);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1,1,1).normalize();
    scene.add(directionalLight);

    camera.position.set(0, 5, 10);
    camera.lookAt(scene.position);

    // アニメーション
    function animate() {
        requestAnimationFrame(animate);
        const time = performance.now() * 0.001;

        const vertices = geometry.attributes.position.array;
        for (let i = 0; i < vertices.length / 3; i++) {
            const x = vertices[i*3];
            const y = vertices[i*3+1];

            const wave1 = Math.sin(x*2+time*3)*0.3;
            const wave2 = Math.cos(y*1.5+time*2.5)*0.2;

            vertices[i*3+2] = wave1 + wave2;
        }

        geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();
}