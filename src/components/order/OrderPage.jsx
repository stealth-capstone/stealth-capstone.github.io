import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { getDatabase, ref, push } from "firebase/database";

import './OrderPage.css';
import '../../App.css';

const OrderPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('formName'),
            phoneNumber: formData.get('formPhoneNumber'),
            email: formData.get('formEmail'),
            message: formData.get('formMessage'),
        };

        const db = getDatabase();
        const orderRef = ref(db, 'orders');
        push(orderRef, data);
        

        event.target.reset();
        setSubmitted(true);
    };

    return (
        <div className="order-page">
        <Container fluid>
            <h1 className="text-center">Contact us today to reserve Gradient for your business!</h1>
            <Form className="px-5" onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control type="text" name="formName" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name="formPhoneNumber" placeholder="Enter your phone number" required />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="formEmail" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Tell us more about what you're looking to use Gradient for</Form.Label>
                    <Form.Control as="textarea" name="formMessage" rows={3} placeholder="Enter your message" required />
                </Form.Group>

                <button className="generic-btn" type="submit" style={{margin: "15px 0"}}>
                    Submit
                </button>
            </Form>
            {submitted && <p className="text-center">Thank you! Your form has been submitted successfully. We'll be in touch shortly.</p>}
        </Container>
        </div>
    );
};

export default OrderPage;