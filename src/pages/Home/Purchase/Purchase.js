import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
const Purchase = () => {
    const { user } = useAuth()

    const { id } = useParams()
    const [products, setProducts] = useState({});
    const value = 4.5;
    useEffect(() => {
        const url = `http://localhost:5000/jewellerys/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const confirmed = window.confirm('Please confirmed your order ')
        console.log(data)
        if (confirmed) {
            axios.post('http://localhost:5000/jewellery/order', data)
                .then(res => {
                    if (res.data.insertedId) {
                        reset()
                    }
                }
                )
        }
    }

    return (
        <>
            <Header></Header>
            <Container >
                <Grid container spacing={4} sx={{ mt: 10, alignItems: 'center' }}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Image src={products?.img} style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ border: '1px solid #ededed', borderRadius: '10px', p: 5 }}>
                            <Typography variant="h5" sx={{ fontWeight: 400, color: '#222' }}>
                                {products?.name}
                            </Typography>
                            <Typography variant="inherit" sx={{ mt: 2, color: '#888' }}>
                                Reference: demo_19
                            </Typography>

                            <Typography variant="inherit" sx={{ mt: 2, mb: 2 }}>
                                {products?.size}
                            </Typography>
                            <Typography variant="inherit" sx={{ mt: 2, mb: 2 }}>
                                Color  {products?.color}
                            </Typography>
                            <hr />
                            <Typography variant="inherit" sx={{ mt: 2, color: '#888' }}>
                                {products?.product_description}
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
                                {products?.price}
                            </Typography>
                            <hr />
                            <Box>


                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("name", { required: true })} defaultValue={user?.displayName} placeholder="Please Type You Name" />
                                    <input sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="email" {...register("email", { required: true })} defaultValue={user.email} />
                                    <input
                                        label="Type to products"
                                        sx={{ p: 2, }} style={{ padding: '5px', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("pname", { required: true })} placeholder="*Please confirmed product name" />
                                    <input sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("price", { required: true })} placeholder="Confirmed the product amount " />
                                    <input sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("location", { required: true })} placeholder="Type your location" />
                                    <input sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("phone", { required: true })} placeholder="Type your Phone Number" />

                                    <button className="btnCustom w-100" type="submit">Place Order</button>
                                </form>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Purchase;