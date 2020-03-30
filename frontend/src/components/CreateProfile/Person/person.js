import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import {withRouter} from 'react-router-dom';

const Person = (props) => {

    const onPersonChange = (e) => {
        e.preventDefault();
        props.onPersonChange(e.target.name, e.target.value);
    };

    return (

        <Form inline>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="baseURI" className="mr-sm-2">Base URI*</Label>
                <Input type="url" name="baseURI" id="baseURI" onChange={onPersonChange} placeholder="http://"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-4 mb-sm-1">
                <Label for="title" className="mr-sm-2">Title</Label>
                <Input type="text" name="title" id="title" onChange={onPersonChange}
                       placeholder="Mr, Ms, Mrs, Dr, etc"/>
            </FormGroup>

            <FormGroup className="mb-auto mr-sm-2 mb-sm-2">
                <Label for="firstName" className="mr-sm-2">First Name (Given)</Label>
                <Input type="text" name="firstName" id="firstName" onChange={onPersonChange} placeholder="First Name"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="nickname" className="mr-sm-2">Nickname</Label>
                <Input type="text" name="nickname" id="nickname" onChange={onPersonChange} placeholder="Nickname"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="email" className="mr-sm-2">Email*</Label>
                <Input type="email" name="email" id="email" onChange={onPersonChange}
                       placeholder="example@address.com"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="lastName" className="mr-sm-2">Last Name (Family)</Label>
                <Input type="text" name="lastName" id="lastName" onChange={onPersonChange} placeholder="Last Name"/>
            </FormGroup>

            <FormGroup className="mb-auto mr-sm-2 mb-sm-2">
                <Label for="homepage" className="mr-sm-2">Homepage</Label>
                <Input type="url" name="homepage" id="homepage" onChange={onPersonChange}
                       placeholder="http://"/>
            </FormGroup>

            <FormGroup className="mb-2 mr-lg-4 mb-sm-2">
                <Label for="image" className="mr-sm-2">Image</Label>
                <Input type="url" name="image" id="image" onChange={onPersonChange}
                       placeholder="http://"/>
            </FormGroup>

        </Form>

    );
}

export default withRouter(Person);