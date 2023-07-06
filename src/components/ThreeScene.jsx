import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // ADD SCENE
    const sceneInstance = new THREE.Scene();

    // ADD CAMERA
    const cameraInstance = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraInstance.position.z = 4;

    // ADD RENDERER
    const rendererInstance = new THREE.WebGLRenderer({ antialias: true });
    rendererInstance.setClearColor("#000000");
    rendererInstance.setSize(window.innerWidth, window.innerHeight);

    canvasRef.current.appendChild(rendererInstance.domElement);

    // ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "#433F81" });
    const cubeInstance = new THREE.Mesh(geometry, material);
    sceneInstance.add(cubeInstance);

const animate = () => {
  requestAnimationFrame(animate);

      // Rotate the sphere
      cubeInstance.rotation.x += 0.01;
      cubeInstance.rotation.y += 0.01;

      // Render the scene with the camera
      rendererInstance.render(sceneInstance, cameraInstance);
    };

    animate();

    // Clean up
    return () => {
      rendererInstance.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default ThreeScene;
