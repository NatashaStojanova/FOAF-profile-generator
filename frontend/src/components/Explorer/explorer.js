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
            friends: '',

        };
    }

    saveProfile = (e) => {
        PersonService.addProfile(this.state.profile).then(profileResp => {
            //document.getElementById("foafExplorer").innerText = profileResp.name
            this.setState({
                profileFOAF: profileResp.data,
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

                <div align="left">
                    <h5> First name: {this.state.profileFOAF.name}</h5><br/>
                    <h5> Last name: {this.state.profileFOAF.surname}</h5><br/>
                    <h5> Nickname: {this.state.profileFOAF.nick}</h5><br/>
                    <h5> Title: {this.state.profileFOAF.title}</h5><br/>
                    <h5> Homepage: {this.state.profileFOAF.homepage}</h5><br/>
                </div>
            </div>

        )
    }
}

export default Explorer