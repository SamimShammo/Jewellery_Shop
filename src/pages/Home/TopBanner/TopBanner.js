import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import bannerbg from '../../../img/Banner.jpg';
import './TopBanner.css';

const TopBanner = () => {

    const banner = {
        backgroundImage: `url(${bannerbg})`,
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

                    <Grid item xl={6} lg={6} md={12} sm={12} sx={12} >
                        <Typography sx={{ fontSize: '50px', fontWeight: 600 }}>
                            Family Jewelery
                            Collection
                        </Typography>
                        <Typography sx={{ fontSize: "16px", mt: 2, mb: 2 }}>

                            Designer Jewellry Necklaces-Bracelets-Earings


                        </Typography>
                        <Button className="btnCustom"> <i class="fas fa-shopping-cart " style={{ marginRight: 6, fontSize: '20px' }}></i>SHOP NOW</Button>
                    </Grid>

                </Container>
            </Box>
        </>
    );
};

export default TopBanner;