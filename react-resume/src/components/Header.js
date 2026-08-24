import React, { Component } from 'react';

/**
 * Header Component - Class Component Example
 * Displays the name, title, and contact information
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  toggleExpand = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };

  render() {
    const { isExpanded } = this.state;

    return (
      <header className="resume-header">
        <div className="header-content">
          <div className="name-title">
            <h1 className="name">Machani Tejeshwar</h1>
            <h2 className="title">Java Full Stack Developer</h2>
            <p className="tagline">Building scalable enterprise applications with Java, Spring Boot & React</p>
         </div>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:machanitejeshwar@gmail.com">machanitejeshwar@gmail.com</a>
           </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <a href="tel:+918309258305">+91 8309258305</a>
           </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>India</span>
           </div>
            <div className="contact-item">
              <span className="contact-icon">🔗</span>
              <a href="https://www.linkedin.com/in/tejeshwar-machani-62577b21a/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
             </a>
           </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <a href="https://github.com/MachaniTejeshwar" target="_blank" rel="noopener noreferrer">
                GitHub Profile
             </a>
           </div>
         </div>

          <button className="expand-btn" onClick={this.toggleExpand} aria-expanded={isExpanded}>
            {isExpanded ? 'Show Less' : 'Show More'}
         </button>
       </div>
     </header>
    );
  }
}

export default Header;