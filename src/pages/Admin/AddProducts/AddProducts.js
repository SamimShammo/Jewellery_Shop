import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Box } from '@mui/system';
import Header from '../../Shared/Header/Header';
import { Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const confirmed = window.confirm('You want to add a newproduct')
        if (confirmed) {
            axios.post('http://localhost:5000/jewellerys', data)
                .then(res => {
                    if (res.data.insertedId) {
                        alert('Successfully Added Product')
                        reset()
                    }
                })
        }

    }
    return (
        <>
            <Header></Header>
            <Container>
                <Box sx={{ mt: 10 }}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} style={{ margin: 'auto' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("name", { required: true })} placeholder="" placeholder="Please type new Product name" />
                            <input sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("color", { required: true })} placeholder="Please type Products Color Name" />
                            <input

                                sx={{ p: 2, }} style={{ padding: '5px', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("size", { required: true })} placeholder="Please enter your product size" />
                            <input sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("product_description", { required: true })} placeholder="Please type product description " />
                            <input sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("img", { required: true })} placeholder="Pleas enter product image URL (360 x 360)" />
                            <input type="number" sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("price", { required: true })} placeholder="Pleas set a product price" />

                            <button className="btnCustom w-100" type="submit">Add Products</button>
                        </form>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default AddProducts;