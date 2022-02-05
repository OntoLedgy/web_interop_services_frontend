import React, {Component} from 'react';
import CheckboxTree  from 'react-checkbox-tree';
import './CheckBoxTree.scss'
import data from '../../data/CheckBoxTreeData.json'

class CheckBoxTree extends Component<any,any> {
    state = {
        checked: [],
        expanded: [],
    };

    render() {
    const nodeData = data
        return (
            <div>
                <CheckboxTree
                    nodes={nodeData}
                    checked={this.state.checked}
                    expanded={this.state.expanded}
                    onCheck={checked => this.setState({ checked })}
                    onExpand={expanded => this.setState({ expanded })}
                />
            </div>
        );


    }
}

export default CheckBoxTree;