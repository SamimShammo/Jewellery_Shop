import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://arcane-sierra-22755.herokuapp.com/jewellery/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <>
            <Container sx={{ mb: 10 }}>

                <Box>
                    <Typography sx={{ fontSize: '40px', fontWeight: 600, textAlign: 'center', mb: 10, mt: 10 }}>
                        Our Client Review
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            reviews.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
                        }
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Review;