import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Notfound.css';


const Notfound = () => {
    const history = useHistory()
    const goBackHome = () => {
        history.push('/home')
    }
    return (
        <Container>
            <div className="not-found">
                <h1 className="error-404">4<span className="error">0</span>4</h1>
                <h2 className="page-not">THIS PAGE REQUESTED COULD NOT FOUND</h2>
                <button onClick={goBackHome} className="btn btn-regular">Go Back Home</button>
            </div>
        </Container>
    );
};

export default Notfound;