import React from 'react';
import {Jumbotron} from 'reactstrap';


const Home = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">FOAF generator</h1>
                <img
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/FoafLogo.svg/1200px-FoafLogo.svg.png"}
                    alt="foafLogo" width={200}/>
                <h2 className="display-5">Here you can create, parse or explore your FOAF profile!</h2>
                <br/>
                <h3 className="display-5">What is FOAF?</h3>
                <div className="container">
                    <p className="lead">FOAF is a way to describe yourself -- your name, email address, and the people
                        you're friends with -- using XML and RDF. Here you can process these descriptions, perhaps as
                        part of an automated search engine, to discover information about your and the communities of
                        which you're a member. FOAF has the potential to drive many new interesting developments in
                        online communities. </p>
                </div>
                <br/>
                <hr className="my-2"/>
                <br/>
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
