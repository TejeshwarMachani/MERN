import React from 'react';

/**
 * Education Component - Functional Component Example
 * Displays educational background
 */
const Education = () => {
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Jawaharlal Nehru Technological University (JNTU)",
      location: "Hyderabad, India",
      period: "2019 - 2023",
      grade: "CGPA: 8.2 / 10.0",
      achievements: [
        "Specialization in Full Stack Development",
        "Final Year Project: Employee Management System (Spring Boot + React)",
        "Active member of Computer Society and Technical Club",
        "Completed multiple certifications in Java and Web Development"
      ]
    },
    {
      id: 2,
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      location: "Hyderabad, India",
      period: "2017 - 2019",
      grade: "Percentage: 93.5%",
      achievements: [
        "Mathematics, Physics, Chemistry (MPC)",
        "Consistently ranked in top 5% of class",
        "Participated in State-level Science Olympiad"
      ]
    }
  ];

  return (
    <section className="resume-section education-section">
      <h3 className="section-title">
        <span className="section-icon">🎓</span>
        Education
      </h3>
      <div className="education-list">
        {education.map((edu) => (
          <article key={edu.id} className="education-card">
            <div className="education-header">
              <div className="education-main">
                <h4 className="degree">{edu.degree}</h4>
                <p className="institution">{edu.institution}</p>
              </div>
              <div className="education-meta">
                <span className="period">{edu.period}</span>
                <span className="location">📍 {edu.location}</span>
              </div>
            </div>
            <p className="grade">{edu.grade}</p>
            <ul className="education-achievements">
              {edu.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;