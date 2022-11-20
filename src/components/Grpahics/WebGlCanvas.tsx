import React, {  useRef, useState, useLayoutEffect } from 'react'
import { Canvas, useFrame, createPortal} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import ThreeDUniverse from './ThreeDUniverse'
import SpinningBoxes from "./ThreeDimensionalObjects/SpinningBox";

export default function WebGlCanvas() {
    return (
        //TODO parameterise the position
        <div style={{ position: "relative", width: 1200, height: 2000}}>
            <Canvas>
                <ambientLight intensity={0.1} />
                <spotLight position={[100, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <SpinningBoxes position={[1.2, 0, 0]} />
                <ThreeDUniverse/>
                <OrbitControls
                    enablePan={true}
                    enableZoom={true}/>
            </Canvas>
        </div>
    )
}

