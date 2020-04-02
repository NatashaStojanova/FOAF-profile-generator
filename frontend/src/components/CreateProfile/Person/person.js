import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import {withRouter} from 'react-router-dom';

const Person = (props) => {

    const onPersonChange = (e) => {
        e.preventDefault();
        props.onPersonChange(e.target.name, e.target.value);
    };

    return (

        <div className="container">
            <form>
                <div className="form-row" align="left">
                    <div className="form-group row col-sm-4">
                        <label htmlFor="baseURI" className="col-sm-4 col-form-label">Base URI</label>
                        <div className="col-md-8">
                            <input type="url" className="form-control" name="baseURI" id="baseURI"
                                   placeholder="https://" onChange={onPersonChange}/>
                        </div>
                    </div>

                    <div className="form-group row col-sm-4" align="right">
                        <label htmlFor="email" className="col-sm-4 col-form-label">E-mail</label>
                        <div className="col-md-8">
                            <input type="email" className="form-control" name="email" id="email"
                                   placeholder="example@mail" onChange={onPersonChange}/>
                        </div>
                    </div>

                    <div className="form-group row col-sm-4" align="right">
                        <label htmlFor="title" className="col-sm-3 col-form-label">Title</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="title" id="title"
                                   placeholder="Mr, Mrs, Dr, etc.." onChange={onPersonChange}/>
                        </div>
                    </div>
                </div>
                <div className="form-row" align="left">
                    <div className="form-group row col-sm-4">
                        <label htmlFor="firstName" className="col-sm-4 col-form-label">First Name</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="firstName" id="firstName"
                                   placeholder="Given Name" onChange={onPersonChange}/>
                        </div>
                    </div>

                    <div className="form-group row col-sm-4" align="right">
                        <label htmlFor="lastName" className="col-sm-4 col-form-label">Last Name</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="lastName" id="lastName"
                                   placeholder="Family Name" onChange={onPersonChange}/>
                        </div>
                    </div>

                    <div className="form-group row col-sm-4">
                        <label htmlFor="nickname" className="col-sm-3 col-form-label">Nickname</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="nickname" id="nickname"
                                   placeholder="Nickname" onChange={onPersonChange}/>
                        </div>
                    </div>
                </div>

                <div className="form-row" align="left">
                    <div className="form-group row col-sm-4">
                        <label htmlFor="homepage" className="col-sm-4 col-form-label">Homepage</label>
                        <div className="col-md-8">
                            <input type="url" className="form-control" name="homepage" id="homepage"
                                   placeholder="https://" onChange={onPersonChange}/>
                        </div>
                    </div>

                    <div className="form-group row col-sm-4" align="right">
                        <label htmlFor="image" className="col-sm-4 col-form-label">Image URL</label>
                        <div className="col-md-8">
                            <input type="url" className="form-control" name="image" id="image"
                                   placeholder="https://" onChange={onPersonChange}/>
                        </div>
                    </div>

                </div>

            </form>
        </div>

    );
}

export default withRouter(Person);