import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <div className="resume-container">
        <Header />
        <main className="resume-main">
          <div className="resume-sidebar">
            <Summary />
            <Skills />
            <Education />
            <Certifications />
          </div>
          <div className="resume-content">
            <Experience />
            <Projects />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;