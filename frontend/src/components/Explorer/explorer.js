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
            document.getElementById("profileData").style.visibility = "visible";
            this.setState({
                profileFOAF: profileResp.data,
                friendsList: profileResp.data.friends,
            })
            //alert("SENT DATA");
        }).catch(err => {
            alert("Input data is not in a correct format")
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
                <div align="left" id="profileData" style={{visibility: "hidden"}}>
                    <br/>
                    <br/>
                    <h3>Person Base URI: {this.state.profileFOAF.baseURI} </h3>
                    <h3>Photo: </h3><img src={this.state.profileFOAF.image} alt='profilePhoto' width={500}></img>
                    <br/>
                    <br/>
                    <br/>
                    <h3> First name: {this.state.profileFOAF.name}</h3><br/>
                    <h3> Last name: {this.state.profileFOAF.surname}</h3><br/>
                    <h3> Nickname: {this.state.profileFOAF.nick}</h3><br/>
                    <h3>{this.state.profileFOAF.name} knows:</h3>
                    {this.state.friendsList.map((friend, index) => {
                        return (
                            <h4 key={index}>Name: {friend.name} | Email: {friend.email} </h4>

                        )
                    })}<br/>
                    <br/>
                    <h3> Title: {this.state.profileFOAF.title}</h3><br/>
                    <h3> Homepage: <a href={this.state.profileFOAF.homepage}>{this.state.profileFOAF.homepage}</a></h3>
                    <br/>
                    <h3> Facebook Link: <a
                        href={this.state.profileFOAF.homepage}>{this.state.profileFOAF.facebookLink}</a></h3><br/>
                    <h3> Twitter Link: <a
                        href={this.state.profileFOAF.homepage}>{this.state.profileFOAF.twitterLink}</a></h3><br/>
                    <h3> Blog link: <a href={this.state.profileFOAF.homepage}>{this.state.profileFOAF.blogLink}</a></h3>
                    <br/>
                    <h3> Skype ID: {this.state.profileFOAF.skypeID}</h3>
                    <br/>
                    <h3>Current project: {this.state.profileFOAF.currentProject}</h3>
                    <br/>
                    <h3>Recent publication: {this.state.profileFOAF.recentPublication}</h3>
                    <br/>
                    <h3>Work homepage: {this.state.profileFOAF.workHomepage}</h3>
                    <br/>
                    <h3> Based Near: {this.state.profileFOAF.basedNear}</h3><br/>

                </div>
            </div>

        )
    }
}

export default Explorer