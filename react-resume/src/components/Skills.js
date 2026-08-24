import React, { useState } from 'react';

/**
 * Skills Component - Functional Component with Hooks Example
 * Displays technical skills organized by category with proficiency levels
 */
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    programming: {
      label: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript (ES6+)', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'SQL', level: 85 },
        { name: 'HTML/CSS', level: 85 }
      ]
    },
    backend: {
      label: 'Backend Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Spring Boot', level: 90 },
        { name: 'Spring Framework', level: 85 },
        { name: 'Hibernate/JPA', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Microservices', level: 75 },
        { name: 'JWT Authentication', level: 80 },
        { name: 'Maven/Gradle', level: 85 }
      ]
    },
    frontend: {
      label: 'Frontend Technologies',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Redux', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'HTML5', level: 85 },
        { name: 'CSS3', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'VITE', level: 75 }
      ]
    },
    database: {
      label: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'Redis', level: 65 },
        { name: 'JDBC', level: 80 }
      ]
    },
    tools: {
      label: 'Tools & DevOps',
      icon: '🔧',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Maven', level: 85 },
        { name: 'IntelliJ IDEA', level: 90 },
        { name: 'VS Code', level: 85 },
        { name: 'JIRA', level: 80 },
        { name: 'Jenkins', level: 70 },
        { name: 'Postman', level: 80 }
      ]
    }
  };

  const categories = Object.keys(skillCategories);
  const allSkills = Object.values(skillCategories).flatMap(cat => cat.skills);

  const filteredSkills = activeCategory === 'all'
    ? allSkills
    : skillCategories[activeCategory]?.skills || [];

  return (
    <section className="resume-section skills-section">
      <h3 className="section-title">
        <span className="section-icon">⚡</span>
        Technical Skills
      </h3>

      <div className="skill-categories">
        <button className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>
          All Skills
         </button>
        {categories.map((cat) => (
          <button key={cat} className={`category-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>
            {skillCategories[cat].icon} {skillCategories[cat].label}
         </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;