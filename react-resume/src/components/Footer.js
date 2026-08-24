import React from 'react';

/**
 * Footer Component - Functional Component Example
 * Displays footer with copyright and links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="resume-footer">
      <div className="footer-content">
        <p className="copyright">
          © {currentYear} Tejeshwar Machani. Java Full Stack Developer.
        </p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/tejeshwar-machani-62577b21a/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
         </a>
          <a href="https://github.com/MachaniTejeshwar" target="_blank" rel="noopener noreferrer">
            GitHub Profile
         </a>
          <a href="mailto:machanitejeshwar@gmail.com">
            Email Me
         </a>
        </div>
        <p className="footer-note">
          This resume is built as a React application demonstrating Class & Functional Components
        </p>
      </div>
    </footer>
  );
};

export default Footer;