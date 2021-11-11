import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import exploreBg from '../../../img/exploreBg.jpg'
import { Container } from 'react-bootstrap';
import ExploreProducts from './ExploreProducts/ExploreProducts';

const Explore = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/jewellerys')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    const banner = {
        backgroundImage: `url(${exploreBg})`,
        padding: '10% 0',
        backgroundAttachment: "fixed",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        color: "black",
    }
    return (
        <>
            <Box style={banner}>
                <Container>
                    <Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '50px', fontWeight: 600 }}>
                                Welcome to Our All Jewellery <br /> Products
                            </Typography>
                            <Typography sx={{ fontSize: "16px", mt: 2, mb: 2 }}>

                                Rings, Occasion Pieces, Pandora and More.

                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Grid container spacing={4} sx={{ mt: 10, mb: 10 }}>
                        {
                            allProducts.map(products => <ExploreProducts products={products} key={products._id}></ExploreProducts>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Explore;