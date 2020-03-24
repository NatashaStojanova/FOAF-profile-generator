import React from "react";
import {AvFeedback, AvForm, AvInput, AvGroup} from "availity-reactstrap-validation";
import {Label} from "reactstrap";

const Profile = (props) => {
    const onProfileChange = (e) => {
        e.preventDefault();
        props.onProfileChange(e.target.name, e.target.value);
    };
    return(
        <AvForm>
            <br/>
            <h3>FOAF Explorer</h3>
            <text>This tool will generate an HTML view of FOAF data, complete with referenced images and links to other data. The RDF Validatorvalidates the structure of the RDF triples in the FOAF profile. But,the visualizerallows you to see the FOAF profile data in a HTML view, as if you had it on your personal website.</text>
            <br/>
            <br/>
            <AvGroup className="mb-2 mr-lg-5 mb-sm-2">
                <AvForm inline>
                    <Label for="fromFormat" className="mr-sm-2">Choose Format:</Label>
                    <AvInput type="select" name="fromFormat" id="fromFormat" style={{weight: "20"}}
                             onChange={onProfileChange}>
                        <option>---choose format---</option>
                        <option value=".ttl">TURTLE</option>
                        <option value=".rdf">RDF/XML</option>
                        <option value=".n3">N3</option>
                    </AvInput>
                    <AvFeedback>This field is required!</AvFeedback>
                </AvForm>
            </AvGroup>
            <AvGroup>
                <AvInput type="textarea" name="yourProfile" id="yourProfile" onChange={onProfileChange}
                         style={{height: "370px"}} placeholder="Enter your rdf" required/>
                <AvFeedback>This field is required!</AvFeedback>
            </AvGroup>
        </AvForm>



    )
}
export default Profile;