import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">

                <NavbarBrand href="/"><p>FOAF profile</p></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/create/" dark><p>Create profile</p></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/FOAF-explorer"><p>FOAF Explorer</p></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/FOAF-translator"><p>FOAF Translator</p></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
