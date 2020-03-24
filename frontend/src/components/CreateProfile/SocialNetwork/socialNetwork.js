import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import Col from "react-bootstrap/Col";

const SocialNetwork = (props) => {

    const onSocNetChange = (e) => {
        e.preventDefault();
        props.onSocNetChange(e.target.name, e.target.value);
    };

    return (

        <Form>

            <FormGroup row className="mb-2 mr-sm-2 mb-lg-0">
                <Label for="blog" className="mr-sm">Blog Link:</Label>
                <Col sm={5}>
                    <Input type="url" name="blog" id="blog" placeholder="http://" onChange={onSocNetChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2 mb-lg-0">
                <Label for="facebookLink" className="mr-sm">Facebook Link</Label>
                <Col sm={5}>
                    <Input type="url" name="facebookLink" id="facebookLink"
                           placeholder="http://" onChange={onSocNetChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="twitterLink" className="mr-sm">Twitter Link:</Label>
                <Col sm={5}>
                    <Input type="url" name="twitterLink" id="twitterLink" placeholder="http://"
                           onChange={onSocNetChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-0  mb-lg-0">
                <Label for="linkedIn" className="mr-sm">Linked In:</Label>
                <Col sm={5}>
                    <Input type="url" name="linkedIn" id="linkedIn" placeholder="http://"
                           onChange={onSocNetChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="skypeID" className="mr-sm">Skype:</Label>
                <Col sm={5}>
                    <Input type="text" name="skypeID" id="skypeID" placeholder="Skype account"
                           onChange={onSocNetChange}/>
                </Col>
            </FormGroup>


        </Form>

    );
}

export default SocialNetwork;
