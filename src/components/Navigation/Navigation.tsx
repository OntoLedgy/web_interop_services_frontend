import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Container, Stack  } from '@mui/system';

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <p> OntoLedgy Web Interop Services
                            <br/>
                            <br/>
                        </p>

                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                                <Stack spacing={3}>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/treeExplorer">
                                            Tree Explorer
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/dataInput">
                                            DataInput
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
                                </Stack>
                        </ul>
                        </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;