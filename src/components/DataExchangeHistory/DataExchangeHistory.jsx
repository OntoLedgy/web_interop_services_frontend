import React, { Component } from "react";
import "./DataExchangeHistory.scss";

class DataExchangeHistory extends Component {
    render() {
        const messages = this.props.dataExchangeHistory.map((msg, index) => (
            <p key={index}>{msg.data}</p>
        ));

        return (
            <div className="DataExchangeHistory">
                <h2>Data Exchange History</h2>
                {messages}
            </div>
        );
    }
}

export default DataExchangeHistory;