import React, {Component} from "react";

class ShowProfile extends Component {

    render() {
        return (
            <div>
                    <div className="container">
                            <div className="row">
                                    <div className="col-lg-20">
                                            <div className="card">
                                                    <div className="card-body">
                                                            <div className="row">
                                                                    <div className="col-12 col-lg-8 col-md-6">
                                                                            <h3 className="mb-0 text-truncated"><a
                                                                                href={this.props.value.baseURI}>{this.props.value.baseURI}</a>
                                                                            </h3>
                                                                            <div align="left">
                                                                                    <br/>
                                                                                    <p className="lead">First
                                                                                            name: {this.props.value.name}</p>
                                                                                    <p className="lead">Last
                                                                                            name: {this.props.value.surname}</p>
                                                                                    <p className="lead">Nickname: {this.props.value.nick}</p>
                                                                                    <p className="lead">Title: {this.props.value.title}</p>
                                                                                    <p className="lead">Homepage: <a
                                                                                        href={this.props.value.homepage}>{this.props.value.homepage}</a>
                                                                                    </p>
                                                                                    <p className="lead">Current
                                                                                            Project: {this.props.value.currentProject}</p>
                                                                                    <p className="lead">Recent
                                                                                            publication: {this.props.value.recentPublication}</p>
                                                                                    <p className="lead">Knows: {this.props.valueFriends.map((friend, index) => {
                                                                                            return (
                                                                                                <p key={index}><i
                                                                                                    className="fas fa-user-friends"></i> {friend.name}<br/>
                                                                                                        <i className="fas fa-envelope"></i> {friend.email}<br/><br/>
                                                                                                </p>

                                                                                            )
                                                                                    })} <br/></p>

                                                                            </div>

                                                                    </div>
                                                                    <div
                                                                        className="col-12 col-lg-4 col-md-6 text-center">
                                                                            <img src={this.props.value.image} alt=""
                                                                                 className="mx-auto rounded-circle img-fluid"/>
                                                                            <br/><br/>
                                                                            <div align="left">
                                                                                <i className="fas fa-envelope"></i>
                                                                                <p>{this.props.value.email}</p><br/>
                                                                                <i className="fab fa-skype"></i>
                                                                                <p>{this.props.value.skypeID}</p>
                                                                                    <br/>
                                                                                <i className="fab fa-linkedin"></i> <a
                                                                                href={this.props.value.linkedInLink}>{this.props.value.linkedInLink}</a><br/>
                                                                                <i className="fab fa-facebook-f"></i> <a
                                                                                href={this.props.value.facebookLink}>{this.props.value.facebookLink}</a><br/>
                                                                                <i className="fab fa-twitter"></i> <a
                                                                                href={this.props.value.twitterLink}>{this.props.value.twitterLink}</a>
                                                                                    <br/>
                                                                                <i className="fas fa-graduation-cap"></i>
                                                                                <a href={this.props.value.schoolHomepage}>{this.props.value.schoolHomepage}</a><br/>
                                                                                <i className="fas fa-briefcase"></i> <a
                                                                                href={this.props.value.workHomepage}>{this.props.value.workHomepage}</a><br/>
                                                                                <i className="fas fa-map-marker-alt"></i>
                                                                                <p href="">{this.props.value.basedNear}</p>
                                                                            </div>
                                                                    </div>


                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                    </div>
            </div>
        )
    }
}

export default ShowProfile;