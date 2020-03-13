import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';

const Friend = (props) => {

    const onFormFriendSubmit = (e) => {
        e.preventDefault();
        props.history.push('/create');
        props.onFriendChange(
            [{
                "firstName": e.target.firstName.value,
                "email": e.target.email.value,
                "baseURI": e.target.baseURI.value,

            }]
        );
    };

    return (

        <Form inline onSubmit={onFormFriendSubmit}>

            <FormGroup className="mb-2 mr-sm-2 mb-lg-0">
                <Label for="firstName" className="mr-sm-2">First Name</Label>
                <Input type="text" name="firstName" id="firstName" placeholder="Given Name"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="email" className="mr-sm-2">Email</Label>
                <Input type="email" name="email" id="email" placeholder="@idk.cool"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="baseURI" className="mr-sm-2">Base URI</Label>
                <Input type="url" name="baseURI" id="baseURI" placeholder="URI"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2 mb-lg-0">
                <Label for="firstName" className="mr-sm-2">First Name</Label>
                <Input type="text" name="firstName" id="firstName" placeholder="Given Name"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="email" className="mr-sm-2">Email</Label>
                <Input type="email" name="email" id="email" placeholder="@idk.cool"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="baseURI" className="mr-sm-2">Base URI</Label>
                <Input type="url" name="baseURI" id="baseURI" placeholder="URI"/>
            </FormGroup>

            <Button>Create</Button>
        </Form>

    );
}

export default withRouter(Friend);