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
                <div align="justify" id="profileData" style={{visibility: "hidden"}}><br/>
                    <h5>Person Base URI: <a href={this.state.profileFOAF.baseURI}>{this.state.profileFOAF.baseURI}</a>  {/*<img src={this.state.profileFOAF.image} alt='profilePhoto' width={150}></img>*/} </h5>
                    <br/><hr/><br/>
                    <h5> First name: {this.state.profileFOAF.name}</h5> <br/><hr/><br/>
                    <h5> Last name: {this.state.profileFOAF.surname}</h5> <br/><hr/><br/>
                    <h5> Nickname: {this.state.profileFOAF.nick}</h5> <br/><hr/><br/>
                    <h5>{this.state.profileFOAF.name} knows:</h5>
                    {this.state.friendsList.map((friend, index) => {
                        return (
                            <h5 key={index}>Name:  {friend.name} | E-mail: {friend.email} </h5>

                        )
                    })} <br/><hr/><br/>
                    <h5> Title: {this.state.profileFOAF.title}</h5><br/><hr/><br/>
                    <h5> Homepage: <a href={this.state.profileFOAF.homepage}>{this.state.profileFOAF.homepage}</a></h5>
                    <br/><hr/><br/>
                    <h5> Facebook Link: <a
                        href={this.state.profileFOAF.facebookLink}>{this.state.profileFOAF.facebookLink}</a></h5> <br/><hr/><br/>
                    <h5> Twitter Link: <a
                        href={this.state.profileFOAF.twitterLink}>{this.state.profileFOAF.twitterLink}</a></h5><br/><hr/><br/>
                    <h5> LinkedIn Link: <a
                        href={this.state.profileFOAF.linkedInLink}>{this.state.profileFOAF.linkedInLink}</a></h5><br/><hr/><br/>
                    <h5> Blog link: <a href={this.state.profileFOAF.blogLink}>{this.state.profileFOAF.blogLink}</a></h5>
                    <br/><hr/><br/>
                    <h5> Skype ID: {this.state.profileFOAF.skypeID}</h5>
                    <br/><hr/><br/>
                    <h5>Current project: {this.state.profileFOAF.currentProject}</h5>
                    <br/><hr/><br/>
                    <h5>Recent publication: {this.state.profileFOAF.recentPublication}</h5>
                    <br/><hr/><br/>
                    <h5>Work homepage: {this.state.profileFOAF.workHomepage}</h5>
                    <br/><hr/><br/>
                    <h5> Based Near: {this.state.profileFOAF.basedNear}</h5><br/>
                </div>
            </div>

        )
    }
}

export default Explorer