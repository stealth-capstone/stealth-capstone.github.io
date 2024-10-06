import React from 'react';
import './LandingPage.css';

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
    <div className="team-card">
        <img src={member.image} alt={`${member.name}'s headshot`} className="team-image" />
        <h3>{member.name}</h3>
        <p>{member.description}</p>
        <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="linkedin-icon" />
        </a>
    </div>
);


const TeamPage = () => (
    <>
    <div className="team-container fade-in mailing-list-container">
        <div className="card-container">
            {teamMembers.map((member, index) => (
                <TeamCard key={index} member={member} />
            ))}
        </div>
    </div>
    <MailingList />
    </>
);

export default TeamPage;
