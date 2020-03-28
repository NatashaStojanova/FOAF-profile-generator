import React, {Component} from 'react';
import PersonService from "../../service/personService";
import Person from "./Person/person.js"
import Tab from "./Tab/tab"
import Intro from "./Intro/intro";
import {Button} from "reactstrap";
import Profile from "../Explorer/Profile/profile";
import ShowProfile from "../Explorer/ShowProfile/showProfile";

class CreateProfile extends Component {
    constructor(props) {
        super(props);

        let newPerson = {
            firstName: "",
            lastName: "",
            nickname: "",
            homepage: "",
            email: "",
            baseURI: "",
            title: "",
            image: "",
        };

        let newFriends = [];

        let newSocNet = {
            personID: "",
            blog: "",
            skypeID: "",
            linkedIn: "",
            facebookLink: "",
            twitterLink: "",
        };

        let newWorkProf = {
            personID: "",
            workHomepage: "",
            schoolHomepage: "",
            currentProject: "",
            recentPublication: "",
            basedNear: "",
        };


        this.state = {
            person: newPerson,
            socNet: newSocNet,
            workProf: newWorkProf,
            friends: newFriends,
            disable: true,
            nameError: "",
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


    savePerson = (e) => {
        this.setState({
            "errorMessage": null,
        });
        PersonService.addPerson(this.state.person).then(personResp => {
            let newPerson = personResp.data;

            this.setState(prevState => {
                let newSocNet = this.state.socNet;
                let newWorkProf = this.state.workProf;
                let newFriends = this.state.friends;
                newSocNet.personID = newPerson.id;
                newWorkProf.personID = newPerson.id;

                newFriends[0] = newPerson;
                return {
                    socNet: newSocNet,
                    workProf: newWorkProf,
                    friends: newFriends,
                }
            });
            PersonService.addSocNet(this.state.socNet).then(socNetResp => {
                PersonService.addWorkProf(this.state.workProf).then(workProfResp => {

                    PersonService.addFriends(this.state.friends).then(resp => {
                        //alert("Successfully added person");
                        PersonService.generateProfile(newPerson).then(personResp => {
                            document.getElementById("foafProfile").style.border = "thin solid #d3d3d3";
                            document.getElementById("foafProfile").innerText = personResp.data;
                            //alert("Successfully created Profile")
                        }).catch(error => {
                            alert("GENERATE")
                            this.setState({
                                "errorMessage": error.data
                            });
                        })
                    }).catch(error => {
                        alert("F")
                        this.setState({
                            "errorMessage": error.data
                        });
                    })
                }).catch(error => {
                    alert("WP")
                    this.setState({
                        "errorMessage": error.data
                    });
                })
            }).catch(error => {
                alert("S")
                this.setState({
                    "errorMessage": error.data
                });
            })
        }).catch(error => {
            alert("P")
            this.setState({
                "errorMessage": error.data
            });
        })

    }
    validate = () => {


        if (this.state.person.baseURI && this.state.person.email) {
            console.log("not blank!")
            return true;
        }
        console.log("blank!")
        console.log(this.state)
        return false;
    };
    personChange = ((target, value) => {
            this.setState(prevState => {
                let person = this.state.person;
                person[target] = value;
                    return {
                        person: person,

                    }

            })

        const isValid = this.validate();
        if (isValid) {
            console.log("VALIDNO POMINA");
            this.setState({disable: false});
        }
        else{
            console.log("IMAS USTE POLINJA ZA POPOLNUVANJE");
        }

    });

    socNetChange = ((target, value) => {
        this.setState(prevState => {
            let socNet = this.state.socNet;
            socNet[target] = value;
            return {
                socNet: socNet
            }
        })
    });

    workProfChange = ((target, value) => {
        this.setState(prevState => {
            let workProf = this.state.workProf;
            workProf[target] = value;
            return {
                workProf: workProf
            }
        })
    });

    friendsChange = ((friendID, target, value) => {

            let id = friendID;
            this.setState(prevState => {
                let friends = this.state.friends;
                if (friends[id] === undefined || friends[id] === null)
                    friends[id] = {};
                friends[id][target] = value;
                return {
                    friends: friends
                }
            })


    });

    render() {
        return (

            <div className="container">
                <div className="form-group">
                    <div className="col-md-1"/>
                    <br/>
                    {(this.state.errorMessage !== null ? <div>
                        <div className="container border-error" style={{border: "1px solid red", padding: "1em"}}>

                            <h3 className="text-danger">
                                An error occured
                            </h3>
                            <p>Please notice that your email and base URI can't be blank, either your friends </p>
                            <br/>
                            <a href="/create"
                               className="btn btn-primary text-upper">
                                Go back
                            </a>
                            <div className="text-danger">
                                {this.state.errorMessage}
                            </div>
                        </div>
                        <br/>
                    </div> : <div><Intro/>
                        <Person onPersonChange={this.personChange}/>
                        <Button type="button" className="btn btn-info" disabled={this.state.disable}
                                onClick={this.savePerson}>FOAF me</Button>
                        <Tab onFriendChange={this.friendsChange} onWorkProfChange={this.workProfChange}
                             onSocNetChange={this.socNetChange}/>
                        <div align="left" id="foafProfile"><br/>
                        </div>
                    </div>)}

                </div>
            </div>


        )
    }
}

export default CreateProfile;