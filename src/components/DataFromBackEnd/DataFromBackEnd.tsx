import React, { Component } from "react";
import "./DataFromBackEnd.scss";

class DataFromBackEnd extends Component <any, any> {
    constructor(props : any) {
        super(props);
        let temp = JSON.parse(this.props.message);
        this.state = {
            message: temp
        };
    }

    render() {
        return <div className="DataFromBackEnd">{this.state.message.body}</div>;
    }
}

export default DataFromBackEnd;