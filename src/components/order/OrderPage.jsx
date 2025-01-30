import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

import './OrderPage.css';
import '../../App.css';

const OrderPage = () => {
    return (
        <div className="order-page">
        <Container fluid>
            <h1 className="text-center">Contact us today to reserve Gradient for your business!</h1>
            <Form className="px-5">
                <Form.Group controlId="formName">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Tell us more about what you're looking to use Gradient for</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>

                <button className="generic-btn" type="submit" style={{margin: "15px 0"}}>
                    Submit
                </button>
            </Form>
        </Container>
        </div>
    );
};

export default OrderPage;