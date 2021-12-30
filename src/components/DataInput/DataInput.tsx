import React, { Component } from "react";
import "./DataInput.scss";

class DataInput extends Component <any,any> {
    render() {
        return (
            <div className="DataInput">
                <input onKeyDown={this.props.send} />
            </div>
        );
    }
}

export default DataInput;