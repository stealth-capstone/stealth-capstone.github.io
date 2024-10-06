import {React, useState} from 'react';
import './LandingPage.css';

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
        setEmail(''); // Clear the input field after submission
    };

    return (
        <div className="mailing-list-container">
            <h2>Join Our Mailing List</h2>
            {submitted ? (
                <p>Thank you for subscribing!</p>
            ) : (
                <form onSubmit={handleSubmit} className="mailing-list-form">
                    <input
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="email-input"
                    />
                    <button type="submit" className="submit-button">
                        Subscribe
                    </button>
                </form>
            )}
        </div>

    )
}

export default MailingList;
