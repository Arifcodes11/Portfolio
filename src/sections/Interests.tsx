import React from 'react';
import './Interests.css';
import { FaLaptopCode, FaCloud, FaReact } from 'react-icons/fa';

const Interests: React.FC = () => (
  <section className="interests-section">
    <h2>Interests</h2>
    <div className="interests-cards">
      <div className="interest-card">
        <FaLaptopCode className="interest-icon" />
        <h3>Full Stack Development</h3>
        <p>
          I love building end-to-end applications, from designing APIs to creating responsive user interfaces using technologies like React, Node.js, and Prisma.
        </p>
      </div>
      <div className="interest-card">
        <FaReact className="interest-icon" />
        <h3>Frontend with React</h3>
        <p>
          I'm deeply interested in building smooth, dynamic, and modern frontends using React, TypeScript, and frameworks like Vite and Tailwind CSS.
        </p>
      </div>
      <div className="interest-card">
        <FaCloud className="interest-icon" />
        <h3>Cloud & DevOps</h3>
        <p>
          Exploring CI/CD, containerization with Docker, and cloud platforms like Azure is something I’m actively learning and integrating into my projects.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;
