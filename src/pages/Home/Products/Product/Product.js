import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Image } from 'react-bootstrap';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import { useHistory } from 'react-router-dom';

const Product = (props) => {
    const { img, name, price, product_description, _id } = props?.product;
    const history = useHistory()
    const handlePurchase = () => {
        history.push(`/purchase/${_id}`)
    }
    return (
        <>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12} className="hoverBtn" sx={{ mt: 2, mb: 2 }} >

                <Image src={img} className="img-fluid image" />

                <Box sx={{ textAlign: 'center', mt: 2 }}>

                    <Typography sx={{ color: '#222', fontSize: "20px", fontWeight: 600, mb: 1 }}>
                        {name.slice(0, 25)}
                    </Typography>
                    <Typography sx={{ color: '#888', mb: 2 }}>
                        {product_description.slice(0, 70)}
                    </Typography>
                    <Typography sx={{ color: '#222', fontSize: '24px' }}>
                        ${price}
                    </Typography>
                    <Box className="middle ">
                        <Button className="btnCustom2 " onClick={() => handlePurchase(_id)}>PURCHASE</Button>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export default Product;