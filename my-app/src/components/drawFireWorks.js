import * as THREE from 'three';

// geminiで生成

export function drawFireWorks(canvas) {

    // シーン、カメラ、レンダラーの作成
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });
//    renderer.setSize(window.innerWidth, window.innerHeight);
//    document.body.appendChild(renderer.domElement);

    // パーティクルシステムの作成
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xffffff,
        transparent: true,
        blending: THREE.AdditiveBlending,
    });

    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
        // 初期位置を花火の打ち上げ地点に設定
        positions[i * 3] = 0;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = 0;

        // ランダムな速度を与える
        const speed = 0.5;
        const direction = new THREE.Vector3(
            Math.random() - 0.5,
            Math.random(),
            Math.random() - 0.5
        ).normalize();
        velocities[i * 3] = direction.x * speed;
        velocities[i * 3 + 1] = direction.y * speed;
        velocities[i * 3 + 2] = direction.z * speed;

        // ランダムな色を設定
        const color = new THREE.Color();
        color.setHSL(Math.random(), 1, 0.5);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // カメラの位置を設定
    camera.position.z = 5;

    // アニメーション
    function animate() {
        requestAnimationFrame(animate);

        const positions = particles.geometry.attributes.position.array;
        const velocities = particles.geometry.attributes.velocity.array;

        for (let i = 0; i < particlesCount; i++) {
            // 速度に応じて位置を更新
            positions[i * 3] += velocities[i * 3] * 0.01;
            positions[i * 3 + 1] += velocities[i * 3 + 1] * 0.01;
            positions[i * 3 + 2] += velocities[i * 3 + 2] * 0.01;

            // 重力の影響を与える
            velocities[i * 3 + 1] -= 0.001;

            // 寿命を判定し、終了したら初期状態に戻す
            if (positions[i * 3 + 1] < -5) {
                positions[i * 3] = 0;
                positions[i * 3 + 1] = 0;
                positions[i * 3 + 2] = 0;

                const speed = 0.5;
                const direction = new THREE.Vector3(
                    Math.random() - 0.5,
                    Math.random(),
                    Math.random() - 0.5
                ).normalize();
                velocities[i * 3] = direction.x * speed;
                velocities[i * 3 + 1] = direction.y * speed;
                velocities[i * 3 + 2] = direction.z * speed;
            }
        }

        particles.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();
}