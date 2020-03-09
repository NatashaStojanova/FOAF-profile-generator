import React from 'react'
import {withRouter} from 'react-router-dom';

const CreateProfile = (props) => {
    const onFormSubmit = (e) => {
        e.preventDefault();
        props.history.push('/persons');
        props.onSubmit(
            {
                "baseURI": e.target.baseURI.value,
                "email": e.target.email.value,
                "firstName": e.target.firstName.value,
                "lastName": e.target.lastName.value,
                "nickname": e.target.nickname.value,
                "homepage": e.target.homepage.value,
                "title": e.target.title.value,

            }
        );
    };

    return (
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Basic FOAF profile</h4>
                <div className="form-group row">
                    <label htmlFor="baseURI" className="col-sm-4 offset-sm-1 text-left">Base URI</label>
                    <div className="col-md-6">
                        <input type="text"
                               className="form-control" id="baseURI" name={"baseURI"}
                               placeholder="baseURI" required maxLength="50"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-4 offset-sm-1 text-left">E-mail</label>
                    <div className="col-sm-6">
                        <input type="text" placeholder="email"
                               className="form-control" id="email" name={"email"}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-4 offset-sm-1 text-left">First Name</label>
                    <div className="col-sm-6">
                        <input type="text" placeholder="firstName"
                               className="form-control" id="firstName" name={"firstName"}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-4 offset-sm-1 text-left">Last Name</label>
                    <div className="col-sm-6">
                        <input type="text" placeholder="lastName"
                               className="form-control" id="lastName" name={"lastName"}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="nickname" className="col-sm-4 offset-sm-1 text-left">Nickname</label>
                    <div className="col-sm-6">
                        <input type="text" placeholder="nickname"
                               className="form-control" id="nickname" name={"nickname"}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="homepage" className="col-sm-4 offset-sm-1 text-left">Homepage</label>
                    <div className="col-sm-6">
                        <input type="text" placeholder="homepage"
                               className="form-control" id="homepage" name={"homepage"}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-4 offset-sm-1 text-left">Title</label>
                    <div className="col-sm-6">
                        <input type="text" placeholder="Mr,Mrs..."
                               className="form-control" id="title" name={"title"}/>
                    </div>
                </div>


                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-6  text-center">
                        <button
                            type="submit"
                            className="btn btn-success text-upper">
                            Create
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-warning text-upper">
                            Reset
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-danger text-upper">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default withRouter(CreateProfile);