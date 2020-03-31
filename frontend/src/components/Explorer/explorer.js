import React,{Component} from 'react'
import Profile from "./Profile/profile";
import PersonService from "../../service/personService";
import {Button} from "reactstrap";
import ShowProfile from "./ShowProfile/showProfile";


class Explorer extends Component{

    constructor(props) {
        super(props);

        let newProfile = {
            yourProfile: null,
            inputFormat: "",

        };

        this.state = {
            profile: newProfile,
            profileFOAF: '',
            friendsList: [],
            disable:true,

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

    saveProfile = (e) => {
        this.setState({
            "errorMessage": null,
        });
        PersonService.addProfile(this.state.profile).then(profileResp => {
            document.getElementById("profileData").style.border = "thin solid #d3d3d3";
            document.getElementById("profileData").style.visibility = "visible";
            this.setState({
                profileFOAF: profileResp.data,
                friendsList: profileResp.data.friends,
            })
            //alert("SENT DATA");
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
        if (!this.state.profile.yourProfile || !this.state.profile.inputFormat) {
            console.log(this.state)
            return false;
        } else {
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
                            <p>Seems like your data format is invalid or you didn't choose the correct input format</p>
                            <br/>
                            <a href="FOAF-explorer"
                               className="btn btn-primary text-upper">
                                Go back
                            </a>
                            <div className="text-danger">
                                {this.state.errorMessage}
                            </div>
                        </div>
                        <br/>
                    </div> : <div><Profile onProfileChange={this.profileChange}/>
                        <Button type="button" className="btn btn-info" disabled={this.state.disable}
                                onClick={this.saveProfile}>Explore</Button>
                        <div align="left" id="profileData" style={{visibility: "hidden"}}><br/>
                            <ShowProfile value={this.state.profileFOAF} valueFriends={this.state.friendsList}/></div>
                    </div>)}

                </div>
            </div>

        )
    }
}

export default Explorer;