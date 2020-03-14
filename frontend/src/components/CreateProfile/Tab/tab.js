import React, {Component, useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import Friend from "../Friend/friend";
import SocialNetwork from "../SocialNetwork/socialNetwork";
import WorkProfile from "../WorkProfile/workProfile";
import ModalExample from "../../ModalExample/modalExample.js"

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            "activeTab": 1,
            "friendCounter": 3
        })
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) this.setActiveTab(tab);
    };

    setActiveTab = tab => {
        this.setState({"activeTab": tab})
    };

    mapFriends = () => {
        let friends = [];
        for (let i = 0; i < this.state.friendCounter; i++) {
            friends.push(
                <Friend friendID={i + 1} onFriendChange={this.props.onFriendChange}/>
            )
        }
        return friends;
    };

    addFriend = (e) => {
        e.preventDefault();
        this.setState({
            friendCounter: this.state.friendCounter + 1
        })
    };

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            <p className="text-info">Friends</p>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            <p className="text-info">Social Network</p>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '3'})}
                            onClick={() => {
                                this.toggle('3');
                            }}
                        >
                            <p className="text-info">Work Profile</p>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col lg="12">
                                {this.mapFriends()}
                            </Col>
                            <button className="btn btn-info" onClick={this.addFriend}>+ Friend</button>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col lg="12">
                                <SocialNetwork onSocNetChange={this.props.onSocNetChange}/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col lg="12">
                                <WorkProfile onWorkProfChange={this.props.onWorkProfChange}/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Tab;
