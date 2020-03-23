import React, {Component} from 'react';
import PersonService from "../../service/personService";
import Person from "./Person/person.js"
import Tab from "./Tab/tab"
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Textarea as MdTextarea } from 'reactstrap-md-textarea';
import Intro from "./Intro/intro";

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
            friends: newFriends
        };
    }


    savePerson = (e) => {

        //1. Save newPerson -> response returns same person with ID
        //2. Save newFriends -> append the received ID
        //3. Save socialNetworking -> append the received ID
        //4. Save workProfile -> append the received ID
        /*e.preventDefault();

        //console.table(this.state.socNet);
        //console.table(this.state.workProf);
        console.table(this.state.friends);

        return;*/

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
                        })
                    }).catch(err => {
                        alert(err)
                    })
                }).catch(err => {
                    alert(err)
                })
            }).catch(err => {
                alert(err)
            })
        }).catch(err => {
            alert(err)
        })

    }

    personChange = ((target, value) => {
        this.setState(prevState => {
            let person = this.state.person;
            person[target] = value;
            return {
                person: person
            }
        })
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
                <Intro/>
                <Person onPersonChange={this.personChange}/>
                <button type="button" className="btn btn-info" onClick={this.savePerson}>FOAF me</button>
                <Tab onFriendChange={this.friendsChange} onWorkProfChange={this.workProfChange}
                     onSocNetChange={this.socNetChange}/>
                <div id="foafProfile" align="left">
                </div>
            </div>
        )
    }
}

export default CreateProfile;