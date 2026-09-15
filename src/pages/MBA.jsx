import Header from '../components/Header';
import Footer from '../components/Footer';

const MBA = () => (
  <>
    <Header />
    <main>
      <section className="inner-hero institute-inner-hero" style={{background: 'var(--dark-bg) url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80) center/cover no-repeat'}}>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">MASTER OF BUSINESS ADMINISTRATION</p>
            <h1>MBA<br /><span>Develop strategic thinking and leadership skills.</span></h1>
            <p>Build the confidence, expertise, and network to lead organizations and drive business growth in India's dynamic economy.</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div className="intro-image">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=700&fit=crop" alt="Indian business students in discussion" />
          </div>
          <div className="intro-copy">
            <p className="eyebrow">PROGRAMME OVERVIEW</p>
            <h2>Lead with confidence.</h2>
            <p>Our MBA programme transforms ambitious professionals into strategic leaders. Through case studies, industry projects, and experiential learning, students develop the skills to navigate complex business challenges in India's rapidly evolving market.</p>
            <p>Learn from experienced faculty, connect with industry leaders, and build a network that will support your career growth for years to come.</p>
          </div>
        </div>
      </section>

      <section className="course-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">SPECIALIZATIONS</p>
            <h2>Focus your expertise</h2>
            <p>Industry-aligned concentrations for career advancement.</p>
          </div>
          <div className="course-grid">
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-chart-line"></i></div>
              <span className="course-code">FIN</span>
              <h3>Finance</h3>
              <p>Financial management, investment analysis, and corporate finance.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-bullhorn"></i></div>
              <span className="course-code">MKT</span>
              <h3>Marketing</h3>
              <p>Brand management, digital marketing, and consumer behavior.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-users-cog"></i></div>
              <span className="course-code">HR</span>
              <h3>Human Resources</h3>
              <p>Talent management, organizational behavior, and HR strategy.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-cogs"></i></div>
              <span className="course-code">OPS</span>
              <h3>Operations</h3>
              <p>Supply chain management, logistics, and process optimization.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="why-section" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container why-grid">
          <div>
            <p className="eyebrow">THE ABHINOVA DIFFERENCE</p>
            <h2>More than a degree.<br /><span>A launchpad for life.</span></h2>
            <p>We pair rigorous teaching with the experiences that help students become thoughtful professionals, inventive problem-solvers, and responsible citizens.</p>
            <a className="hero-btn primary-btn" href="/why-choose-us">Why choose us</a>
          </div>
          <div className="why-list">
            <div>
              <i className="fas fa-users"></i>
              <span><strong>Mentors who know your name</strong><small>Personal guidance from a faculty that invests in your growth.</small></span>
            </div>
            <div>
              <i className="fas fa-building-columns"></i>
              <span><strong>Learning beyond the classroom</strong><small>Labs, projects, clubs, and industry exposure that make ideas tangible.</small></span>
            </div>
            <div>
              <i className="fas fa-seedling"></i>
              <span><strong>A campus built for confidence</strong><small>Inclusive spaces where every student can find their voice.</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="course-details">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">PROGRAMME DETAILS</p>
            <h2>What you'll learn</h2>
          </div>
          <div className="course-detail-grid">
            <div className="detail-card">
              <h3>Year 1</h3>
              <ul>
                <li>Core Business Fundamentals</li>
                <li>Leadership & Ethics</li>
                <li>Quantitative Methods</li>
                <li>Business Communication</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Year 2</h3>
              <ul>
                <li>Specialization Courses</li>
                <li>Strategic Management</li>
                <li>Industry Projects</li>
                <li>International Business</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Capstone</h3>
              <ul>
                <li>Summer Internship</li>
                <li>Live Consulting Projects</li>
                <li>Business Plan Competition</li>
                <li>Placement Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
    </main>
    <Footer />
  </>
);

export default MBA;
