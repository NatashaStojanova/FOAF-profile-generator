import React from "react";
import {Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';

const Profile = (props) => {
    const onProfileChange = (e) => {
        e.preventDefault();
        props.onProfileChange(e.target.name, e.target.value);
    };
    return(
        <FormGroup>
            <br/>
            <h3>FOAF Explorer</h3>
            <text>This tool will generate an HTML view of FOAF data, complete with referenced images and links to other data. The RDF Validatorvalidates the structure of the RDF triples in the FOAF profile. But,the visualizerallows you to see the FOAF profile data in a HTML view, as if you had it on your personal website.</text>
            <br/>
            <br/>
            <Input type="textarea" name="yourProfile" id="yourProfile" onChange={onProfileChange} style={{height: "370px"}} placeholder="Enter your rdf"/>
        </FormGroup>



    )
}
export default Profile;