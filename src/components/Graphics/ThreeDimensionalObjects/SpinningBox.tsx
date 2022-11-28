// TODO - move this out as a separate component
import React, {useRef, useState} from "react";
import {Euler, Mesh} from "three";
import {useFrame} from "@react-three/fiber";

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

export default function SpinningBoxes(props : any) {
    return (
        <SpinningBox position={props.position} />
    );
}