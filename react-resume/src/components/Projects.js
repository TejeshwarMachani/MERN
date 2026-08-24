import React, { Component } from 'react';

/**
 * Projects Component - Class Component Example
 * Displays featured projects with details and links
 */
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null
    };
  }

  selectProject = (project) => {
    this.setState({ selectedProject: project });
  };

  closeModal = () => {
    this.setState({ selectedProject: null });
  };

  render() {
    const projects = [
      {
        id: 1,
        name: "Employee Management System",
        description: "Full-stack Java application for managing employee records, departments, and roles. Features CRUD operations, authentication, and responsive UI.",
        longDescription: "A comprehensive employee management system built with Spring Boot 3.x and React.js. Features include employee record management (CRUD operations), department management, role-based access control, authentication with Spring Security and JWT, responsive UI using React.js and Redux, and PostgreSQL database integration. Built following clean code principles and includes unit tests with JUnit 5. Project demonstrates REST API design, exception handling, and Spring Boot best practices.",
        image: "📋",
        technologies: ["Java 17", "Spring Boot 3.x", "React.js", "Redux", "PostgreSQL", "Maven", "JWT", "Docker"],
        github: "https://github.com/MachaniTejeshwar/employee-management-system",
        demo: "N/A",
        featured: true
      },
      {
        id: 2,
        name: "Online Banking System",
        description: "Secure banking application with account management, fund transfers, and transaction history. Implemented JWT authentication and role-based access control.",
        longDescription: "A full-stack banking application built with Spring Boot 3.x and React.js. Features include user registration and authentication with Spring Security and BCrypt password encoding, account balance inquiries, fund transfers between accounts with transaction logging, transaction history with date filtering and search, role-based access control (Admin/User), and RESTful API design with proper error handling. Project demonstrates secure coding practices, data validation, and microservice architecture concepts.",
        image: "💳",
        technologies: ["Java 17", "Spring Boot 3.x", "React.js", "PostgreSQL", "Spring Security", "JWT", "BCrypt", "Maven"],
        github: "https://github.com/MachaniTejeshwar/online-banking-system",
        demo: "N/A",
        featured: true
      }
    ];

    const { selectedProject } = this.state;

    return (
      <>
        <section className="resume-section projects-section">
          <h3 className="section-title">
            <span className="section-icon">🚀</span>
            Featured Projects
          </h3>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card" onClick={() => this.selectProject(project)}>
                <div className="project-image">{project.image}</div>
                <div className="project-content">
                  <h4 className="project-name">{project.name}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={this.closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={this.closeModal}>&times;</button>
              <div className="modal-header">
                <span className="modal-icon">{selectedProject.image}</span>
                <h3>{selectedProject.name}</h3>
              </div>
              <p className="modal-description">{selectedProject.longDescription}</p>
              <div className="modal-tech">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="modal-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Projects;