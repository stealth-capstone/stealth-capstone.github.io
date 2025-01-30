import {React, useState} from 'react';
import { Container, Form } from 'react-bootstrap';

import { getDatabase, ref, child, push } from "firebase/database";

import './PageComponents.css';

function MailingList() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to send the email to your server or API
        setSubmitted(true);
        const db = getDatabase();
        const mailingListRef = ref(db, 'mailing_list');
        push(mailingListRef, {
            email: email,
            timestamp: new Date().toISOString()
        });

        setEmail(''); // Clear the input field after submission
    };

    return (
        <Container className="fade-in generic-container mailing-list-container">
            <h2>Join Our Mailing List</h2>
            {submitted ? (
                <p>Thank you for subscribing!</p>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail" className="d-inline-block">
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                            className="email-input"
                        />
                    </Form.Group>
                    <button type="submit" className="generic-btn mx-3">
                        Subscribe
                    </button>
                </Form>
            )}
        </Container>
    )
}

export default MailingList;
