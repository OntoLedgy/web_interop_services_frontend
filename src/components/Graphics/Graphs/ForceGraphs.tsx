import {ForceGraph2D} from "react-force-graph";
import React from "react";
import data from "../../../data/GraphDataLesMiserables.json";

export default function ForceGraph() {

    const graphData = data

    return (<ForceGraph2D graphData={graphData}  >

        </ForceGraph2D>

    )

}
