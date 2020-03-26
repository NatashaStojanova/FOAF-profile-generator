import React,{Component} from 'react'
import Profile from "./Profile/profile";
import PersonService from "../../service/personService";
import {Button} from "reactstrap";

class Explorer extends Component{

    constructor(props) {
        super(props);

        let newProfile = {
            yourProfile: null,
            fromFormat: ".rdf",

        };

        this.state = {
            profile: newProfile,
            profileFOAF: '',
            friendsList: [],
            disable:true,

        };
    }

    saveProfile = (e) => {
        PersonService.addProfile(this.state.profile).then(profileResp => {
            document.getElementById("profileData").style.border = "thin solid #d3d3d3";
            document.getElementById("profileData").style.visibility = "visible";
            this.setState({
                profileFOAF: profileResp.data,
                friendsList: profileResp.data.friends,
            })
            //alert("SENT DATA");
        }).catch(err => {
            alert("Input data is not in the correct format.")
        })
    }


    profileChange = ((target, value) => {
        if(value === ''){
            this.setState({disable: true});
        }
        else {
        this.setState(prevState => {
            let profile = this.state.profile;
            profile[target] = value;
            return {
                profile: profile
            }
        })
        this.setState({disable: false});
        }
    });


    render() {
        return(
            <div className="container">
                <Profile onProfileChange={this.profileChange}/>
                <Button type="button" className="btn btn-info" disabled={this.state.disable} onClick={this.saveProfile}>Explore</Button>
                <div align="left" id="profileData" style={{visibility: "hidden"}}><br/>
                    <h5><b>Person Base URI:</b> <a
                        href={this.state.profileFOAF.baseURI}>{this.state.profileFOAF.baseURI}</a> {/*<img src={this.state.profileFOAF.image} alt='profilePhoto' width={150}></img>*/}
                    </h5>
                    <br/><hr/><br/>
                    <h5><b>First name:</b> {this.state.profileFOAF.name}</h5> <br/>
                    <hr/>
                    <br/>
                    <h5><b>Last name:</b> {this.state.profileFOAF.surname}</h5> <br/>
                    <hr/>
                    <br/>
                    <h5><b>Nickname:</b>{this.state.profileFOAF.nick}</h5> <br/>
                    <hr/>
                    <br/>
                    <h5><b>{this.state.profileFOAF.name} knows:</b></h5>
                    {this.state.friendsList.map((friend, index) => {
                        return (
                            <h5 key={index}><b>Name:</b> {friend.name}<br/>
                                <b>E-mail</b>: {friend.email}<br/><br/></h5>

                        )
                    })} <br/><hr/><br/>
                    <h5><b>Title: </b>{this.state.profileFOAF.title}</h5><br/>
                    <hr/>
                    <br/>
                    <h5><b>Homepage: </b><a href={this.state.profileFOAF.homepage}>{this.state.profileFOAF.homepage}</a>
                    </h5>
                    <br/><hr/><br/>
                    <h5><b> Facebook Link: </b><a
                        href={this.state.profileFOAF.facebookLink}>{this.state.profileFOAF.facebookLink}</a></h5> <br/><hr/><br/>
                    <h5><b>Twitter Link:</b> <a
                        href={this.state.profileFOAF.twitterLink}>{this.state.profileFOAF.twitterLink}</a></h5><br/><hr/><br/>
                    <h5><b> LinkedIn Link:</b> <a
                        href={this.state.profileFOAF.linkedInLink}>{this.state.profileFOAF.linkedInLink}</a></h5><br/><hr/><br/>
                    <h5><b> Blog link:</b> <a
                        href={this.state.profileFOAF.blogLink}>{this.state.profileFOAF.blogLink}</a></h5>
                    <br/><hr/><br/>
                    <h5><b> Skype ID:</b> {this.state.profileFOAF.skypeID}</h5>
                    <br/><hr/><br/>
                    <h5><b>Current project: </b>{this.state.profileFOAF.currentProject}</h5>
                    <br/><hr/><br/>
                    <h5><b>Recent publication: </b>{this.state.profileFOAF.recentPublication}</h5>
                    <br/><hr/><br/>
                    <h5><b>Work homepage:</b> {this.state.profileFOAF.workHomepage}</h5>
                    <br/><hr/><br/>
                    <h5><b> Based Near:</b> {this.state.profileFOAF.basedNear}</h5><br/>
                </div>
            </div>

        )
    }
}

export default Explorer