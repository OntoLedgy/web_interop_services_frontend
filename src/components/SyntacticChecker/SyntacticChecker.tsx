import React, {Component} from 'react';
import CheckBoxTree from "../CheckBoxTree";
import DataInput from "../DataInput";
import {sendMessage} from "../../api";

class SyntacticChecker extends Component<any,any> {

    send(event:any) {
        if(event.keyCode === 13) {
            console.log("Message about to be sent");
            //sendMessage(event.target.value);
            event.target.value = "";
        }

    }

    render() {
        return (
            <div>
                SyntacticChecker configuration:
                <CheckBoxTree />
                Input:
                <DataInput send={this.send} />
                CheckResults
                <p>
                    Results as follows
                </p>
            </div>
        );
    }
}

export default SyntacticChecker;