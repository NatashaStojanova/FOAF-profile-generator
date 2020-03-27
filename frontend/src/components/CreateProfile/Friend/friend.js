import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';

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
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-lg-2">
                        <Label for="firstName" className="mr-sm-2">First Name (Given)</Label>
                        <Input type="text" name="firstName" id="firstName" placeholder="First Name"
                               onChange={this.onFriendChange}/>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2  mb-lg-0">
                        <Label for="email" className="mr-sm-2">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="example@address.com"
                               onChange={this.onFriendChange}/>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2  mb-lg-0">
                        <Label for="baseURI" className="mr-sm-2">Base URI</Label>
                        <Input type="url" name="baseURI" id="baseURI" placeholder="http://"
                               onChange={this.onFriendChange}/>
                    </FormGroup>

                </Form>
            </div>
        );
    };
}

export default withRouter(Friend);