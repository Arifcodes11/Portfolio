import React from 'react';
import './Contact.css';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => (
  <section className="contact-section">
    <h2>Contact</h2>
    <ul>
      <li>
        <FaEnvelope /> Email: <a href="mailto:arif.dev.mail@gmail.com">arif.dev.mail@gmail.com</a>
      </li>
      <li>
        <FaInstagram /> Instagram: <a href="https://instagram.com/arif.codes" target="_blank" rel="noopener noreferrer">@arif.codes</a>
      </li>
      <li>
        <FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/arif-dev/" target="_blank" rel="noopener noreferrer">arif-dev</a>
      </li>
    </ul>
  </section>
);

export default Contact;
