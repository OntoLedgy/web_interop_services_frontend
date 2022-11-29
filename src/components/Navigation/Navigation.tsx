import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { Box, Container, Stack  } from '@mui/system';

function Navigation() {

    const LinkStyle = (isActive:boolean) =>
        isActive
            ? {
                color: '#fff',
                background: '#7600dc',
            }
            : {
                color: '#545e6f',
                background: '#f0f0f0' }


    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand"
                        to="/"
                    >
                        <p> Home
                            <br/>
                            <br/>
                        </p>
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ms-auto">
                                <Stack spacing={3}>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/treeExplorer">

                                            Tree Explorer
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/dataInput">
                                            Data Input
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/dataExchangeHistory">
                                            DataExchangeHistory
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/SyntacticChecker">
                                            SyntacticChecker
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/WebGlCanvas">
                                            WebGlCanvas
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/ForceGraph">
                                            ForceGraph
                                        </NavLink>
                                    </li>
                                </Stack>
                        </ul>
                        </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;