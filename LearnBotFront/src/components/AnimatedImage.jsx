import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedImage = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio); 
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);


    // Carregar a textura da imagem
    const texture = new THREE.TextureLoader().load('src/assets/IMG_5683.PNG');
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter; 
    const geometry = new THREE.PlaneGeometry(3, 3);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true,});
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    let animationStartTime = Date.now();
    const amplitude = 0.3;
    const frequency = 0.0007;

    const animate = () => {
        requestAnimationFrame(animate);
  
        const elapsedTime = Date.now() - animationStartTime;
  
        // Movimento oscilante em diferentes direções 
        plane.position.x = amplitude * Math.sin(frequency * elapsedTime * 0.2);
        plane.position.y = amplitude * Math.cos(frequency * elapsedTime * 0.4); 
        plane.position.x -= amplitude * Math.sin(frequency * elapsedTime );
        plane.position.z = 0.1 * Math.sin(frequency * elapsedTime * 5); 
  
        // Leve rotação para aumentar o efeito de "voo"
        plane.rotation.z += 0.002;
        plane.rotation.y = 0.06 * Math.sin(frequency * elapsedTime * 0.5); 
        plane.rotation.z -= 0.0019;
        renderer.render(scene, camera);
      };
  
      animate();
      return () => {
        renderer.dispose();
        mountRef.current.removeChild(renderer.domElement);
      };
    }, []);

  return <div ref={mountRef} style={{ width: '600px', height: '550px' }} />;
};

export default AnimatedImage;

