import React, {Component} from "react";
import Child from "../Child/child.js"

class Parent extends Component {
    constructor() {
        super();
        this.state = {
            data: ""
        };
    }

    receivedDataFromChild = (data) => {
        this.setState({data});
    }

    render() {
        return (
            <div>
                <Child sendDataToParent={this.receivedDataFromChild}/>
                <p>{this.state.data}</p>
            </div>
        );
    }
}

export default Parent;