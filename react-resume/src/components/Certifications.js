import React from 'react';

/**
 * Certifications Component - Functional Component Example
 * Displays professional certifications and achievements
 */
const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Oracle Certified Java Programmer",
      issuer: "Oracle University",
      date: "2023",
      credentialId: "OCJP-XXXXX-12345",
      verifyUrl: "https://education.oracle.com/"
    },
    {
      id: 2,
      name: "MongoDB Associate Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-DEV-XXXXX-67890",
      verifyUrl: "https://university.mongodb.com/"
    },
    {
      id: 3,
      name: "IBM Design Thinking",
      issuer: "IBM SkillsBuild",
      date: "2023",
      credentialId: "IBD-DESIGN-XXXXX-54321",
      verifyUrl: "https://www.ibm.com/skillsbuild/"
    }
  ];

  const achievements = [
    "📚 Completed Oracle Certified Java Programmer (OCJP) - 2023",
    "📚 Completed MongoDB Associate Developer Certification - 2022",
    "📚 IBM Design Thinking Badge - 2023",
    "💻 50+ coding challenges solved on platforms (LeetCode, HackerRank)",
    "📝 15+ technical blogs published on Medium and Dev.to",
    "🤝 Mentored 2 junior developers in Java and Spring Boot"
  ];

  return (
    <section className="resume-section certifications-section">
      <h3 className="section-title">
        <span className="section-icon">🏅</span>
        Certifications & Achievements
      </h3>

      <div className="certifications-list">
        {certifications.map((cert) => (
          <article key={cert.id} className="certification-card">
            <div className="cert-header">
              <h4 className="cert-name">{cert.name}</h4>
              <span className="cert-date">{cert.date}</span>
            </div>
            <p className="cert-issuer">{cert.issuer}</p>
            <div className="cert-meta">
              <span className="credential-id">ID: {cert.credentialId}</span>
              <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="verify-link">
                Verify →
             </a>
           </div>
          </article>
        ))}
      </div>

      <div className="achievements-list">
        <h4 className="achievements-title">Achievements & Recognition</h4>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;