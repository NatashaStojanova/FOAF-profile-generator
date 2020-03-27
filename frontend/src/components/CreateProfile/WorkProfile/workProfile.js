import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import Col from "react-bootstrap/Col";

const WorkProfile = (props) => {

    const onWorkProfChange = (e) => {
        e.preventDefault();
        props.onWorkProfChange(e.target.name, e.target.value);
    };

    return (

        <Form>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-2">
                <Label for="currentProject" className="mr-sm-4">Current Project:</Label>
                <Col sm={5}>
                    <Input type="text" name="currentProject" id="currentProject"
                           placeholder="Current project you are working on..." onChange={onWorkProfChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-2">
                <Label for="recentPublication" className="mr-sm-1">Recent Publication:</Label>
                <Col sm={5}>
                    <Input type="text" name="recentPublication" id="recentPublication"
                           placeholder="Name your recent publication..." onChange={onWorkProfChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-2">
                <Label for="schoolHomepage" className="mr-sm">School Homepage:</Label>
                <Col sm={5}>
                    <Input type="text" name="schoolHomepage" id="schoolHomepage" placeholder="Your School homepage..."
                           onChange={onWorkProfChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-2">
                <Label for="workHomepage" className="mr-sm-2">Work Homepage:</Label>
                <Col sm={5}>
                    <Input type="text" name="workHomepage" id="workHomepage" placeholder="Your work homepage..."
                           onChange={onWorkProfChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="basedNear" className="mr-sm-5">Based Near:</Label>
                <Col sm={5}>
                    <Input type="text" name="basedNear" id="basedNear" placeholder="Based near..."
                           onChange={onWorkProfChange}/>
                </Col>
            </FormGroup>


        </Form>

    );
}

export default WorkProfile;
