import React, {Component} from 'react';
import PersonService from "../../service/personService";
import Person from "./Person/person.js"
import Tab from "./Tab/tab"
import Intro from "./Intro/intro";
import {Button} from "reactstrap";

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
                        PersonService.generateProfile(newPerson).then(personResp => {
                            document.getElementById("foafProfile").style.border = "thin solid #d3d3d3";
                            document.getElementById("foafProfile").innerHTML = personResp.data;
                        }).catch(error => {
                            this.setState({
                                "errorMessage": error.data
                            });
                        })
                    }).catch(error => {
                        this.setState({
                            "errorMessage": error.data
                        });
                    })
                }).catch(error => {
                    this.setState({
                        "errorMessage": error.data
                    });
                })
            }).catch(error => {
                this.setState({
                    "errorMessage": error.data
                });
            })
        }).catch(error => {
            this.setState({
                "errorMessage": error.data
            });
        })

    }
    validate = (id) => {
        if (!this.state.person.baseURI || !this.state.person.email) {
            return false;
        } else {
            if (this.state.friends.length === 0) {
                return true;
            } else {
                if (id === undefined) {
                    return true;
                } else {
                    if (this.state.friends[id].firstName && this.state.friends[id].email && this.state.friends[id].baseURI) {
                        return true;
                    } else if (!this.state.friends[id].firstName && !this.state.friends[id].email && !this.state.friends[id].baseURI) {
                        this.state.friends.splice(id, 1);
                        return true;
                    }
                    return false;
                }
            }
            //return true;
        }
    };

    personChange = ((target, value) => {
        this.setState(prevState => {
            let person = this.state.person;
            person[target] = value;

            return {
                person: person,
            }
        }, () => {
            const isValid = this.validate();

            if (isValid) {
                this.setState({disable: false});
            } else {
                this.setState({disable: true});
            }
        });


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
            }, () => {
                const isValid = this.validate(id);

                if (isValid) {
                    this.setState({disable: false});
                } else {
                    this.setState({disable: true});
                }
            });


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
                            <p>You probably haven't entered all the required data or your URIs are in the wrong format.
                                Only well-formed absolute URI refs can be included in RDF/XML. Try again!</p>
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
                        <br/>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                placeholder="Output"
                                id="foafProfile"
                                rows="20"
                            />
                        </div>
                    </div>)}
                </div>
            </div>

        )
    }
}

export default CreateProfile;