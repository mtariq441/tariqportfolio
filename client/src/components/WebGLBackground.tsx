import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const [webglSupported] = useState(() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('webgl2'))
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!containerRef.current || !webglSupported) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      scene.background = new THREE.Color(0x000000);

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 30;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false });
      rendererRef.current = renderer;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);

      // Create particles
      const particleCount = 100;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 200;
        positions[i + 1] = (Math.random() - 0.5) * 200;
        positions[i + 2] = (Math.random() - 0.5) * 200;

        const hue = Math.random() < 0.5 ? 0.75 : 0.95; // Cyan or Purple
        const color = new THREE.Color().setHSL(hue, 1, 0.5);
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(geometry, material);
      particlesRef.current = particles;
      scene.add(particles);

      // Add soft neon glow lights
      const light1 = new THREE.PointLight(0x00d4ff, 1, 100);
      light1.position.set(30, 30, 20);
      scene.add(light1);

      const light2 = new THREE.PointLight(0x8e2de2, 1, 100);
      light2.position.set(-30, -30, 20);
      scene.add(light2);

      // Animation loop
      let scrollY = 0;
      const handleScroll = () => {
        scrollY = window.scrollY;
      };
      window.addEventListener('scroll', handleScroll);

      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate particles
        if (particlesRef.current) {
          particlesRef.current.rotation.x += 0.0002;
          particlesRef.current.rotation.y += 0.0003;
        }

        // Parallax camera based on scroll
        camera.position.y = -scrollY * 0.02;
        camera.position.x = Math.sin(scrollY * 0.001) * 2;

        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    } catch (error) {
      console.warn('WebGL initialization failed, using fallback background', error);
      return () => {};
    }
  }, [webglSupported]);

  // Fallback gradient background if WebGL not supported
  if (!webglSupported) {
    return (
      <div
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, rgba(0, 0, 0, 1) 100%)',
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
