import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SingleManageProducts from './SingleManageProducts/SingleManageProducts';

import axios from 'axios';
const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://arcane-sierra-22755.herokuapp.com/jewellerys')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteUser = id => {
        const process = window.confirm('After delete that product will not appear on the explore page.')
        if (process) {
            axios.delete(`https://arcane-sierra-22755.herokuapp.com/jewellerys/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert('Successfully')
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts)
                    }
                })
        }
    }
    return (
        <>

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