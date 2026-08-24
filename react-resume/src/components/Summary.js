import React from 'react';

/**
 * Summary Component - Functional Component Example
 * Displays professional summary/profile
 */
const Summary = () => {
  const summaryText = `Java Full Stack Developer with hands-on experience in building, testing, and deploying enterprise web applications using Core Java, Advanced Java, Spring Boot, and React.js. Strong foundation in Data Structures & Algorithms, OOP concepts, and modern web technologies. Eager to contribute to scalable, high-performance systems while continuously learning and growing in a collaborative team environment.`;

  const highlights = [
    "Java Full Stack Developer (Spring Boot + React)",
    "Strong in DSA, OOP, and system design fundamentals",
    "REST APIs, Microservices, JWT Auth, JPA/Hibernate",
    "Tools: Git, Maven, Docker, JIRA, VS Code, IntelliJ IDEA",
    "Soft skills: Team collaboration, adaptability, problem-solving"
  ];

  return (
    <section className="resume-section summary-section">
      <h3 className="section-title">
        <span className="section-icon">👤</span>
        Professional Summary
      </h3>
      <p className="summary-text">{summaryText}</p>
      <ul className="highlights-list">
        {highlights.map((highlight, index) => (
          <li key={index} className="highlight-item">
            <span className="bullet">▸</span>
            {highlight}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Summary;