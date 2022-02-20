import React, {  useRef, useState, useLayoutEffect } from 'react'
import { Canvas, useFrame, createPortal} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import {Euler, Mesh, Object3D, Color, InstancedMesh} from 'three'

import ThreeDUniverse from './ThreeDUniverse'


// TODO - move this out as a separate component
const SpinningBox = (props : any) => {

    // This reference gives us direct access to the THREE.Mesh object
    const threeMeshObjectReference = useRef<Mesh>()

    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(
        false)

    const [clicked, click] = useState(
        false)

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((
        state,
        delta) =>
        {
            if (threeMeshObjectReference !== undefined &&
                threeMeshObjectReference.current !== undefined)
            {

                threeMeshObjectReference.current.rotation.x  +=0.1

            }

        }
    )
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={threeMeshObjectReference}
            scale={clicked ? 1.5 : 1}
            rotation={new Euler(Math.PI / 2, 60, 0)}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[2, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'red'} />
        </mesh>
    )
}

export default function WebGlCanvas() {
    return (
        <div style={{ position: "relative", width: 1200, height: 2000}}>
            <Canvas>
                <ambientLight intensity={0.1} />
                <spotLight position={[100, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <SpinningBox position={[1.2, 0, 0]} />
                <ThreeDUniverse/>
                <OrbitControls
                    enablePan={true}
                    enableZoom={true}/>
            </Canvas>
        </div>
    )
}

