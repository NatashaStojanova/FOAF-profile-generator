import React, {Component} from "react";

class ShowProfile extends Component {

    render() {
        return (
            <div className="container">
                <br/>
                <h5><b>Person Base URI:</b> <a
                    href={this.props.value.baseURI}>{this.props.value.baseURI}</a> {/*<img src={this.state.profileFOAF.image} alt='profilePhoto' width={150}></img>*/}
                </h5>
                <br/>
                <hr/>
                <br/>
                <h5><b>First name:</b> {this.props.value.name}</h5> <br/>
                <hr/>
                <br/>
                <h5><b>Last name:</b> {this.props.value.surname}</h5> <br/>
                <hr/>
                <br/>
                <h5><b>Nickname:</b>{this.props.value.nick}</h5> <br/>
                <hr/>
                <br/>
                <h5><b>{this.props.value.name} knows:</b></h5>
                {this.props.valueFriends.map((friend, index) => {
                    return (
                        <h5 key={index}><b>Name:</b> {friend.name}<br/>
                            <b>E-mail</b>: {friend.email}<br/><br/></h5>

                    )
                })} <br/>
                <hr/>
                <br/>
                <h5><b>Title: </b>{this.props.value.title}</h5><br/>
                <hr/>
                <br/>
                <h5><b>Homepage: </b><a href={this.props.value.homepage}>{this.props.value.homepage}</a>
                </h5>
                <br/>
                <hr/>
                <br/>
                <h5><b> Facebook Link: </b><a
                    href={this.props.value.facebookLink}>{this.props.value.facebookLink}</a></h5> <br/>
                <hr/>
                <br/>
                <h5><b>Twitter Link:</b> <a
                    href={this.props.value.twitterLink}>{this.props.value.twitterLink}</a></h5><br/>
                <hr/>
                <br/>
                <h5><b> LinkedIn Link:</b> <a
                    href={this.props.value.linkedInLink}>{this.props.value.linkedInLink}</a></h5><br/>
                <hr/>
                <br/>
                <h5><b> Blog link:</b> <a
                    href={this.props.value.blogLink}>{this.props.value.blogLink}</a></h5>
                <br/>
                <hr/>
                <br/>
                <h5><b> Skype ID:</b> {this.props.value.skypeID}</h5>
                <br/>
                <hr/>
                <br/>
                <h5><b>Current project: </b>{this.props.value.currentProject}</h5>
                <br/>
                <hr/>
                <br/>
                <h5><b>Recent publication: </b>{this.props.value.recentPublication}</h5>
                <br/>
                <hr/>
                <br/>
                <h5><b>Work homepage:</b> {this.props.value.workHomepage}</h5>
                <br/>
                <hr/>
                <br/>
                <h5><b> Based Near:</b> {this.props.value.basedNear}</h5><br/>
            </div>

        )
    }
}

export default ShowProfile;