
import { Alert, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const [loginData, setloginData] = useState({})
    const { googleSignIn, error, user, loginUser, isLoading, } = useAuth()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value)
        setloginData(newLoginData)

    }

    const handelSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    const signInWithGoogle = () => {
        googleSignIn(location, history)
    }
    return (

        <>
            <Header></Header>
            <Container sx={{ mt: 5 }}>
                <Box sx={{ mt: 10, mb: 10 }}>



                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ textAlign: 'right' }}>
                            <img src="" style={{ width: '85%' }} alt="" />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                            <Typography variant="h4" sx={{ color: "#222", fontWeight: '600', textAlign: 'center' }} gutterBottom>Login</Typography>
                            <Box sx={{ textAlign: 'center' }} >
                                {isLoading && <CircularProgress />}
                                {user?.email ? <Alert severity="success" sx={{ width: "85%" }}>User Created Successfully !</Alert> : <Alert severity="warning" sx={{ width: "85%" }}> Please put valid Information !</Alert>}

                                {error && <Alert severity="error" sx={{ mt: 2, mb: 5, width: "85%" }}>{error}</Alert>}
                            </Box>
                            <form onSubmit={handelSubmit} >
                                <TextField
                                    style={{ width: '90%' }}
                                    label="Your Email"
                                    variant="standard"
                                    name="email"
                                    type="email"
                                    onChange={handleOnChange}
                                /> <br />
                                <TextField
                                    name="password"
                                    onChange={handleOnChange}
                                    label="Your Password"
                                    type="password"
                                    style={{ width: '90%' }}
                                    variant="standard"
                                /> <br /> <br />
                                <Button type="submit" className="btnCustom" style={{ width: "90%", display: 'block', marginBottom: 10 }} >Submit</Button>


                                <NavLink to="/register" style={{ textAlign: "center", textDecoration: "none", display: 'block' }}>
                                    Already have account?Please Login
                                </NavLink>
                                <Button onClick={signInWithGoogle} className="btnCustom" style={{ width: "90%", display: 'block', marginTop: 10 }}> Google Signin</Button>
                            </form>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;