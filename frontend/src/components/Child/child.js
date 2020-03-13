import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';

class Child extends Component {

    constructor() {
        super();
        this.state = {};
    }

    onChange = (e) => {
        //this.setState({email: e.target.email.value})
        this.setState({baseURI: e.target.baseURI.value});

    }

    sendDataToParent = () => {
        this.props.sendDataToParent
        //(this.state.email)
        (this.state.baseURI);

    }

    render() {
        return (
            <form>
                <div className="row">

                    <div className="form-group row">
                        <input type="text"
                               className="form-control" id="baseURI" name={"baseURI"} value={this.state.baseURI}
                               onChange={this.onChange}/>
                    </div>


                    {/*  <div className="form-group row">
                    <input type="text"
                           className="form-control" id="email" name={"email"} value={this.state.email}  onChange={this.onChange}/>
                </div>*/}


                    <button onClick={this.sendDataToParent}> Send</button>

                </div>
            </form>
        )
    };
}

export default (Child);