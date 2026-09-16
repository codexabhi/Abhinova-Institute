import Header from '../components/Header';
import Footer from '../components/Footer';

const BCA = () => (
  <>
    <Header />
    <main>
      <section className="inner-hero institute-inner-hero" style={{background: 'var(--dark-bg) url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80) center/cover no-repeat'}}>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">BACHELOR OF COMPUTER APPLICATIONS</p>
            <h1>BCA<br /><span>Learn software development and modern computing.</span></h1>
            <p>Master programming, databases, web technologies, and software engineering for a career in India's thriving IT industry.</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div className="intro-image">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=700&fit=crop" alt="Indian students learning programming" />
          </div>
          <div className="intro-copy">
            <p className="eyebrow">PROGRAMME OVERVIEW</p>
            <h2>Code your future.</h2>
            <p>Our BCA programme prepares students for the dynamic world of technology. From foundational programming to advanced software development, we teach the skills that employers need in India's booming tech sector.</p>
            <p>Learn to build applications, manage databases, design websites, and solve real-world problems through code. Our curriculum aligns with industry standards and emerging technologies.</p>
          </div>
        </div>
      </section>

      <section className="course-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">CORE SKILLS</p>
            <h2>What you'll master</h2>
            <p>Technical competencies for a successful IT career.</p>
          </div>
          <div className="course-grid">
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-code"></i></div>
              <span className="course-code">PRG</span>
              <h3>Programming</h3>
              <p>C, C++, Java, Python, and modern programming languages.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-database"></i></div>
              <span className="course-code">DB</span>
              <h3>Databases</h3>
              <p>SQL, MongoDB, database design, and data management.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-globe"></i></div>
              <span className="course-code">WEB</span>
              <h3>Web Development</h3>
              <p>HTML, CSS, JavaScript, React, and full-stack development.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-network-wired"></i></div>
              <span className="course-code">NET</span>
              <h3>Networking</h3>
              <p>Computer networks, security, and cloud computing basics.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-network-wired"></i></div>
              <span className="course-code">CN</span>
              <h3>Computer Networking</h3>
              <p>Understand networking, protocols, security, and connectivity.</p>
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
                <li>Programming Fundamentals</li>
                <li>Digital Electronics</li>
                <li>Computer Basics</li>
                <li>Mathematics for Computing</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Year 2</h3>
              <ul>
                <li>Data Structures</li>
                <li>Database Management</li>
                <li>Web Technologies</li>
                <li>Operating Systems</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Year 3</h3>
              <ul>
                <li>Software Engineering</li>
                <li>Mobile App Development</li>
                <li>Industry Internship</li>
                <li>Final Year Project</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
    </main>
    <Footer />
  </>
);

export default BCA;
