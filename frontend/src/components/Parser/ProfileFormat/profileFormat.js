import React from "react";
import {Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';

const ProfileFormat = (props) => {
    const onProfileChange = (e) => {
        e.preventDefault();
        props.onProfileChange(e.target.name, e.target.value);
    };
    return(
        <FormGroup>
            <br/>
            <h3>FOAF Translator</h3>
            <text>RDF Translator is a multi-format conversion tool for structured markup. It provides translations
                between data formats ranging from RDF/XML to RDFa or Microdata. The service allows for conversions
                triggered either by URI or by direct text input. Furthermore it comes with a straightforward REST API
                for developers.
            </text>
            <br/>
            <br/>
            <Form inline className="flex-center">
                <FormGroup className="mb-2 mr-lg-5 mb-sm-2">
                    <Label for="fromFormat" className="mr-sm-2">From Format:</Label>
                    <Input type="select" name="fromFormat" id="fromFormat" style={{weight: "150px"}}
                           onChange={onProfileChange}>
                        <option>---parse from---</option>
                        <option value="TURTLE">TURTLE</option>
                        <option value="RDF/XML">RDF/XML</option>
                        <option value="RDF/XML-ABBREV">RDF/XML-ABBREV</option>
                        <option value="N-TRIPLES">N-TRIPLES</option>
                        <option value="JSON-LD">JSON-LD</option>
                    </Input>
                </FormGroup>
                <FormGroup className="mb-0 mr-lg-5 mb-sm-2">
                    <Label for="toFormat" className="mr-sm-2">To Format:</Label>
                    <Input type="select" name="toFormat" id="toFormat" defaultValue="-" onChange={onProfileChange}>
                        <option>---parse into---</option>
                        <option value="TURTLE">TURTLE</option>
                        <option value="RDF/XML">RDF/XML</option>
                        <option value="RDF/XML-ABBREV">RDF/XML-ABBREV</option>
                        <option value="N-TRIPLES">N-TRIPLES</option>
                        <option value="JSON-LD">JSON-LD</option>
                    </Input>
                </FormGroup>
            </Form>
            <br/>
            <br/>
            <Input type="textarea" name="yourProfile" id="yourProfile" onChange={onProfileChange}
                   style={{height: "370px"}} placeholder="Enter your rdf"/>
        </FormGroup>



    )
}
export default ProfileFormat;