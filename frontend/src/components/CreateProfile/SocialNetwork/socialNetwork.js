import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Col from "react-bootstrap/Col";

const SocialNetwork = (props) => {
    return (

        <Form>

            <FormGroup row className="mb-2 mr-sm-2  mb-sm-2">
                <Label for="blog" className="mr-sm">Blog Link:</Label>
                <Col sm={5}>
                    <Input type="url" name="blog" id="blog" placeholder="www.blog.com"/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-sm-2">
                <Label for="facebookLink" className="mr-sm">Facebook Link</Label>
                <Col sm={5}>
                    <Input type="url" name="facebookLink" id="facebookLink"
                           placeholder="www.facebook.com/your-profile"/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-sm-2">
                <Label for="twitterLink" className="mr-sm">Twitter Link:</Label>
                <Col sm={5}>
                    <Input type="url" name="twitterLink" id="twitterLink" placeholder="www.twitter.com/your-profile"/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-sm-2">
                <Label for="skypeID" className="mr-sm">Skype:</Label>
                <Col sm={5}>
                    <Input type="url" name="skypeID" id="skypeID" placeholder="Skype account"/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-0  mb-sm-2">
                <Label for="linkedIn" className="mr-sm">Linked In:</Label>
                <Col sm={5}>
                    <Input type="url" name="linkedIn" id="linkedIn" placeholder="www.linkedin.com/in/your-profile/"/>
                </Col>
            </FormGroup>


        </Form>

    );
}

export default SocialNetwork;
