import {Color, InstancedMesh, Object3D} from "three";
import React, {useLayoutEffect, useRef, useState} from "react";
import niceColors from 'nice-color-palettes'

const ThreeDUniverse = () => {

    const length = 5000000

    const threeDObject = new Object3D()
    const colour = new Color()

    const colors = Array.from(
        { length },
        () => niceColors[17][Math.floor(Math.random() * 5)])

    const threeDUniverseReference = useRef<InstancedMesh>()

    const [colorArray] = useState(
        () =>
            Float32Array.from(
                Array.from(
                    { length },
                    (_, i) =>
                        colour.set(colors[i]).convertSRGBToLinear().toArray()).flat()
            )
    )
    useLayoutEffect(() => {
        let i = 0

        for (let x = 0; x < 50; x++)
            for (let y = 0; y < 50; y++)
                for (let z = 0; z < 50; z++) {
                    const id = i++
                    threeDObject.position.set(25 - x, 25 - y, 25 - z)
                    threeDObject.updateMatrix()
                    threeDUniverseReference.current?.setMatrixAt(id, threeDObject.matrix)
                }
        if (threeDUniverseReference !== undefined &&
            threeDUniverseReference.current !== undefined) {
            threeDUniverseReference.current.instanceMatrix.needsUpdate = true
        }

    }, [])

    return (
        <instancedMesh ref={threeDUniverseReference} args={[undefined, undefined, length]}>
            <boxBufferGeometry args={[0.2, 0.15, 0.15]}>
                <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
            </boxBufferGeometry>
            <meshLambertMaterial vertexColors={true} toneMapped={false} />
        </instancedMesh>
    )

}

export default function ThreeDUniverseCanvas() {
    return (
            <ThreeDUniverse/>

    );
}