import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from './components/Header/Header';
import DataExchangeHistory from "./components/DataExchangeHistory";

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

  send() {
    console.log("Message abou to be sent : hello");
    sendMsg("hello");
  }

  render() {
    return (
        <div className="App">
          <Header />
            <DataExchangeHistory
                dataExchangeHistory={this.state.dataExchangeHistory} />




          <button onClick={this.send}>Hit</button>
        </div>
    );
  }
}

export default App;
