import { Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../Shared/Header/Header';

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = React.useState(0);
    const onSubmit = data => {
        const confirmed = window.confirm('Are you sure comment  ')
        console.log(data)
        if (confirmed) {
            axios.post('https://arcane-sierra-22755.herokuapp.com/jewellery/review', data)
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
            <Container sx={{ mt: 10 }}>
                <Typography sx={{ textAlign: 'center', fontSize: '30px', mb: 3 }}>
                    Review
                </Typography>
                <Box>
                    <Grid >
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ m: 'auto' }} >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="text" {...register("Name", { required: true })} placeholder="Type Your Name" />
                                <textarea sx={{ p: 2, }} style={{ padding: '5px', display: 'block', fontSize: "13px", marginBottom: '20px', width: '100%' }} type="email" {...register("your_review")} placeholder="Type Your Comment...." />
                                <Rating

                                    name="simple-controlled"
                                    defaultValue={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <button className="btnCustom w-100" type="submit">Submit Comment</button>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </>
    );
};

export default Reviews;