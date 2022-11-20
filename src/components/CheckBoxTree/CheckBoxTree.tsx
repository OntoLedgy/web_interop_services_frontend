import React, {Component} from 'react';
import CheckboxTree  from 'react-checkbox-tree';
import './CheckBoxTree.scss'
import data from '../../data/CheckBoxTreeData.json'
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

class CheckBoxTree extends Component<any,any> {
    state = {
        checked: [],
        expanded: [],
    };

    render() {
    const nodeData = data
        return (
            <div>

                <TreeView  aria-label="file system navigator"
                           defaultCollapseIcon={<ExpandMoreIcon />}
                           defaultExpandIcon={<ChevronRightIcon />}
                           sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                >
                </TreeView>
                <TreeItem nodeId="1" label="Applications">
                    <TreeItem nodeId="2" label="Calendar" />
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                    <TreeItem nodeId="10" label="OSS" />
                    <TreeItem nodeId="6" label="MUI">
                        <TreeItem nodeId="8" label="index.js" />
                    </TreeItem>
                </TreeItem>
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