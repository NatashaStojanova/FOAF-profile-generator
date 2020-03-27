import React,{Component} from 'react'
import ProfileFormat from "./ProfileFormat/profileFormat.js";
import PersonService from "../../service/personService";
import {Button} from "reactstrap";
import Profile from "../Explorer/Profile/profile";
import ShowProfile from "../Explorer/ShowProfile/showProfile";

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

        this.setState({
            "errorMessage": null,
        })
    }

    componentDidMount() {
        this.setState({
            "errorMessage": null
        })
    }



    parseFOAFProfile = (e) => {
        this.setState({
            "errorMessage": null,
        });
        PersonService.parseProfile(this.state.profile).then(profileResp => {
            document.getElementById("parserProfile").style.border = "thin solid #d3d3d3";
            document.getElementById("parserProfile").innerText = profileResp.data
            //alert("PROFILE PARSED");
        }).catch(error => {
            console.log(error.data)
            this.setState({
                "errorMessage": error.data
            });
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
                <div className="form-group">
                    <div className="col-md-1"/>
                    <br/>
                    {(this.state.errorMessage !== null ? <div>
                        <div className="container border-error" style={{border: "1px solid red", padding: "1em"}}>

                            <h3 className="text-danger">
                                An error occured
                            </h3>
                            <p>Input data was not in a correct format or you didn't select the correct input/output
                                format.</p>
                            <br/>
                            <a href="FOAF-translator"
                               className="btn btn-primary text-upper">
                                Go back
                            </a>
                            <div className="text-danger">
                                {this.state.errorMessage}
                            </div>
                        </div>
                        <br/>
                    </div> : <div><ProfileFormat onProfileChange={this.profileChange}/>
                        <Button type="button" className="btn btn-info" disabled={this.state.disable}
                                onClick={this.parseFOAFProfile}>Parse profile</Button>
                        <br/>
                        <div id="parserProfile" align="left">
                            <br/>
                            <br/>
                        </div>
                    </div>)}

                </div>
            </div>


        )
    }
}

export default Parser