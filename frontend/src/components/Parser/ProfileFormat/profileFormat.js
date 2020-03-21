import React from "react";
import {Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';

const ProfileFormat = (props) => {
    const onProfileChange = (e) => {
        e.preventDefault();
        props.onProfileChange(e.target.name, e.target.value);
    };
    return(
        <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="yourProfile" id="yourProfile" onChange={onProfileChange} placeholder="Enter your rdf"/>

            <select name="fromFormat" id="fromFormat" onChange={onProfileChange}>
                <option>---parse from---</option>
                <option value="TURTLE" >TURTLE</option>
                <option value="RDF/XML" >RDF/XML</option>
                <option value="RDF/XML-ABBREV" >RDF/XML-ABBREV</option>
                <option value="N-TRIPLES" >N-TRIPLES</option>
                <option value="JSON-LD" >JSON-LD</option>
            </select>
            <select name="toFormat" id="toFormat" defaultValue = "-" onChange={onProfileChange}>
                <option>---parse into---</option>
                <option value="TURTLE" >TURTLE</option>
                <option value="RDF/XML" >RDF/XML</option>
                <option value="RDF/XML-ABBREV" >RDF/XML-ABBREV</option>
                <option value="N-TRIPLES" >N-TRIPLES</option>
                <option value="JSON-LD" >JSON-LD</option>
            </select>
        </FormGroup>



    )
}
export default ProfileFormat;