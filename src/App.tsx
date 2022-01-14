import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from './components/Header/Header';
import DataExchangeHistory from "./components/DataExchangeHistory";
import DataInput from "./components/DataInput";
import TreeExplorer from "./components/TreeExplorer";

class App extends Component<any,any> {
  constructor(props :any[]) {
    super(props);
    this.state = {
        dataExchangeHistory: []
    }
  }

  componentDidMount() {
      connect((msg:any) => {
          console.log("Recieved Message")
          this.setState((prevState:any) => ({
              dataExchangeHistory: [...this.state.dataExchangeHistory, msg]
            }))
            console.log(this.state);
        });
    }

  send(event:any) {
      if(event.keyCode === 13) {
          console.log("Message about to be sent");
          sendMsg(event.target.value);
          event.target.value = "";
      }

  }

  render() {

    return (
        <div>

        <Header />

        <DataExchangeHistory
            dataExchangeHistory=
                {this.state.dataExchangeHistory}/>

        <DataInput send={this.send} />

        <TreeExplorer/>

        </div>
    );
  }
}

export default App;
