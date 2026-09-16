import Header from '../components/Header';
import Footer from '../components/Footer';

const MCA = () => (
  <>
    <Header />
    <main>
      <section className="inner-hero institute-inner-hero" style={{background: 'var(--dark-bg) url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=80) center/cover no-repeat'}}>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">MASTER OF COMPUTER APPLICATIONS</p>
            <h1>MCA<br /><span>Advance your technical expertise through applied learning.</span></h1>
            <p>Master advanced computing, software architecture, and emerging technologies for leadership roles in India's technology sector.</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div className="intro-image">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=700&fit=crop" alt="Indian MCA students working on advanced projects" />
          </div>
          <div className="intro-copy">
            <p className="eyebrow">PROGRAMME OVERVIEW</p>
            <h2>Master technology. Lead innovation.</h2>
            <p>Our MCA programme is designed for students who want to deepen their technical expertise and take on leadership roles in software development, system architecture, and emerging technologies. We blend advanced theory with intensive practical work.</p>
            <p>From artificial intelligence and machine learning to cloud computing and cybersecurity, our curriculum prepares you for the most demanding roles in India's technology industry.</p>
          </div>
        </div>
      </section>

      <section className="course-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">ADVANCED SKILLS</p>
            <h2>What you'll master</h2>
            <p>Cutting-edge technologies for senior technical roles.</p>
          </div>
          <div className="course-grid">
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-brain"></i></div>
              <span className="course-code">AI</span>
              <h3>Artificial Intelligence</h3>
              <p>Machine learning, neural networks, and intelligent systems.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-cloud"></i></div>
              <span className="course-code">CLD</span>
              <h3>Cloud Computing</h3>
              <p>AWS, Azure, distributed systems, and scalable architecture.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-shield-alt"></i></div>
              <span className="course-code">SEC</span>
              <h3>Cybersecurity</h3>
              <p>Network security, cryptography, and ethical hacking.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-mobile-alt"></i></div>
              <span className="course-code">MOB</span>
              <h3>Mobile Development</h3>
              <p>iOS, Android, cross-platform development, and app architecture.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-chart-bar"></i></div>
              <span className="course-code">DS</span>
              <h3>Data Science</h3>
              <p>Data analysis, visualization, statistics, and machine learning.</p>
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
                <li>Advanced Programming</li>
                <li>Data Structures & Algorithms</li>
                <li>Operating Systems</li>
                <li>Database Systems</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Year 2</h3>
              <ul>
                <li>Software Engineering</li>
                <li>Web & Mobile Development</li>
                <li>Network Security</li>
                <li>Cloud Architecture</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Year 3</h3>
              <ul>
                <li>AI & Machine Learning</li>
                <li>Research Project</li>
                <li>Industry Internship</li>
                <li>Dissertation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
    </main>
    <Footer />
  </>
);

export default MCA;
