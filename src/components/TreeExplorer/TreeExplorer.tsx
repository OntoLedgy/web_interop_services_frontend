import React, {Component} from 'react';
import Tree from 'react-d3-tree';
import './TreeExplorer.scss'
import data from '../../data/TreeData.json'

class TreeExplorer extends Component<any,any> {

    render() {
        return (
            <div id="treeWrapper" style=
                {{width: '100em', height: '120em'}}>
                <Tree data={data}
                      orientation={"vertical"}
                      rootNodeClassName="node__root"
                      branchNodeClassName="node__branch"
                      leafNodeClassName="node__leaf"
                      pathFunc={(linkDatum:any, orientation:any) => {
                          const {source, target} = linkDatum;
                          return orientation === 'horizontal'
                              ? `M${source.y},${source.x}L${target.y},${target.x}`
                              : `M${source.x},${source.y}L${target.x},${target.y}`;
                          }
                    }
                />
            </div>
        );


    }
}

export default TreeExplorer;