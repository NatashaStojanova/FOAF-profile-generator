import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import CreateProfile from "../CreateProfile/createProfile"
import './App.css';
import Header from "../Header/header";
import Parent from "../Parent/parent";
import Home from "../Home/home.js"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Route path={"/"} exact render={() =>
                        <Home/>}>
                    </Route>
                    <Route path="/create" exact
                           render={() => <CreateProfile/>}>
                    </Route>
                    <Route path="/proba" exact
                           render={() => <Parent/>}>
                    </Route>
                </Router>
            </div>

        );
    }
}

export default App;
