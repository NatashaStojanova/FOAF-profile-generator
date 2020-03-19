import React from "react";
import {Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';

const Profile = (props) => {
    const onProfileChange = (e) => {
        e.preventDefault();
        props.onProfileChange(e.target.name, e.target.value);
    };
    return(
        <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="yourProfile" id="yourProfile" onChange={onProfileChange} placeholder="Enter your rdf"/>
        </FormGroup>
    )
}
export default Profile;