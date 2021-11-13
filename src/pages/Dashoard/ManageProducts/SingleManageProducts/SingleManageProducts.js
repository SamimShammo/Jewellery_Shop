import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Image } from 'react-bootstrap';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
const SingleManageProducts = (props) => {
    const { img, name, price, product_description, size, _id } = props?.product;
    const { handleDeleteUser } = props
    const desCrip = product_description.slice(0, 70)
    const nameResi = name.slice(0, 20)


    return (
        <>
            <Grid item xl={2} lg={4} md={2} sm={3} xs={4} className="" sx={{ mt: 2, mb: 2, display: 'flex', alignItems: 'center' }}>

                <Box>
                    <Image src={img} className="image" style={{ height: '100%' }} />
                </Box>

                <Box sx={{ ml: 2 }}>
                    <Typography sx={{ color: '#222', fontSize: "14px", fontWeight: 600, mb: 1 }}>
                        {nameResi}
                    </Typography>
                    <Typography sx={{ color: '#888', fontSize: "14px" }}>
                        {desCrip}
                    </Typography>
                    <Typography sx={{ color: '#222', fontSize: '15px' }}>
                        ${price}
                    </Typography>
                    <Box className="">
                        <Button className="btnCustom2" onClick={() => handleDeleteUser(_id)} >Remove</Button>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export default SingleManageProducts;