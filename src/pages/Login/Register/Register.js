import { Alert, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const location = useLocation()
    const history = useHistory()
    const [loginData, setloginData] = useState({})
    const { isLoading, error, user, registerUser, googleSignIn } = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setloginData(newLoginData)

    }

    const handelSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    const signInWithGoogle = () => {
        googleSignIn(location, history)
    }
    return (
        <>
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>

                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ textAlign: 'right' }}>
                        <img src="" style={{ width: '85%' }} alt="" />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                        <Typography variant="h4" sx={{ color: "#1CC7C1", fontWeight: '600', textAlign: 'center' }} gutterBottom>Register</Typography>
                        <Box sx={{ textAlign: 'center' }}>

                            {isLoading && <CircularProgress />}
                            {user?.email ? <Alert severity="success" sx={{ width: "85%" }}>User Created Successfully !</Alert> : <Alert severity="warning" sx={{ mt: 2, width: "85%" }}> Please put valid Information !</Alert>}
                            {error && <Alert severity="error" sx={{ mt: 2, mb: 5, width: "85%" }}>{error}</Alert>}
                        </Box>
                        <form onSubmit={handelSubmit} >
                            <TextField
                                id="standard basic"
                                style={{ width: '90%' }}
                                label="Your Name"
                                variant="standard"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                            /> <br />
                            <TextField
                                id="standard basic"
                                style={{ width: '90%' }}
                                label="Your Email"
                                variant="standard"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                            /> <br />
                            <TextField
                                id="standard basic"
                                name="password"
                                onBlur={handleOnBlur}
                                label="Your Password"
                                type="password"
                                style={{ width: '90%' }}
                                variant="standard"
                            /> <br />
                            <TextField
                                id="standard basic"
                                name="password2"
                                onBlur={handleOnBlur}
                                label="Retype Password"
                                type="password"
                                style={{ width: '90%' }}
                                variant="standard"
                            /> <br /> <br />
                            <Button type="submit" className="btnCustom" sx={{ width: "90%" }}>Submit</Button>
                            <NavLink to="/login" style={{ textAlign: "center", textDecoration: "none" }}>
                                Already have account? Please Login
                            </NavLink>
                            <Button onClick={signInWithGoogle} className="btnCustom" sx={{ width: "90%" }}>Google Signin</Button>
                        </form>

                    </Grid>


                </Grid>
            </Container>
        </>
    );
};

export default Register;