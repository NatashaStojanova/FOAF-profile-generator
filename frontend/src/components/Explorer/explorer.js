import React,{Component} from 'react'
import Profile from "./Profile/profile";
import PersonService from "../../service/personService";

class Explorer extends Component{

    constructor(props) {
        super(props);

        let newProfile = {
            yourProfile: null,

        };

        this.state = {
            profile: newProfile,
            profileFOAF: '',
            friendsList: [],

        };
    }

    saveProfile = (e) => {
        PersonService.addProfile(this.state.profile).then(profileResp => {
            document.getElementById("profileData").style.border = "thin solid #d3d3d3";
            this.setState({
                profileFOAF: profileResp.data,
                friendsList: profileResp.data.friends,
            })
            alert("SENT DATA");
        }).catch(err => {
            alert(err)
        })
    }


    profileChange = ((target, value) => {
        this.setState(prevState => {
            let profile = this.state.profile;
            profile[target] = value;
            return {
                profile: profile
            }
        })
    });


    render() {
        return(
            <div className="container">
                <Profile onProfileChange={this.profileChange}/>
                <button type="button" className="btn btn-info" onClick={this.saveProfile}>Explore me</button>
                <div align="left" id="profileData">
                    <br/>
                    <br/>
                    <h3> First name: {this.state.profileFOAF.name}</h3><br/>
                    <h4>Knows:</h4>
                    {this.state.friendsList.map((friend, index) => {
                        return (
                            <h5 key={index}>Name: {friend.name} | Email: {friend.email} </h5>

                        )
                    })}<br/>
                    <br/>
                    <h5> Last name: {this.state.profileFOAF.surname}</h5><br/>
                    <h5> Nickname: {this.state.profileFOAF.nick}</h5><br/>
                    <h5> Title: {this.state.profileFOAF.title}</h5><br/>
                    <h5> Homepage: <a href={this.state.profileFOAF.homepage}>{this.state.profileFOAF.homepage}</a></h5>
                    <br/>
                    <h5> Facebook Link: <a
                        href={this.state.profileFOAF.homepage}>{this.state.profileFOAF.facebookLink}</a></h5><br/>
                    <h5> Twitter Link: <a
                        href={this.state.profileFOAF.homepage}>{this.state.profileFOAF.twitterLink}</a></h5><br/>
                    <h5> Blog link: <a href={this.state.profileFOAF.homepage}>{this.state.profileFOAF.blogLink}</a></h5>
                    <br/>
                    <h5> Skype ID: {this.state.profileFOAF.skypeID}</h5><br/>

                </div>
            </div>

        )
    }
}

export default Explorer