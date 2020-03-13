import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Col from "react-bootstrap/Col";

const WorkProfile = (props) => {


    return (

        <Form>

            <FormGroup row className="mb-2 mr-sm-2  mb-sm-2">
                <Label for="currentProject" className="mr-sm">Current Project:</Label>
                <Col sm={5}>
                    <Input type="url" name="currentProject" id="currentProject"
                           placeholder="Current project you are working on..."/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-sm-2">
                <Label for="recentPublication" className="mr-sm">Recent Publication:</Label>
                <Col sm={5}>
                    <Input type="url" name="recentPublication" id="recentPublication"
                           placeholder="name your recent publication..."/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-sm-2">
                <Label for="schoolHomepage" className="mr-sm">School Homepage:</Label>
                <Col sm={5}>
                    <Input type="url" name="schoolHomepage" id="schoolHomepage" placeholder="Your School homepage..."/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-sm-2">
                <Label for="workHomepage" className="mr-sm">Work Homepage:</Label>
                <Col sm={5}>
                    <Input type="url" name="workHomepage" id="workHomepage" placeholder="Your work homepage..."/>
                </Col>
            </FormGroup>


        </Form>

    );
}

export default WorkProfile;
