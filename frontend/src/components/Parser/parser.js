import React,{Component} from 'react'
import ProfileFormat from "./ProfileFormat/profileFormat.js";
import PersonService from "../../service/personService";
import {Button} from "reactstrap";

class Parser extends Component{

    constructor(props) {
        super(props);

        let newProfile = {
            yourProfile: null,
            fromFormat: "",
            toFormat: "",
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
            document.getElementById("parserProfile").innerHTML = profileResp.data
            //alert("PROFILE PARSED");
        }).catch(error => {
            console.log(error.data)
            this.setState({
                "errorMessage": error.data
            });
        })
    }

    validate = () => {
        console.log(this.state)
        //debugger;
        if (!this.state.profile.yourProfile) {
            console.log(this.state)
            return false;
        } else {
            if (!this.state.profile.fromFormat || !this.state.profile.toFormat) {
                return false;
            }
            console.log(this.state)
            return true;
        }
    };

    profileChange = ((target, value) => {
            this.setState(prevState => {
                let profile = this.state.profile;
                profile[target] = value;
                return {
                    profile: profile,
                }
            }, () => {
                const isValid = this.validate();

                if (isValid) {
                    console.log("valid inputs");
                    this.setState({disable: false});
                } else {
                    console.log("invalid inputs");
                    this.setState({disable: true});
                }
            });

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
                            <p>Seems like your data format is invalid or you didn't choose the correct input/output
                                format</p>
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
                        <br/> <br/>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                placeholder="Your output"
                                id="parserProfile"
                                rows="20"
                            />
                        </div>
                    </div>)}

                </div>
            </div>


        )
    }
}

export default Parser