import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <h2>Welcome To Detail: {serviceId}</h2>
                <Button onClick={() => navigate("/checkout")}>Check Out</Button>
            </Container>
        </>
    );
};

export default ServiceDetail;