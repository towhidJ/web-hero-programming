import React from 'react';
import {Link,NavLink} from "react-router-dom";
import {Container, Nav, Navbar, } from "react-bootstrap";

const NavL = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand >
                        React Router
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                            to="/" >Home</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/pricing">Pricing</NavLink>


                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavL;
