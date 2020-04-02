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
            <h2>FOAF Explorer</h2>
            <br/>
            <h5>Even though FOAF and the Semantic Web is designed for machines, it can sometimes be interesting to
                browse the data same way the "regular" web is browsed.</h5>
            <text>The FOAF Explorer tries to present the information and assertions in a human-readable format,
                currently by way of direct transformations of the raw RDF/XML to XHTML complete with referenced images
                and links to other data. The RDF Validator validates the structure of the RDF triples in the FOAF
                profile. But,the visualizer allows you to see the FOAF profile data in a HTML view, as if you had it on
                your personal website.
            </text>
            <br/>
            <br/>
            <AvGroup className="mb-2 mr-lg-5 mb-sm-2">
                <AvForm inline>
                    <Label for="inputFormat" className="mr-sm-2">Input Format:</Label>
                    <AvInput className="custom-select" type="select" name="inputFormat" id="inputFormat"
                             style={{weight: "20"}}
                             onChange={onProfileChange}>
                        <option value="">Choose....</option>
                        <option value=".rdf">RDF/XML</option>
                        <option value=".ttl">TURTLE</option>
                        <option value=".n3">N3</option>
                        <option value=".nt">N-TRIPLES</option>
                    </AvInput>
                    <AvFeedback>This field is required!</AvFeedback>
                </AvForm>
            </AvGroup>
            <br/>
            <AvGroup>
                <AvInput type="textarea" name="yourProfile" id="yourProfile" onChange={onProfileChange}
                         style={{height: "370px"}} placeholder="Enter your rdf" required/>
                <AvFeedback>This field is required!</AvFeedback>
            </AvGroup>
        </AvForm>



    )
}
export default Profile;