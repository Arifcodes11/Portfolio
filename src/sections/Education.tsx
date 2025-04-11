import React from 'react';
import './Education.css';

const Education: React.FC = () => (
  <section className="education-section">
    <h2>Education</h2>

    <div className="education-card">
      <h3>Bachelor of Engineering in Computer Science</h3>
      <p><strong>Institution:</strong> Siddaganga Institute of Technology (SIT), Tumakuru</p>
      <p><strong>Status:</strong> Currently Pursuing</p>
    </div>

    <div className="education-card">
      <h3>Diploma</h3> 
      <p><strong>Institution:</strong> Sahyadri polytechnic thirthahalli</p> 
      <p><strong>Status:</strong> Completed</p>
    </div>

    <div className="education-card">
      <h3>Secondary Education (10th Grade)</h3>
      <p><strong>Institution:</strong> St mary's school ,Thirthahalli</p> 
      <p><strong>Status:</strong> Completed</p>
    </div>
  </section>
);

export default Education;
