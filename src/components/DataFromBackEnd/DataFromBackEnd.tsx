import React, { Component } from "react";
import "./DataFromBackEnd.scss";

class DataFromBackEnd extends Component <any, any> {
    constructor(props : any) {
        super(props);
        let messageFromBackEnd = JSON.parse(this.props.message);
        this.state = {
            message: messageFromBackEnd
        };
    }

    render() {
        return <div className="DataFromBackEnd">
            type : {this.state.message.type}
            <span> </span>
            data : {this.state.message.body}
        </div>;
    }
}

export default DataFromBackEnd;