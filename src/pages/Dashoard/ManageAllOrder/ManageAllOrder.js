import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import { CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const ManageAllOrder = () => {
    const { user, isLoading } = useAuth()
    const [orders, setOrder] = useState([])
    useEffect(() => {
        fetch(`https://arcane-sierra-22755.herokuapp.com/jewellery/totalOrder`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const handleDeleteUser = id => {
        const process = window.confirm('Are You Sure Cancel Order')
        if (process) {
            axios.delete(`https://arcane-sierra-22755.herokuapp.com/jewellery/order/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert('Successfully')
                        const remainingOrder = orders.filter(order => order._id !== id)
                        setOrder(remainingOrder)
                    }
                })

        }



    }

    return (
        <>
            {isLoading && <CircularProgress />}
            <Typography sx={{ mb: 2 }}>
                Total  Order {orders.length} <i class="fas fa-shopping-cart " style={{ marginRight: 6, fontSize: '15px' }}></i>
            </Typography>
            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                        <TableRow >

                            <TableCell>Order Id</TableCell>
                            <TableCell>User Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Product Price</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Cancel Order</TableCell>
                            <TableCell>Status </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >    <TableCell align="left">{row?._id}</TableCell>
                                <TableCell >
                                    {row.name}
                                </TableCell>

                                <TableCell align="left">{row?.email}</TableCell>
                                <TableCell align="left">${row?.price}</TableCell>
                                <TableCell align="left">{row?.pname}</TableCell>
                                <TableCell align="left">{row?.location}</TableCell>
                                <TableCell align="left"><Button className="btnCustomDelete" onClick={() => handleDeleteUser(row._id)}><i className="fas fa-times"></i>Cancel</Button></TableCell>
                                <TableCell align="left"><Button className="btnCustomPending">Pending</Button></TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer></>
    );
};

export default ManageAllOrder;