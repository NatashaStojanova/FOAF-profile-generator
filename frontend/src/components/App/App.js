import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import CreateProfile from "../CreateProfile/createProfile"
import './App.css';
import Header from "../Header/header";
import Home from "../Home/home.js"
import Explorer from "../Explorer/explorer";

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
                    <Route path="/FOAFexplorer" exact
                           render={() => <Explorer/>}>
                    </Route>
                </Router>
            </div>

        );
    }
}

export default App;
