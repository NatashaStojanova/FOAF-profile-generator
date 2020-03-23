import React,{Component} from 'react'
import ProfileFormat from "./ProfileFormat/profileFormat.js";
import PersonService from "../../service/personService";

class Parser extends Component{

    constructor(props) {
        super(props);

        let newProfile = {
            yourProfile: null,
            fromFormat: null,
            toFormat: null,
        };

        this.state = {
            profile: newProfile,
        };
    }



    parseFOAFProfile = (e) => {
        PersonService.parseProfile(this.state.profile).then(profileResp => {
            document.getElementById("parserProfile").style.border = "thin solid #d3d3d3";
            document.getElementById("parserProfile").innerText = profileResp.data
            alert("PROFILE PARSED");
        }).catch(err => {
            alert("Input data is not in a valid format, or you didn't select the correct input/output format.")
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
                <ProfileFormat onProfileChange={this.profileChange}/>
                <button type="button" className="btn btn-info" onClick={this.parseFOAFProfile}>Submit</button>
                <br/>
                <div  id="parserProfile">
                    <br/>
                    <br/>
                </div>
            </div>

        )
    }
}

export default Parser