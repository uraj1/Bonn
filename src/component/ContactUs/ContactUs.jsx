import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling

const teamMembers = [
  {
    name: 'Suyash Mishra',
    designation: 'Project Manager',
    email: 'suyash@example.com',
    image: './images/suyash.jpg', 
  },
  {
    name: 'Umang Raj',
    designation: 'Lead Developer-Frontend',
    email: 'umang@example.com',
    image: './images/umang.jpg',
  },
  {
    name: 'Mohit Gupta',
    designation: 'UI/UX Designer',
    email: 'mohit@example.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOyweUERP_PkAHflHnp-jMxGTx_D-DD638A&s',
  },
  {
    name: 'Aakash Khanna',
    designation: 'BackEnd Engineer',
    email: 'aakash@example.com',
    image: './images/aakash.jpg',
  },
  {
    name: 'Raj Gupta',
    designation: 'Data Analytics',
    email: 'rajgpt@example.com',
    image: './images/raj.jpg',
  },
  {
    name: 'Rahul',
    designation: 'Frontend Developer',
    email: 'rahul@example.com',
    image: './images/rahul.jpg',
  },
];

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3>{member.name}</h3>
            <p>{member.designation}</p>
            <p>Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
          </div>
        ))}
      </div>
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <p>Email: <a href="suyashmishra@gmail.com">suyashmishra@gmail.com</a></p>
        <p>Phone: +91 (700) 429210</p>
      </div>
    </div>
  );
};

export default ContactUs;
