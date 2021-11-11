import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const Purchase = () => {
    const { id } = useParams()
    const [products, setProducts] = useState({});
    const value = 4.5;
    useEffect(() => {
        const url = `http://localhost:5000/jewellerys/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const { img, name, size, price, color, product_description } = products;
    return (
        <>
            <Container >
                <Grid container spacing={4} sx={{ mt: 10, alignItems: 'center' }}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Image src={img} style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ border: '1px solid #ededed', borderRadius: '10px', p: 5 }}>
                            <Typography variant="h5" sx={{ fontWeight: 400, color: '#222' }}>
                                {name}
                            </Typography>
                            <Typography variant="inherit" sx={{ mt: 2, color: '#888' }}>
                                Reference: demo_19
                            </Typography>

                            <Typography variant="inherit" sx={{ mt: 2, mb: 2 }}>
                                {size}
                            </Typography>
                            <Typography variant="inherit" sx={{ mt: 2, mb: 2 }}>
                                Color  {color}
                            </Typography>
                            <hr />
                            <Typography variant="inherit" sx={{ mt: 2, color: '#888' }}>
                                {product_description}
                            </Typography>
                            <hr />

                            <Typography sx={{ fontWeight: 500, fontSize: "30px", mt: 2, mb: 2 }}>
                                <Rating
                                    name="text-feedback"
                                    value={value}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                            </Typography>
                            <Typography sx={{ fontWeight: 500, fontSize: "30px", mt: 2, mb: 2 }}>
                                {price}
                            </Typography>
                            <hr />

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Purchase;