import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/jewellerys')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Container>
                <Box>
                    <Typography sx={{ fontSize: '40px', fontWeight: 600, textAlign: 'center', mb: 10, mt: 10 }}>
                        Our Products
                    </Typography>
                    <Grid container spacing={4} sx={{ mb: 10 }}>
                        {
                            products.slice(0, 6).map(product => <Product product={product} key={product._id}></Product>)
                        }
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Products;