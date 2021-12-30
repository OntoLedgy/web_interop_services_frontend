import React, { Component } from "react";
import "./DataExchangeHistory.scss";
import DataFromBackEnd from "../DataFromBackEnd";


class DataExchangeHistory extends Component {
    render() {
        console.log(this.props.dataExchangeHistory);
        const messages = this.props.dataExchangeHistory.map(msg => <DataFromBackEnd message={msg.data} />);

        return (
            <div className="DataExchangeHistory">
                <h2>Data Exchange History</h2>
                {messages}
            </div>
        );
    }
}

export default DataExchangeHistory;