import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';
import {AvFeedback, AvForm, AvInput, AvGroup} from "availity-reactstrap-validation";

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = ({"friendID": null})
    }

    componentDidMount() {
        let id = this.props.friendID;
        this.setState({
            friendID: id,
        })
    }

    onFriendChange = (e) => {
        e.preventDefault();
        this.props.onFriendChange(this.state.friendID, e.target.name, e.target.value)
    };

    render() {
        return (
            <div>
                <AvForm inline>
                    <AvGroup className="mb-2 mr-sm-2 mb-lg-0">
                        <Label for="firstName" className="mr-sm-2">First Name (Given)*</Label>
                        <AvInput type="text" name="firstName" id="firstName" placeholder="First Name"
                                 onChange={this.onFriendChange} required/>
                    </AvGroup>

                    <AvGroup className="mb-2 mr-sm-2  mb-lg-0">
                        <Label for="email" className="mr-sm-2">Email*</Label>
                        <AvInput type="email" name="email" id="email" placeholder="example@address.com"
                                 onChange={this.onFriendChange} required/>
                    </AvGroup>

                    <AvGroup className="mb-2 mr-sm-2  mb-lg-0">
                        <Label for="baseURI" className="mr-sm-2">Base URI*</Label>
                        <AvInput type="url" name="baseURI" id="baseURI" placeholder="http://"
                                 onChange={this.onFriendChange} required/>

                    </AvGroup>

                </AvForm>
            </div>
        );
    };
}

export default withRouter(Friend);