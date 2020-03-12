import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import CreateProfile from "../CreateProfile/createProfile"
import './App.css';
import PersonService from "../../service/personService";
import Header from "../Header/header";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
        }
    }

    addNewPerson = ((newPerson) => {
        PersonService.addPerson(newPerson).then(resp => {
            const person = resp.data;
            this.setState((prevState) => {
                const newPersons = prevState.persons.map((item) => {
                    return item;
                });
                newPersons.push(person);
                return {
                    "persons": newPersons
                }
            });
        });
    });

    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Route path="/create" exact
                           render={() => <CreateProfile onSubmit={this.addNewPerson}/>}>
                    </Route>
                </Router>
            </div>

        );
    }
}

export default App;
