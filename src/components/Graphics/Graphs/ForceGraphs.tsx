import {ForceGraph3D,ForceGraphAR } from "react-force-graph";
import React from "react";
import data from "../../../data/GraphDataLesMiserables.json";

export default function ForceGraph() {

    const graphData = data

    return (
        <div>
            <ForceGraph3D
                graphData={graphData}
            >
            </ForceGraph3D>
        </div>
    )

}
