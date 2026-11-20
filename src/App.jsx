import React, { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "WEB APPLICATION",
    title: "Interview Application Form",
    icon: "📋",
    description:
      "A professional interview application form that allows candidates to enter personal details, educational qualifications and job-related information.",
    technologies: ["React.js", "CSS", "JavaScript"],
  },
  {
    number: "02",
    category: "PERSONAL PROJECT",
    title: "Travel Bucket List",
    icon: "✈️",
    description:
      "An interactive travel application to explore dream destinations, save favourite places and maintain a personal list of future travel goals.",
    technologies: ["React.js", "CSS", "JavaScript"],
  },
  {
    number: "03",
    category: "REACT PROJECT",
    title: "React Gallery",
    icon: "🖼️",
    description:
      "A responsive image gallery built with React to display and explore beautiful image collections through an attractive interface.",
    technologies: ["React.js", "CSS", "JavaScript"],
  },
  {
    number: "04",
    category: "MERN STACK PROJECT",
    title: "SkillSphere Learning Platform",
    icon: "🎓",
    description:
      "A full-stack online learning platform featuring courses, educational videos, PDF study materials and course management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

const skills = [
  { name: "HTML5", icon: "🌐", level: "Advanced" },
  { name: "CSS3", icon: "🎨", level: "Advanced" },
  { name: "JavaScript", icon: "⚡", level: "Intermediate" },
  { name: "React.js", icon: "⚛️", level: "Intermediate" },
  { name: "Node.js", icon: "🟢", level: "Intermediate" },
  { name: "Express.js", icon: "🚀", level: "Intermediate" },
  { name: "Python", icon: "🐍", level: "Intermediate" },
  { name: "Bootstrap", icon: "💻", level: "Intermediate" },
];

const certifications = [
  "Generative AI - IBM SkillsBuild",
  "Project Management Fundamentals",
  "Job Application Essentials",
  "Artificial Intelligence Fundamentals",
  "Getting Started with AI",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects",
    "Certifications",
    "Contact",
  ];

  const scrollToSection = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });

    setActiveSection(section.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* NAVIGATION */}

      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={() => setActiveSection("home")}
        >
          Aliya<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map((link) => (
            <button
              key={link}
              className={
                activeSection === link.toLowerCase() ? "nav-active" : ""
              }
              onClick={() => scrollToSection(link)}
            >
              {link}
            </button>
          ))}
        </nav>
      </header>

      {/* HOME */}

      <section className="hero section" id="home">
        <div className="hero-content">
          <span className="small-heading">
            WELCOME TO MY PORTFOLIO
          </span>

          <h1>
            Hi, I'm <span>Aliya</span>
          </h1>

          <h2>
            A Passionate <span>Web Developer</span>
          </h2>

          <p>
            I'm a BCA student passionate about creating beautiful,
            responsive and user-friendly web applications.
            I love learning new technologies and transforming
            creative ideas into digital experiences.
          </p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection("Projects")}>
              Explore My Work ↗
            </button>

            <button
              className="outline-btn"
              onClick={() => scrollToSection("Contact")}
            >
              Contact Me
            </button>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/aliya7760372395-blip"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/aliya-aliya-58255a427/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="profile-circle">
            <span>A</span>
          </div>

          <div className="floating-card card-one">
            <span>⚛️</span> React Developer
          </div>

          <div className="floating-card card-two">
            <span>💻</span> Creative Thinker
          </div>

          <div className="floating-card card-three">
            <span>✨</span> Problem Solver
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="section about-section" id="about">
        <div className="section-title">
          <span>GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-container">
          <div className="about-image">
            <div className="about-avatar">A</div>
            <div className="image-decoration"></div>
          </div>

          <div className="about-content">
            <h3>Hello! I'm Aliya 👋</h3>

            <p>
              I am a Bachelor of Computer Applications (BCA) student
              at Aditya Institute of Management Studies and Research,
              Bengaluru.
            </p>

            <p>
              I am interested in web development and full-stack
              development. I enjoy building responsive websites
              and interactive applications using modern technologies.
            </p>

            <p>
              My goal is to continuously improve my programming
              skills, gain practical experience and build
              innovative digital solutions.
            </p>

            <div className="about-details">
              <div>
                <strong>Name:</strong>
                <span>Aliya</span>
              </div>

              <div>
                <strong>Degree:</strong>
                <span>Bachelor of Computer Applications</span>
              </div>

              <div>
                <strong>Location:</strong>
                <span>Bengaluru, Karnataka</span>
              </div>

              <div>
                <strong>Interest:</strong>
                <span>Web Development</span>
              </div>
            </div>

            <a className="primary-btn" href="#contact">
              Let's Connect ↗
            </a>
          </div>
        </div>
      </section>

      {/* EDUCATION */}

      <section className="section education-section" id="education">
        <div className="section-title">
          <span>MY ACADEMIC JOURNEY</span>
          <h2>My <span>Education</span></h2>
        </div>

        <div className="timeline">

          <div className="timeline-card">
            <span className="timeline-icon">🎓</span>
            <span className="timeline-date">2024 – 2027 (Expected)</span>
            <h3>Bachelor of Computer Applications</h3>
            <h4>Aditya Institute of Management Studies and Research</h4>
            <p>Bengaluru, Karnataka</p>
            <p>
              Learning programming, software development,
              database management and web technologies.
            </p>
          </div>

          <div className="timeline-card">
            <span className="timeline-icon">📚</span>
            <h3>Pre-University Course (PUC)</h3>
            <h4>United Christian PU College</h4>
            <p>Higher Secondary Education</p>
          </div>

          <div className="timeline-card">
            <span className="timeline-icon">🏫</span>
            <h3>SSLC</h3>
            <h4>Dr. A. P. J. Abdul Kalam English School</h4>
            <p>Secondary School Education</p>
          </div>

        </div>
      </section>

      {/* SKILLS */}

      <section className="section skills-section" id="skills">
        <div className="section-title">
          <span>WHAT I WORK WITH</span>
          <h2>Technical <span>Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section className="section projects-section" id="projects">
        <div className="section-title">
          <span>MY CREATIVE WORK</span>
          <h2>Featured <span>Projects</span></h2>
          <p>
            Here are some applications and websites I have worked on.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-icon">
                  {project.icon}
                </span>
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a href="#contact" className="project-link">
                Discuss Project <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}

      <section
        className="section certifications-section"
        id="certifications"
      >
        <div className="section-title">
          <span>CONTINUOUS LEARNING</span>
          <h2>My <span>Certifications</span></h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => (
            <div className="certificate-card" key={certificate}>
              <div className="certificate-icon">🏆</div>

              <div>
                <span className="certificate-number">
                  CERTIFICATION 0{index + 1}
                </span>

                <h3>{certificate}</h3>

                <p>IBM SkillsBuild</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}

      <section className="section contact-section" id="contact">
        <div className="section-title">
          <span>LET'S WORK TOGETHER</span>
          <h2>Get In <span>Touch</span></h2>
          <p>
            Have an opportunity or project in mind?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-card">
            <span>📧</span>
            <h3>Email</h3>
            <a href="mailto:aliya7760372395@gmail.com">
              aliya7760372395@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <span>📱</span>
            <h3>Phone</h3>
            <a href="tel:+919972134791">
              +91 9972134791
            </a>
          </div>

          <div className="contact-card">
            <span>📍</span>
            <h3>Location</h3>
            <p>Bengaluru, Karnataka, India</p>
          </div>
        </div>

        <div className="contact-socials">
          <a
            href="https://www.linkedin.com/in/aliya-aliya-58255a427/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/aliya7760372395-blip"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a href="mailto:aliya7760372395@gmail.com">
            Email Me ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <a href="#home" className="footer-logo">
          Aliya<span>.</span>
        </a>

        <p>
          Designed & Developed with 💜 by Aliya
        </p>

        <p>© 2026 Aliya. All Rights Reserved.</p>

        <a href="#home" className="back-top">
          Back to Top ↑
        </a>
      </footer>

    </div>
  );
}

export default App;