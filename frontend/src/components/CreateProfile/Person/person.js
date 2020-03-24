import React from 'react';
import {Label} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {AvForm, AvInput, AvGroup} from "availity-reactstrap-validation";

const Person = (props) => {

    const onPersonChange = (e) => {
        e.preventDefault();
        props.onPersonChange(e.target.name, e.target.value);
    };

    return (

        <AvForm inline>

            <AvGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="baseURI" className="mr-sm-2">Base URI*</Label>
                <AvInput type="url" name="baseURI" id="baseURI" onChange={onPersonChange} placeholder="http://"
                         required/>
            </AvGroup>

            <AvGroup className="mb-auto mr-sm-2 mb-sm-2">
                <Label for="firstName" className="mr-sm-2">First Name (Given)</Label>
                <AvInput type="text" name="firstName" id="firstName" onChange={onPersonChange}
                         placeholder="First Name"/>
            </AvGroup>

            <AvGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="lastName" className="mr-sm-2">Last Name (Family)</Label>
                <AvInput type="text" name="lastName" id="lastName" onChange={onPersonChange} placeholder="Last Name"/>
            </AvGroup>

            <AvGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="nickname" className="mr-sm-2">Nickname</Label>
                <AvInput type="text" name="nickname" id="nickname" onChange={onPersonChange} placeholder="Nickname"/>
            </AvGroup>

            <AvGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="email" className="mr-sm-2">Email*</Label>
                <AvInput type="email" name="email" id="email" onChange={onPersonChange}
                         placeholder="example@address.com" required/>
            </AvGroup>

            <AvGroup className="mb-2 mr-sm-2 mb-sm-2">
                <Label for="title" className="mr-sm-2">Title</Label>
                <AvInput type="text" name="title" id="title" onChange={onPersonChange}
                         placeholder="Mr, Ms, Mrs, Dr, etc"/>
            </AvGroup>

            <AvGroup className="mb-2 mr-lg-4 mb-sm-2">
                <Label for="homepage" className="mr-sm-2">Homepage</Label>
                <AvInput type="url" name="homepage" id="homepage" onChange={onPersonChange}
                         placeholder="http://"/>
            </AvGroup>

            <AvGroup className="mb-2 mr-lg-4 mb-sm-2">
                <Label for="image" className="mr-sm-2">Image</Label>
                <AvInput type="url" name="image" id="image" onChange={onPersonChange}
                         placeholder="http://"/>
            </AvGroup>

        </AvForm>

    );
}

export default withRouter(Person);
