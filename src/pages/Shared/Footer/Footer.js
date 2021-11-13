import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Box className="bg-light p-5">
                <Container>
                    <Row>
                        <Col xl={4} md={3}>
                            <Box className="mb-5">
                                <h3 className="-title">Contact Us</h3>
                                <Box >
                                    <p><span><i className="fas fa-envelope"></i></span> contact@jwelleryshop.com</p>
                                    <p><span><i className="fas fa-phone-alt"></i></span> +1 (216-456-7899)</p>
                                    <p><span><i class="fas fa-map-marker-alt"></i></span> 674 Upland Avenue,Cridersville,OH</p>
                                </Box>
                            </Box>
                        </Col>
                        <Col xl={4} md={3}>
                            <Box className=" mb-5">
                                <h3 >Links</h3>
                                <Box >
                                    <ul>
                                        <li><Link className="text-decoration-none text-black" as={Link} to="#" >About us</Link></li>
                                        <li><Link className="text-decoration-none text-black" as={Link} to="#" >Privacy Policy</Link></li>
                                        <li><Link className="text-decoration-none text-black" as={Link} to="#" >Login</Link></li>
                                        <li><Link className="text-decoration-none text-black" as={Link} to="#" >Register</Link></li>
                                    </ul>
                                </Box>
                            </Box>
                        </Col>
                        <Col xl={4} md={6}>
                            <Box className=" mb-5">
                                <h3 className="-title"> <i className="fas fa-paper-plane"></i>Sign up for newsletter  </h3>
                                <Box className="">
                                    <Box id="" className="subscribe-form pr-40">
                                        <form>
                                            <Box sx={{ mb: 2 }}>
                                                <TextField type="email" name="email" className="email" label="Enter Your E-mail" required />
                                                <Button className="btnCustom" sx={{ height: '55px', color: 'black' }}>SUBMIT</Button>
                                            </Box>
                                        </form>
                                    </Box>
                                    <Box>
                                        <h3 className="h4">We Accept</h3>
                                        <img className="w-75" src="https://i.ibb.co/dJxc6rK/img-payment.png" />
                                    </Box>
                                </Box>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </Box>
        </>
    );
};

export default Footer;