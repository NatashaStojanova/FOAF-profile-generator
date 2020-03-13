import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';

const Person = (props) => {

    const onPersonChange = (e) => {
        e.preventDefault();
        props.onPersonChange(e.target.name, e.target.value);
    };

    return (

        <Form inline>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="baseURI" className="mr-sm-2">Base URI</Label>
                <Input type="url" name="baseURI" id="baseURI" onChange={onPersonChange} placeholder="URI"/>
            </FormGroup>

            <FormGroup className="mb-auto mr-sm-2 mb-sm-2">
                <Label for="firstName" className="mr-sm-2">First Name</Label>
                <Input type="text" name="firstName" id="firstName" onChange={onPersonChange} placeholder="Given Name"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="lastName" className="mr-sm-2">Last Name</Label>
                <Input type="email" name="lastName" id="lastName" onChange={onPersonChange} placeholder="@idk.cool"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="nickname" className="mr-sm-2">Nickname</Label>
                <Input type="text" name="nickname" id="nickname" onChange={onPersonChange} placeholder="nickname"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="email" className="mr-sm-2">Email</Label>
                <Input type="email" name="email" id="email" onChange={onPersonChange} placeholder="something@idk.com"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="title" className="mr-sm-2">Title</Label>
                <Input type="text" name="title" id="title" onChange={onPersonChange} placeholder="Mr,Mrs.."/>
            </FormGroup>

            <FormGroup className="mb-2 mr-lg-4 mb-sm-2">
                <Label for="homepage" className="mr-sm-2">Homepage</Label>
                <Input type="url" name="homepage" id="homepage" onChange={onPersonChange}
                       placeholder="www.example.com"/>
            </FormGroup>

        </Form>
    );
}

export default withRouter(Person);
