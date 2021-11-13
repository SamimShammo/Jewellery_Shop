import { Grid, Typography, Container, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import customize from '../../../img/customize.png';

const CustomizeDiamond = () => {
    const cutomImg = {
        backgroundImage: `url(${customize})`,
        paddingTop: '10%',
        paddingBottom: '10%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: "fixed",
        backgroundRepeat: 'no-repeat',

    }
    return (
        <>
            <Box style={cutomImg}>
                <Container>
                    <Grid item xl={5} lg={5} md={6} sm={8} xs={12}>

                        <Typography variant="h3" sx={{ fontWeight: 500 }}>
                            Design Your Own
                            Engagement Ring
                        </Typography>
                        <Typography variant="inherit" sx={{ mb: 3, mt: 3 }} >
                            Design the engagement ring of your dreams with our online ring builder.
                        </Typography>
                        <Button className="btnCustom">START WITH A SETTING</Button>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default CustomizeDiamond;