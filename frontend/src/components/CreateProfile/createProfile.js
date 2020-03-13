import React, {Component} from 'react';
import PersonService from "../../service/personService";
import Person from "./Person/person.js"
import Tab from "./Tab/tab"
import WorkProfile from "./WorkProfile/workProfile";
import {Button, Form} from "reactstrap";


class CreateProfile extends Component {
    constructor(props) {
        super(props);

        let newPerson = {
            firstName: null,
            lastName: null,
            nickname: null,
            homepage: null,
            email: null,
            baseURI: null,
            title: null,
        };

        let newFriends = [
            {//First friend is always the input person
                firstName: null,
                lastName: null,
                nickname: null,
                homepage: null,
                email: null,
                baseURI: null,
                title: null,
            }
        ];

        let newSocNet = {
            personID: null,
            blog: null,
            skypeID: null,
            linkedIn: null,
            facebookLink: null,
            twitterLink: null,
        };

        let newWorkProf = {
            personID: null,
            workHomepage: null,
            schoolHomepage: null,
            currentProject: null,
            recentPublication: null
        };

        /*        PersonService.addPerson(newPerson).then(resp => {
                    //resp.data.data.id -> socialNetworking['personID']
                    PersonService.addSocNet(socialNetworking).then(resp3 => {
                        PersonService.addWorkProf(workProfile).then(resp4 => {
                            PersonService.addFriends(newFriends).then(resp2 => {
                                console.table(resp4);
                            })
                        })
                    })
                });*/

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

        console.table(this.state.socNet);
        // console.table(this.state.workProf);

        return;*/

        PersonService.addPerson(this.state.person).then(personResp => {
            let newPerson = personResp.data;
            /* this.setState(state => {
                 // add 0 to be Person
             });
 */
            this.setState(prevState => {
                let newSocNet = this.state.socNet;
                let newWorkProf = this.state.workProf;
                newSocNet.personID = newPerson.id;
                newWorkProf.personID = newPerson.id;
                return {
                    socNet: newSocNet,
                    workProf: newWorkProf,
                }
            });
            PersonService.addSocNet(this.state.socNet).then(socNetResp => {

                PersonService.addWorkProf(this.state.workProf).then(workProfResp => {
                    PersonService.addFriends(this.state.friends).then(
                        alert("Successfully added person")
                    ).catch(err => {
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

    workProfChange = ((workProf) => {
        this.setState({
            workProf: workProf
        })
    });

    friendsChange = ((friends) => {
        this.setState({
            friends: friends,
        })
    });

    render() {
        return (
            <div className="container">
                <Person onPersonChange={this.personChange}/>
                <Tab onFriendChange={this.friendsChange} onWorkProfChange={this.workProfChange}
                     onSocNetChange={this.socNetChange}/>
                <button type="button" className="btn btn-success" onClick={this.savePerson}>Submit</button>
            </div>
        )
    }
}

export default CreateProfile;