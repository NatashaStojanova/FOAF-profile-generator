import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CreateProfile from "../CreateProfile/createProfile"
import './App.css';
import Header from "../Header/header";
import Home from "../Home/home.js"
import Explorer from "../Explorer/explorer";
import Parser from "../Parser/parser";
import FooterPage from "../FooterPage/footerPage";
import Test from "../Test/test.js"

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
                    <Route path="/FOAF-explorer" exact
                           render={() => <Explorer/>}>
                    </Route>
                    <Route path="/FOAF-translator" exact
                           render={() => <Parser/>}>
                    </Route>
                    <Route path="/test" exact
                           render={() => <Test/>}>
                    </Route>
                    <FooterPage/>
                </Router>
            </div>

        );
    }
}

export default App;
