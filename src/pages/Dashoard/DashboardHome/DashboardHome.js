import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



const DashboardHome = () => {
    const history = useHistory()
    const goBackHome = () => {
        history.push('/home')
    }
    return (
        <Container>
            <div className="not-found">

                <h2 className="page-not">Welcome To Dashboard</h2>
                <button onClick={goBackHome} className="btn btn-regular">Go Back Home</button>
            </div>
        </Container>
    );
};

export default DashboardHome;