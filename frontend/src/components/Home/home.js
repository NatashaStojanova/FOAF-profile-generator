import React from 'react';
import {Jumbotron, Navbar,} from 'reactstrap';


const Home = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Welcome to FOAF</h1>
                <img
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/FoafLogo.svg/1200px-FoafLogo.svg.png"}
                    width={200}/>
                <h2 className="display-5">Here you can create, parse or explore your FOAF profile!</h2>
                <br/>
                <h3 className="display-5">What is FOAF?</h3>
                <p className="lead">The FOAF ("Friend of a Friend") project is a community driven effort to define an
                    RDF vocabulary for expressing metadata about people, and their interests, relationships and
                    activities. Founded by Dan Brickley and Libby Miller, FOAF is an open community-lead initiative
                    which is tackling head-on the wider Semantic Web goal of creating a machine processable web of data.
                    Achieving this goal quickly requires a network-effect that will rapidly yield a mass of data.
                    Network effects mean people.</p>
                <hr className="my-2"/>
                <p>This specification describes the FOAF language, defined as a dictionary of named properties and
                    classes using W3C's RDF technology. </p>
                <p className="lead">
                    <a href="http://www.foaf-project.org/" className="btn btn-primary">Learn more</a>
                </p>
            </Jumbotron>
            <br/><br/><br/>
        </div>
    );
};

export default Home;
