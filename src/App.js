import './App.css';

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">MZ</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero">
        <h1>MUHAMMAD</h1>
        <h1 className="highlight">ZEESHAN</h1>
        <p className="tagline">Web Developer | Problem Solver | Lifelong Learner</p>

        <p className="learning-title">Currently learning:</p>
        <ul className="skills-list">
          <li>✅ HTML</li>
          <li>✅ CSS</li>
          <li>✅ JavaScript</li>
          <li>✅ React.js</li>
          <li>✅ Node.js & Express</li>
          <li>✅ MongoDB</li>
        </ul>

        <div className="stats">
          <div>
            <h2>5+</h2>
            <p>Projects Built</p>
          </div>
          <div>
            <h2>100+</h2>
            <p>Problems Solved</p>
          </div>
          <div>
            <h2>Always</h2>
            <p>Learning</p>
          </div>
        </div>

        <a className="cta-btn" href="https://github.com" target="_blank" rel="noopener noreferrer">
          Explore My Journey →
        </a>
      </div>
      <div className="about">
        <div className="info-bar">
          <div className="info-item">
            <span className="icon">📅</span>
            <p className="label">Age</p>
            <p className="value">21</p>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <p className="label">Location</p>
            <p className="value">lahore Pakistan</p>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <p className="label">Email</p>
            <p className="value">mzieshan01@gmail.com</p>
          </div>
          <div className="info-item">
            <span className="icon">🕐</span>
            <p className="label">Freelance</p>
            <p className="value">working at ML Bench</p>
          </div>
        </div>

        <div className="about-columns">
          <div className="education">
            <h3><span className="dot"></span> Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <p className="year">2022 - 2026</p>
                <h4>Bachelor in Information Technology</h4>
                <p className="school">Islamia university of bahawalpur</p>
                <p className="desc">Focused on Web Development, Algorithms and Data Structures.</p>
              </div>
              <div className="timeline-item">
                <p className="year">2020 - 2022</p>
                <h4>F.Sc (Pre-medical)</h4>
                <p className="school">govt.post graduate collage</p>
                <p className="desc">Major in English, Biology and Computer Science.</p>
              </div>
              <div className="timeline-item">
                <p className="year">2018 - 2020</p>
                <h4>Matriculation</h4>
                <p className="school">Centre of Excellence</p>
                <p className="desc">Science Group.</p>
              </div>
            </div>
          </div>

          <div className="goal">
            <h3><span className="dot"></span> My Goal</h3>
            <div className="goal-box">
              <p className="quote-mark">"</p>
              <p>My goal is to become a skilled full-stack developer and build products that solve real-world problems and make a positive impact in people's lives.</p>
            </div>
          </div>
        </div>

        <div className="tech-stack">
          <h3><span className="dot"></span> Tech I Work With</h3>
          <div className="tech-grid">
            <div className="tech-item">HTML</div>
            <div className="tech-item">CSS</div>
            <div className="tech-item">JavaScript</div>
            <div className="tech-item">React</div>
            <div className="tech-item">Node.js</div>
            <div className="tech-item">MongoDB</div>
            <div className="tech-item">Git</div>
            <div className="tech-item">Tailwind CSS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;