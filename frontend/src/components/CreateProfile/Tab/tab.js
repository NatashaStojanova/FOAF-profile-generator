import React, {useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import Friend from "../Friend/friend";
import SocialNetwork from "../SocialNetwork/socialNetwork";
import WorkProfile from "../WorkProfile/workProfile";
import ModalExample from "../../ModalExample/modalExample.js"

const Example = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '1'})}
                        onClick={() => {
                            toggle('1');
                        }}
                    >
                        <p className="text-info">Friends</p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '2'})}
                        onClick={() => {
                            toggle('2');
                        }}
                    >
                        <p className="text-info">Social Network</p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '3'})}
                        onClick={() => {
                            toggle('3');
                        }}
                    >
                        <p className="text-info">Work Profile</p>
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col lg="12">

                            <Friend onFriendChange={props.onFriendChange}/>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col lg="12">
                            <SocialNetwork onSocNetChange={props.onSocNetChange}/>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col lg="12">
                            <WorkProfile onWorkProfChange={props.onWorkProfChange}/>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Example;
