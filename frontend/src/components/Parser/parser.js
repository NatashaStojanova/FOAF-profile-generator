import React,{Component} from 'react'
import ProfileFormat from "./ProfileFormat/profileFormat.js";
import PersonService from "../../service/personService";
import {Button} from "reactstrap";

class Parser extends Component{

    constructor(props) {
        super(props);

        let newProfile = {
            yourProfile: null,
            fromFormat: "RDF/XML",
            toFormat: "TURTLE",
        };

        this.state = {
            profile: newProfile,
            disable: true,
        };
    }



    parseFOAFProfile = (e) => {
        PersonService.parseProfile(this.state.profile).then(profileResp => {
            document.getElementById("parserProfile").style.border = "thin solid #d3d3d3";
            document.getElementById("parserProfile").innerText = profileResp.data
            //alert("PROFILE PARSED");
        }).catch(err => {
            alert("Input data is not in a valid format, or you didn't select the correct input/output format.")
        })
    }


    profileChange = ((target, value) => {
        if (value === '') {
            this.setState({disable: true});
        } else {
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
                <ProfileFormat onProfileChange={this.profileChange}/>
                <Button type="button" className="btn btn-info" disabled={this.state.disable}
                        onClick={this.parseFOAFProfile}>Parse profile</Button>
                <br/>
                <div id="parserProfile" align="left">
                    <br/>
                    <br/>
                </div>
            </div>

        )
    }
}

export default Parser