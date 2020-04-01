import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import Col from "react-bootstrap/Col";

const WorkProfile = (props) => {

    const onWorkProfChange = (e) => {
        e.preventDefault();
        props.onWorkProfChange(e.target.name, e.target.value);
    };

    return (

        <div align="left">
            <div className="form-group row">
                <label htmlFor="currentProject" className="col-sm-2 col-form-label">Current Project</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" name="currentProject" id="currentProject"
                           onChange={onWorkProfChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="recentPublication" className="col-sm-2 col-form-label">Recent Publication</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" name="recentPublication" id="recentPublication"
                           onChange={onWorkProfChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="schoolHomepage" className="col-sm-2 col-form-label">School homepage:</label>
                <div className="col-sm-4">
                    <input type="url" className="form-control" name="schoolHomepage" id="schoolHomepage"
                           placeholder="https://" onChange={onWorkProfChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="workHomepage" className="col-sm-2 col-form-label">Work homepage:</label>
                <div className="col-sm-4">
                    <input type="url" className="form-control" name="workHomepage" id="workHomepage"
                           placeholder="https://" onChange={onWorkProfChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="basedNear" className="col-sm-2 col-form-label">Based near:</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" name="basedNear" id="basedNear"
                           onChange={onWorkProfChange}/>
                </div>
            </div>

        </div>

    );
}

export default WorkProfile;
