import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const controls = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);

    const canvas = canvasRef.current;
    canvas.appendChild(renderer.domElement);

    controls.current = new OrbitControls(camera, renderer.domElement);

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: "#ff0000", wireframe: true });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: "#00ff00", wireframe: true });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -2;
    scene.add(cube);

    const animate = () => {
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      controls.dispose();
      canvas.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default ThreeScene;
