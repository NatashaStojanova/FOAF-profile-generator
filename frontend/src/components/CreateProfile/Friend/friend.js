import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = ({"friendID": null})
    }

    componentDidMount() {
        let id = this.props.friendID;
        this.setState({
            friendID: id,
        })
    }

    onFriendChange = (e) => {
        e.preventDefault();
        this.props.onFriendChange(this.state.friendID, e.target.name, e.target.value)
    };

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-row">
                        <div className="form-group row col-sm-4">
                            <label htmlFor="firstName" className="col-sm-4 col-form-label">First Name:</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" name="firstName" id="firstName"
                                       placeholder="Given Name" onChange={this.onFriendChange}/>
                            </div>
                        </div>

                        <div className="form-group row col-sm-4" align="right">
                            <label htmlFor="email" className="col-sm-4 col-form-label">E-mail:</label>
                            <div className="col-md-8">
                                <input type="email" className="form-control" name="email" id="email"
                                       placeholder="example@mail" onChange={this.onFriendChange}/>
                            </div>
                        </div>

                        <div className="form-group row col-sm-4">
                            <label htmlFor="baseURI" className="col-sm-3 col-form-label">URI:</label>
                            <div className="col-md-8">
                                <input type="url" className="form-control" name="baseURI" id="baseURI"
                                       placeholder="https://" onChange={this.onFriendChange}/>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        );
    };
}

export default withRouter(Friend);