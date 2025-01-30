import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import './PageComponents.css';

import aryanHeadshot from '../../assets/headshots/aryan.jpeg';
import dhruvHeadshot from '../../assets/headshots/dhruv.jpeg';
import midoHeadshot from '../../assets/headshots/mido.jpeg';
import sakshamHeadshot from '../../assets/headshots/saksham.jpeg';

import MailingList from './MailingList';

const teamMembers = [
    {
        name: "Saksham Ahuja",
        description: "Prev. Hardware Design @ Arista Networks",
        image: sakshamHeadshot,
        linkedIn: "https://www.linkedin.com/in/ahujas7/",
    },
    {
        name: "Mohamed Goha",
        description: "Prev. Exteriors @ Tesla",
        image: midoHeadshot,
        linkedIn: "https://www.linkedin.com/in/mohamed-goha/",
    },
    {
        name: "Aryan Kalia",
        description: "Prev. Embedded AI/ML @ Apple, Tesla",
        image: aryanHeadshot,
        linkedIn: "https://www.linkedin.com/in/aryan-kalia/",
    },
    {
        name: "Dhruv Upadhyay",
        description: "Prev. Embedded Software @ Figure, Skydio",
        image: dhruvHeadshot,
        linkedIn: "https://www.linkedin.com/in/upadhyaydhruv/",
    },
];

const TeamCard = ({ member }) => (
    <Card bg="dark" text="light" className="team-card">
        <img src={member.image} alt={`${member.name}'s headshot`} className="team-card-image" />
        <Card.Body className="team-card-body">
            <Card.Title>
                {member.name}
            </Card.Title>
            <Card.Text>
                {member.description}
            </Card.Text>
            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="linkedin-icon" />
            </a>
        </Card.Body>
    </Card>
);

const TeamPage = () => (
    <Container className="fade-in generic-container">
        <Row style={{ padding: "0 10px" }}>
        {teamMembers.map((member, index) => (
            <Col xs={12} md={3} key={index}>
                    <TeamCard  key={index} member={member} />
            </Col>
        ))}
        </Row>
    </Container>
);

export default TeamPage;
