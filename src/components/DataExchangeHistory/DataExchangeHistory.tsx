import React, { Component } from "react";
import "./DataExchangeHistory.scss";
import DataFromBackEnd from "../DataFromBackEnd";

interface IDataFromBackEndProps {
    dataExchangeHistory : [] ;
}

class DataExchangeHistory extends Component<IDataFromBackEndProps> {
    render() {
        console.log(this.props.dataExchangeHistory);

        const messages = this.props.dataExchangeHistory.map(
            (msg:any) =>
                <DataFromBackEnd message={msg.data} />
        );

        return (
            <div key="{key}" className="DataExchangeHistory">
                <h2>Data Exchange History</h2>
                    {messages}
            </div>
        );
    }
}

export default DataExchangeHistory;