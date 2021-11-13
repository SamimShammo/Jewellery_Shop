import React from 'react';
import logo from '../../../img/logo.png'
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Box, Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const Header = () => {
    const { user, logOut, admin, isLoading } = useAuth()
    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <>
            {isLoading && <CircularProgress />}
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
                            {admin ? <Box> <Link to="/addProducts" style={{ color: 'black', fontSize: "15px !important", textDecoration: 'none', fontWeight: 600, marginRight: 20 }}>Add Products</Link> <Link to="/manageProducts" style={{ color: 'black', fontSize: "15px !important", textDecoration: 'none', fontWeight: 600, marginRight: 20 }}>Manage Products</Link><Link to="/makeAdmin" style={{ color: 'black', fontSize: "15px !important", textDecoration: 'none', fontWeight: 600, marginRight: 20 }}>Make Admin</Link> </Box> : <Box>
                                <Link to="/dashboard" style={{ color: 'black', fontSize: "15px !important", textDecoration: 'none', fontWeight: 600, marginRight: 20 }}>Dashboard</Link></Box>
                            }
                            <Button className="text-lowercase " sx={{ color: '#222' }}> <i className="fas fa-user" > </i> {user?.email} </Button>
                            {user?.email ? <Link to="/" style={{ color: 'black', fontSize: "15px !important", textDecoration: 'none', fontWeight: 600, marginRight: 20 }}><Button color="inherit" onClick={logOut}>LogOut</Button> </Link> : <Link to="/login" style={{ color: 'black', fontSize: "15px !important", textDecoration: 'none', fontWeight: 600, marginRight: 20 }}><Button color="inherit">Login</Button> </Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;


{/* */ }