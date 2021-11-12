import { Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';
import { Button } from '@mui/material';

const SingleReview = (props) => {
    const { Name, your_review } = props?.review

    return (
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>

            <Paper elevation={3} sx={{ alignItems: 'center', p: 2 }}>
                <Typography variant="h6">
                    <i className="fas fa-user-circle" ></i> {Name}
                </Typography>
                <Rating
                    name="simple-controlled"
                    value="4.5" readOnly
                    precision={0.5}
                />
                <Typography>
                    {your_review}
                </Typography>

                <Typography sx={{ cursor: 'pointer' }}>
                    <Button>54 <i className="fas fa-thumbs-up" style={{ marginLeft: 4, marginRight: 5 }}></i> Like</Button>
                </Typography>
            </Paper>

        </Grid>
    );
};

export default SingleReview;