import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SingleManageProducts from './SingleManageProducts/SingleManageProducts';
import Header from '../../Shared/Header/Header';
import axios from 'axios';
const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jewellerys')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteUser = id => {
        const process = window.confirm('You want to remove product')
        if (process) {
            axios.delete(`http://localhost:5000/jewellerys/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert('Successfully')
                        const remainingUsers = products.filter(product => product._id !== id)
                        setProducts(remainingUsers)
                    }
                })
        }
    }
    return (
        <>
            <Header></Header>
            <Box sx={{ mt: 5 }}>
                <Typography sx={{ textAlign: 'center', fontSize: '35px' }}>
                    Manage Products
                </Typography>
                <Container>
                    <Grid container spacing={4} sx={{ mb: 10 }}>
                        {
                            products.map(product => <SingleManageProducts product={product} handleDeleteUser={handleDeleteUser} key={product._id}></SingleManageProducts>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ManageProducts;