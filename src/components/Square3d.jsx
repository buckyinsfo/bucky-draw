import React, { Component } from 'react'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

class Square3d extends Component {
    componentDidMount() {
        // scene
        this.scene = new THREE.Scene()

        // renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight )
        
        this.mount.appendChild( this.renderer.domElement )

        // camera
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 10000 )
        this.camera.position.z=5

        this.controls = new OrbitControls( this.camera, this.renderer.domElement )

        // Create Box
        const geometry = new THREE.BoxGeometry( 1, 1, 1 )
        const material = new THREE.MeshBasicMaterial({ color: 0x0ff00 , wireframe: true  })
        this.cube = new THREE.Mesh( geometry, material )
        
        // Add to Scene
        this.scene.add( this.cube )
        this.animation()
        this.renderer.render( this.scene, this.camera )

        // Event Listener
        window.addEventListener( 'resize', this.handleWindowResize )
    }

    animation = ()  => {
        requestAnimationFrame( this.animation )
        this.controls.update()

        this.cube.rotation.x +=0.01
        this.cube.rotation.y +=0.01
        this.renderer.render( this.scene, this.camera )
    }

    handleWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        
        this.renderer.setSize( window.innerWidth, window.innerHeight )
        this.renderer.render( this.scene, this.camera )
    }

    render() {
        return (
            <div ref={ mount => { this.mount = mount }} />
        )
    }
}

export default Square3d;
