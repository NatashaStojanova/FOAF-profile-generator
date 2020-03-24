import React from "react";
import {Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import {AvFeedback, AvForm, AvInput, AvGroup, AvField} from "availity-reactstrap-validation";

const ProfileFormat = (props) => {
    const onProfileChange = (e) => {
        e.preventDefault();
        props.onProfileChange(e.target.name, e.target.value);
    };
    return(
        <AvForm>
            <AvGroup>
            <br/>
            <h3>FOAF Translator</h3>
            <text>RDF Translator is a multi-format conversion tool for structured markup. It provides translations
                between data formats ranging from RDF/XML to RDFa or Microdata. The service allows for conversions
                triggered either by URI or by direct text input. Furthermore it comes with a straightforward REST API
                for developers.
            </text>
            <br/>
            <br/>
                <AvForm inline className="flex-center">
                    <AvGroup className="mb-2 mr-lg-5 mb-sm-2">
                    <Label for="fromFormat" className="mr-sm-2">From Format:</Label>
                        <AvInput type="select" name="fromFormat" id="fromFormat" style={{weight: "150px"}}
                                 onChange={onProfileChange} required>
                        <option>---parse from---</option>
                        <option value="TURTLE">TURTLE</option>
                        <option value="RDF/XML">RDF/XML</option>
                        <option value="RDF/XML-ABBREV">RDF/XML-ABBREV</option>
                        <option value="N-TRIPLES">N-TRIPLES</option>
                        <option value="JSON-LD">JSON-LD</option>
                        </AvInput>
                        <AvFeedback>This field is required!</AvFeedback>
                    </AvGroup>
                    <AvGroup className="mb-0 mr-lg-5 mb-sm-2">
                    <Label for="toFormat" className="mr-sm-2">To Format:</Label>
                        <AvInput type="select" name="toFormat" id="toFormat" defaultValue="-" onChange={onProfileChange}
                                 required>
                        <option>---parse into---</option>
                        <option value="TURTLE">TURTLE</option>
                        <option value="RDF/XML">RDF/XML</option>
                        <option value="RDF/XML-ABBREV">RDF/XML-ABBREV</option>
                        <option value="N-TRIPLES">N-TRIPLES</option>
                        <option value="JSON-LD">JSON-LD</option>
                        </AvInput>
                        <AvFeedback>This field is required!</AvFeedback>
                    </AvGroup>
                </AvForm>
            <br/>
            <br/>
                <AvInput type="textarea" name="yourProfile" id="yourProfile" onChange={onProfileChange}
                         style={{height: "370px"}} placeholder="Enter your rdf" required/>
                <AvFeedback>This field is required!</AvFeedback>
            </AvGroup>
        </AvForm>



    )
}
export default ProfileFormat;