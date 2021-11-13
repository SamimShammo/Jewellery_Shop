import { Alert, TextField, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';



const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)

    }
    const handleSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
                console.log(data)
            })
        e.preventDefault()
    }
    return (
        <>

            <Container >

                <Box sx={{ mt: 10 }}>
                    <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                        {success && <Alert severity="success" sx={{ width: "85%", mb: 5 }}>New Admin added Successfully!</Alert>}
                        <form onSubmit={handleSubmit}>
                            <TextField
                                onBlur={handleOnBlur}
                                label="Email"
                                type="email"
                                sx={{ width: '100%', mb: 2 }}

                            />
                            <Button type="submit" className="btnCustom">Make Admin</Button>
                        </form>

                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default MakeAdmin;