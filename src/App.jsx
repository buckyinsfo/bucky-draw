import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import Cylinder3d from './components/Cylinder3d'
import ThreeSphere  from './components/ThreeSphere.jsx'
import ThreeScene  from './components/ThreeScene.jsx'
import './style.css'

import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

const Carshow = () => { 
    return (
        <>
            <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
            <PerspectiveCamera makedefault fov={50} position={[3, 2, 5]} />
            
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />

            <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshBasicMaterial color={'blue'} />
            </mesh>
        </>
    )
};

const Stack = () => {
    return (
        <section className='App-header'>
            {/* Canvas 1 */}
            <Canvas>
                <pointLight position={[10, 10, 10]} />
                <ambientLight />
                <Cylinder3d position={[-1.2, 0, 0]} />
                <Cylinder3d position={[1.2, 0, 0]} />
            </Canvas>
    
            {/* Canvas 2 */}
            <Canvas>
                <pointLight position={[10, 10, 10]} />
                <ambientLight intensity={0.5} />
                <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
                <Cylinder3d position={[1.2, 0, 0]} wireframe={true} />
            </Canvas>
    
            {/* Canvas 3 */}
            <Canvas>
                <pointLight position={[10, 10, 10]} />
                <ambientLight color={"red"} />
                <Cylinder3d position={[-1.2, 0, 0]} />
                <Cylinder3d position={[1.2, 0, 0]} />
            </Canvas>
        </section>
    )
}

const App = () => {
    return (
        <>
            {/* <ThreeSphere  /> */}
            {/* <ThreeScene /> */}
            <Stack />
        </>
    )
    
};

export default App;    
