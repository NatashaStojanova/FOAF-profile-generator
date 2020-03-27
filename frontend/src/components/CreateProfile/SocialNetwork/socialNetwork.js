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
            <FormGroup row className="mb-2 mr-sm-2 mb-lg-2">
                <Label for="blog" className="mr-lg-4">Blog Link:</Label>
                <Col sm={4}>
                    <Input type="url" name="blog" id="blog" placeholder="http://" onChange={onSocNetChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2 mb-lg-2">
                <Label for="facebookLink" className="mr-sm-n1">Facebook Link:</Label>
                <Col sm={4}>
                    <Input type="url" name="facebookLink" id="facebookLink"
                           placeholder="http://" onChange={onSocNetChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-2">
                <Label for="twitterLink" className="mr-sm-3">Twitter Link:</Label>
                <Col sm={4}>
                    <Input type="url" name="twitterLink" id="twitterLink" placeholder="http://"
                           onChange={onSocNetChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-lg-2  mb-lg-2">
                <Label for="linkedIn" className="mr-md-1">Linked In Link:</Label>
                <Col sm={4}>
                    <Input type="url" name="linkedIn" id="linkedIn" placeholder="http://"
                           onChange={onSocNetChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-md-0 mr-lg-2  mb-lg-2">
                <Label for="skypeID" className="mr-lg-0">Skype account:</Label>
                <Col sm={4}>
                    <Input type="text" name="skypeID" id="skypeID" placeholder="Skype account"
                           onChange={onSocNetChange}/>
                </Col>
            </FormGroup>


        </Form>

    );
}

export default SocialNetwork;
