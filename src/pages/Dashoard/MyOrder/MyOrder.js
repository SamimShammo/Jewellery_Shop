import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../hooks/useAuth';
import { CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import Button from '@restart/ui/esm/Button';
const MyOrder = () => {
    const { user, isLoading } = useAuth()
    const [orders, setOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/jewellery/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const handleDeleteUser = id => {
        const process = window.confirm('Are You Sure Cancel Order')
        if (process) {
            axios.delete(`http://localhost:5000/jewellery/order/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert('Successfully')
                        const remainingUsers = orders.filter(order => order._id !== id)
                        setOrder(remainingUsers)
                    }
                })

        }



    }

    return (
        <>
            {isLoading && <CircularProgress />}
            <Typography>
                My Total  Order {orders.length}
            </Typography>
            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell>Order Id</TableCell>
                            <TableCell>User Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Product Price</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Location</TableCell>

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
                                <TableCell align="left">{row?.price}</TableCell>
                                <TableCell align="left">{row?.pname}</TableCell>
                                <TableCell align="left">{row?.location}</TableCell>
                                <TableCell align="left"><Button className="btnCustom" onClick={() => handleDeleteUser(row._id)}>Delete</Button></TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer></>
    );
};

export default MyOrder;