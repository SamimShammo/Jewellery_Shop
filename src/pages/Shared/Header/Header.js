import React from 'react';
import logo from '../../../img/logo.png'
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button } from '@mui/material';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow" sticky="top">
                <Container>
                    <Navbar.Brand href="#" style={{ width: "20%" }}>
                        <img src={logo} alt="" style={{ width: "100%" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto" style={{ alignItems: 'center' }}>
                            <Link to="/home" style={{ color: 'black', fontSize: "15px !important", textDecoration: 'none', fontWeight: 600, marginRight: 20 }}>Home</Link>
                            <Link to="/explore" style={{ color: 'black', fontSize: "15px !important", textDecoration: 'none', fontWeight: 600, marginRight: 20 }}>Explore</Link>
                            <Link to="/dashboard" style={{ color: 'black', fontSize: "15px !important", textDecoration: 'none', fontWeight: 600, marginRight: 20 }}>Dashboard</Link>
                            <Link to="/review" style={{ color: 'black', fontSize: "15px !important", textDecoration: 'none', fontWeight: 600, marginRight: 20 }}>Review</Link>
                            <Button color="inherit">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;


{/* */ }