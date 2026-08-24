import React, { Component } from 'react';

/**
 * Experience Component - Class Component Example
 * Displays work experience with expandable details
 */
class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedIndex: null
    };
  }

  toggleExpand = (index) => {
    this.setState(prevState => ({
      expandedIndex: prevState.expandedIndex === index ? null : index
    }));
  };

  render() {
    const experiences = [
      {
        id: 1,
        title: "Java Full Stack Developer",
        company: "TCS (Tata Consultancy Services)",
        location: "Hyderabad, India",
        period: "Oct 2023 - Present",
        description: "Working as a Java Full Stack Developer, building and maintaining enterprise-grade applications using Spring Boot and React. Collaborating with cross-functional teams to deliver scalable solutions.",
        achievements: [
          "Developed RESTful APIs using Spring Boot with 95% test coverage",
          "Built responsive UI components using React.js and Redux for state management",
          "Implemented JWT-based authentication and authorization for microservices",
          "Optimized database queries reducing API response time by 30%",
          "Collaborated in Agile Scrum environment with JIRA for sprint planning"
        ],
        technologies: ["Java 17", "Spring Boot 3.x", "React.js", "Redux", "PostgreSQL", "Maven", "JWT", "Docker", "JIRA"]
      },
      {
        id: 2,
        title: "Full Stack Developer Intern",
        company: "TCS (Tata Consultancy Services)",
        location: "Hyderabad, India",
        period: "Jan 2023 - Sep 2023",
        description: "Completed intensive training program and worked on real-time projects using Java, Spring Boot, and React. Gained hands-on experience with SDLC, code reviews, and deployment pipelines.",
        achievements: [
          "Completed TCS NQT training with specialization in Java Full Stack",
          "Built capstone project: Employee Management System with Spring Boot & React",
          "Learned CI/CD pipelines using Jenkins and containerization with Docker",
          "Participated in code reviews and followed clean code principles",
          "Achieved 5-star rating in internal technical assessments"
        ],
        technologies: ["Java 11", "Spring Boot 2.x", "React.js", "HTML/CSS", "JavaScript", "MySQL", "Git", "Maven", "JUnit"]
      }
    ];

    const { expandedIndex } = this.state;

    return (
      <section className="resume-section experience-section">
        <h3 className="section-title">
          <span className="section-icon">💼</span>
          Work Experience
        </h3>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <article key={exp.id} className="experience-card">
              <div className="experience-header" onClick={() => this.toggleExpand(index)}>
                <div className="experience-meta">
                  <h4 className="job-title">{exp.title}</h4>
                  <p className="company">{exp.company}</p>
                </div>
                <div className="experience-meta-right">
                  <span className="period">{exp.period}</span>
                  <span className="location">📍 {exp.location}</span>
                  <span className="expand-indicator">
                    {expandedIndex === index ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              <div className={`experience-details ${expandedIndex === index ? 'expanded' : ''}`}>
                <p className="description">{exp.description}</p>
                <h5 className="achievements-title">Key Achievements:</h5>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="tech-stack">
                  <h5 className="tech-title">Technologies:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Experience;