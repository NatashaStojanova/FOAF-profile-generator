import React,{Component} from 'react'
import Profile from "../Profile/profile";
import PersonService from "../../service/personService";

class Parser extends Component{

    constructor(props) {
        super(props);

        let newProfile = {
            yourProfile: null,

        };

        this.state = {
            profile: newProfile,
        };
    }

    parseFOAFProfile = (e) => {
        PersonService.parseProfile(this.state.profile).then(profileResp => {
            document.getElementById("parserProfile").innerText = profileResp.data
            alert("PROFILE PARSED");
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
                <button type="button" className="btn btn-info" onClick={this.parseFOAFProfile}>Parse me</button>
                <div align="left" id="parserProfile">
                </div>
            </div>

        )
    }
}

export default Parser