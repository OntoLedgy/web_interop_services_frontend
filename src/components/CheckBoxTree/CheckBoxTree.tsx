import React, {Component} from 'react';
import CheckboxTree  from 'react-checkbox-tree';
import './CheckBoxTree.scss'
import data from '../../data/TreeData.json'

class CheckBoxTree extends Component<any,any> {
    state = {
        checked: [],
        expanded: [],
    };

    render() {
        const nodes = [{
            value: 'mars',
            label: 'Mars',
            children: [
                { value: 'phobos', label: 'Phobos' },
                { value: 'deimos', label: 'Deimos' },
            ],
        }];
        return (
            <div id="treeWrapper" style=
                {{width: '100em', height: '120em'}}>
                <CheckboxTree
                    nodes={nodes}
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