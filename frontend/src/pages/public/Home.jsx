import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <header className="public-nav">

        <div className="school-logo">

          <div className="logo-icon">
            🏫
          </div>

          <div className="school-brand">
            <strong>Vidyapeeth Coaching</strong>
            <small>And Foundation</small>
          </div>

        </div>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#facilities">Facilities</a>

          <Link className="nav-login" to="/login">
            Portal Login →
          </Link>
        </nav>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero-section" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-shape hero-shape-one"></div>
        <div className="hero-shape hero-shape-two"></div>

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            WELCOME TO VIDYAPEETH
          </div>

          <h1>
            Vidyapeeth Coaching And Foundation
            <br />
            <span>Martinganj Martinganj</span>
          </h1>

          <p className="hero-location">
            Learning Today
            <br />
            <strong>Leading Tomorrow</strong>
          </p>

          <p className="hero-description">
            A place where knowledge meets opportunity. We are committed
            to quality education, discipline, character building and
            preparing every student for a brighter future.
          </p>

          <div className="hero-buttons">

            <Link className="primary-btn" to="/login">
              Open School Portal
              <span>→</span>
            </Link>

            <a className="secondary-btn" href="#about">
              Discover Our School
              <span>↓</span>
            </a>

          </div>

          <div className="hero-trust">

            <div className="trust-item">
              <strong>100%</strong>
              <span>Focus on Students</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>Smart</strong>
              <span>School Management</span>
            </div>

          </div>

        </div>


        <div className="hero-bottom">

          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-circle">
            ↓
          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-box">
            <div className="stat-icon">📚</div>
            <div>
              <strong>Quality</strong>
              <span>Education</span>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">👨‍🏫</div>
            <div>
              <strong>Expert</strong>
              <span>Teachers</span>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">🎯</div>
            <div>
              <strong>Student</strong>
              <span>Focused</span>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">💻</div>
            <div>
              <strong>Digital</strong>
              <span>Management</span>
            </div>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-section" id="about">

        <div className="about-image-wrapper">

          <img
            src="/school.jpg"
            alt="Vidyapeeth Coaching And Foundation"
            className="about-image"
          />

          <div className="image-badge">

            <span className="badge-number">01</span>

            <div>
              <strong>Our Campus</strong>
              <small>Martinganj, Azamgarh</small>
            </div>

          </div>

        </div>


        <div className="about-content">

          <span className="section-label">
            ABOUT OUR SCHOOL
          </span>

          <h2>
            Education that builds
            <span> confidence & character.</span>
          </h2>

          <p>
            Vidyapeeth Coaching And Foundation is dedicated to creating
            an environment where students can learn, grow and discover
            their potential.
          </p>

          <p>
            Our focus goes beyond textbooks. We believe in discipline,
            confidence, creativity, knowledge and developing the skills
            students need for their future.
          </p>


          <div className="about-points">

            <div>
              <span>✓</span>
              <p>Student-focused learning</p>
            </div>

            <div>
              <span>✓</span>
              <p>Dedicated teaching environment</p>
            </div>

            <div>
              <span>✓</span>
              <p>Strong academic foundation</p>
            </div>

            <div>
              <span>✓</span>
              <p>Modern school management</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= ACADEMICS ================= */}

      <section className="academics-section" id="academics">

        <div className="section-heading">

          <span className="section-label">
            WHAT WE PROVIDE
          </span>

          <h2>
            Everything students need
            <br />
            <span>to move forward.</span>
          </h2>

          <p>
            A balanced educational environment designed to support
            academic growth and personal development.
          </p>

        </div>


        <div className="academic-grid">

          <div className="academic-card">

            <div className="card-number">01</div>

            <div className="academic-icon">
              📖
            </div>

            <h3>Strong Academics</h3>

            <p>
              Structured learning and focused academic preparation
              to help students build a strong foundation.
            </p>

            <span className="card-arrow">↗</span>

          </div>


          <div className="academic-card featured-card">

            <div className="card-number">02</div>

            <div className="academic-icon">
              👨‍🏫
            </div>

            <h3>Dedicated Teachers</h3>

            <p>
              Teachers who guide students, encourage questions and
              help them achieve their academic goals.
            </p>

            <span className="card-arrow">↗</span>

          </div>


          <div className="academic-card">

            <div className="card-number">03</div>

            <div className="academic-icon">
              🧠
            </div>

            <h3>Student Development</h3>

            <p>
              Encouraging confidence, discipline, communication
              skills and positive thinking.
            </p>

            <span className="card-arrow">↗</span>

          </div>


          <div className="academic-card">

            <div className="card-number">04</div>

            <div className="academic-icon">
              💻
            </div>

            <h3>Digital Campus</h3>

            <p>
              School administration and student information managed
              through a modern digital platform.
            </p>

            <span className="card-arrow">↗</span>

          </div>

        </div>

      </section>


      {/* ================= FACILITIES ================= */}

      <section className="facilities-section" id="facilities">

        <div className="facilities-content">

          <span className="section-label light">
            OUR CAMPUS
          </span>

          <h2>
            A place where
            <br />
            <span>students love to learn.</span>
          </h2>

          <p>
            Our campus provides a welcoming environment where students
            can concentrate on learning, interact with teachers and
            develop confidence.
          </p>

          <div className="facility-list">

            <div>
              <span>✓</span>
              <p>Clean learning environment</p>
            </div>

            <div>
              <span>✓</span>
              <p>Safe and student-friendly campus</p>
            </div>

            <div>
              <span>✓</span>
              <p>Activity and play areas</p>
            </div>

          </div>

        </div>


        <div className="facilities-image">

          <img
            src="/school.jpg"
            alt="Vidyapeeth Campus"
          />

          <div className="facility-overlay-card">

            <span>VIDYAPEETH</span>

            <strong>
              Learn.
              <br />
              Grow.
              <br />
              Lead.
            </strong>

          </div>

        </div>

      </section>


      {/* ================= DIGITAL PORTAL ================= */}

      <section className="portal-section">

        <div className="portal-content">

          <span className="section-label">
            DIGITAL SCHOOL
          </span>

          <h2>
            Your school,
            <br />
            <span>now at your fingertips.</span>
          </h2>

          <p>
            Manage school activities, students, teachers, attendance,
            fees, marks and records through one convenient school portal.
          </p>

          <Link className="portal-btn" to="/login">
            Enter School Portal
            <span>→</span>
          </Link>

        </div>


        <div className="portal-circles">

          <div className="portal-circle circle-one">
            <span>STUDENTS</span>
          </div>

          <div className="portal-circle circle-two">
            <span>TEACHERS</span>
          </div>

          <div className="portal-circle circle-three">
            <span>ADMIN</span>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div>

          <span>
            VIDYAPEETH COACHING AND FOUNDATION
          </span>

          <h2>
            Let's build a brighter
            <br />
            future together.
          </h2>

        </div>

        <Link to="/login" className="cta-button">
          Open School Portal
          <span>→</span>
        </Link>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="footer-logo">
              🏫
            </div>

            <h3>
              Vidyapeeth Coaching
              <br />
              And Foundation
            </h3>

            <p>
              Martinganj, Azamgarh
            </p>

          </div>


          <div className="footer-links">

            <h4>Explore</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#facilities">Facilities</a>

          </div>


          <div className="footer-links">

            <h4>School Portal</h4>

            <Link to="/login">Portal Login</Link>
            <a href="#about">About School</a>
            <a href="#facilities">Campus</a>

          </div>


          <div className="footer-contact">

            <h4>Visit Us</h4>

            <p>
              📍 Martinganj, Azamgarh
              <br />
              Uttar Pradesh, India
            </p>

            <p>
              🎓 Learn • Grow • Lead
            </p>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Vidyapeeth Coaching And Foundation.
            All rights reserved.
          </span>

          <span>
            School Management Portal
          </span>

        </div>

      </footer>

    </div>
  );
}