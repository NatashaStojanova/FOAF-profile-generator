import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import Friend from "../Friend/friend";
import SocialNetwork from "../SocialNetwork/socialNetwork";
import WorkProfile from "../WorkProfile/workProfile";

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            "activeTab": '1',
            "friendCounter": 1
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
                <br/><br/>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            <h5 className="text-info">Friends</h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            <h5 className="text-info">Social Network</h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '3'})}
                            onClick={() => {
                                this.toggle('3');
                            }}
                        >
                            <h5 className="text-info">Work Profile</h5>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col lg="12">
                                {this.mapFriends()}
                                <button className="btn btn-info" onClick={this.addFriend}>Add Friend</button>
                            </Col>
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
