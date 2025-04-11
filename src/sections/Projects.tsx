import React from 'react';
import './Projects.css';
import { FaUtensils, FaGraduationCap, FaNewspaper, FaGlobe } from 'react-icons/fa';

const Projects: React.FC = () => (
  <section className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <FaUtensils className="project-icon" />
        <h3>Nitrogen - Food Ordering Backend</h3>
        <p>
          A RESTful API built using Hono, Node.js, Prisma, and NeonDB to manage restaurants, menus, and orders. Follows clean architecture with a scalable design.
        </p>
      </div>
      <div className="project-card">
        <FaNewspaper className="project-icon" />
        <h3>Hacker News Clone</h3>
        <p>
          A backend system that includes authentication, post creation, likes, and comments using Hono, Prisma, and Supabase. Built for performance and clarity.
        </p>
      </div>
      <div className="project-card">
        <FaGraduationCap className="project-icon" />
        <h3>College Database & API</h3>
        <p>
          Developed a complete REST API for managing students, courses, and departments using Hono, Prisma ORM, and NeonDB for an academic database.
        </p>
      </div>
      <div className="project-card">
        <FaGlobe className="project-icon" />
        <h3>Portfolio Website</h3>
        <p>
          A personal portfolio site built with React, TypeScript, React Router, and hosted on Vercel — showcasing my skills, interests, and journey.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
