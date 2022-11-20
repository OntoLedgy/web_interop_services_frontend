import React, { Component } from "react";
import "./App.css";
import { connect, sendMessage } from "./api";
import Header from './components/Header/Header';
import DataExchangeHistory from "./components/DataExchangeHistory";
import DataInput from "./components/DataInput";
import TreeExplorer from "./components/TreeExplorer";
import SyntacticChecker from "./components/SyntacticChecker";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebGlCanvas from "./components/Grpahics";

import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Stack  } from '@mui/system';

class App extends Component<any,any> {
  constructor(props :any[]) {
    super(props);
    this.state = {
        dataExchangeHistory: []
    }
  }

  componentDidMount() {
      connect((msg:any) => {
          console.log("Received Message")
          this.setState(() => ({
              dataExchangeHistory: [
                  ...this.state.dataExchangeHistory,
                  msg]
            }))
            console.log(this.state);
        });
    }

  send(event:any) {
      if(event.keyCode === 13) {
          console.log("Message about to be sent");
          sendMessage(event.target.value);
          event.target.value = "";
      }

  }

  render() {

    return (
        <div>

            <CssBaseline />
            <Container maxWidth="sm">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Header/>}/>
                            <Route path="/dataExchangeHistory"
                                   element={<DataExchangeHistory
                                       dataExchangeHistory=
                                           {this.state.dataExchangeHistory}/>}/>
                            <Route path="/treeExplorer" element={<TreeExplorer/>}/>
                            <Route path="/dataInput" element={<DataInput send={this.send} />}/>
                            <Route path="/SyntacticChecker" element={<SyntacticChecker />}/>
                            <Route path="/WebGlCanvas" element={<WebGlCanvas/>}/>
                        </Routes>
                        <Navigation/>
                    </Router>

            </Container>
        </div>
    );
  }
}

export default App;
