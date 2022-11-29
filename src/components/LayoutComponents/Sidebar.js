import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Stack} from "@mui/system";
import {NavLink} from "react-router-dom";

export default props => {
    return (
        <Menu>

            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/treeExplorer">
                Tree Explorer
            </a>
            <a className="menu-item" href="/dataInput">
                Data Input
            </a>
            <a className="menu-item" href="/dataExchangeHistory">
                DataExchangeHistory
            </a>
            <a className="menu-item" href="/SyntacticChecker">
                SyntacticChecker
            </a>
            <a className="menu-item" href="/WebGlCanvas">
                WebGlCanvas
            </a>
            <a className="menu-item" href="/ForceGraph">
                ForceGraph
            </a>

        </Menu>
    );
};