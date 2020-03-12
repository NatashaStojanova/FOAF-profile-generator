import React, {Component} from 'react';
import PersonService from "../../service/personService";


class CreateProfile extends Component {
    constructor(props) {
        super(props);
        let newPerson = {
            firstName: "Esmeralda",
            lastName: null,
            nickname: null,
            homepage: null,
            email: null,
            baseURI: null,
            title: "juancho",
        };

        let newFriends = [
            {//First friend is always the input person
                firstName: "friend1",
                lastName: null,
                nickname: null,
                homepage: null,
                email: null,
                baseURI: null,
                title: null,
            },
            {
                firstName: "friend2",
                lastName: null,
                nickname: null,
                homepage: null,
                email: null,
                baseURI: null,
                title: null,
            },
            {
                firstName: "friend3",
                lastName: null,
                nickname: null,
                homepage: null,
                email: null,
                baseURI: null,
                title: null,
            }
        ];

        let socialNetworking = {
                personID: 0,
                blog: "boom",
                skypeID: null,
                linkedIn: null,
                facebookLink: null,
                twitterLink: null,
            };

        let workProfile = {
            personID: 0,
            workHomepage: "yo",
            schoolHomepage: null,
            currentProject: null,
            recentPublication: null
        };

        PersonService.addPerson(newPerson).then(resp => {
            //resp.data.data.id -> socialNetworking['personID']
            PersonService.addSocNet(socialNetworking).then(resp3 => {
                PersonService.addWorkProf(workProfile).then(resp4 => {
                    PersonService.addFriends(newFriends).then(resp2 => {
                        console.table(resp4);
                    })
                })
            })
        });

        this.setState({})
    }

    savePerson() {
        //1. Save newPerson -> response returns same person with ID
        //2. Save newFriends -> append the received ID
        //3. Save socialNetworking -> append the received ID
        //4. Save workProfile -> append the received ID

    }

    render() {
        return (
            <div className="container">

            </div>
        )
    }
}

export default CreateProfile;