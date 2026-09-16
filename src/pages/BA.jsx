import Header from '../components/Header';
import Footer from '../components/Footer';

const BA = () => (
  <>
    <Header />
    <main>
      <section className="inner-hero institute-inner-hero" style={{background: 'var(--dark-bg) url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80) center/cover no-repeat'}}>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">BACHELOR OF ARTS</p>
            <h1>BA<br /><span>Explore humanities, social sciences, and creative thought.</span></h1>
            <p>Develop critical thinking, cultural understanding, and communication skills for diverse career paths in India's dynamic sectors.</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div className="intro-image">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=700&fit=crop" alt="Indian students in liberal arts classroom" />
          </div>
          <div className="intro-copy">
            <p className="eyebrow">PROGRAMME OVERVIEW</p>
            <h2>Understand people and society.</h2>
            <p>Our BA programme offers a rich exploration of human culture, history, literature, and social structures. Students learn to think critically, communicate effectively, and understand diverse perspectives essential for leadership in any field.</p>
            <p>From literature and history to political science and economics, our specializations prepare you for careers in media, education, public service, and beyond.</p>
          </div>
        </div>
      </section>

      <section className="course-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">SPECIALIZATIONS</p>
            <h2>Choose your focus</h2>
            <p>Disciplines that shape understanding of society and culture.</p>
          </div>
          <div className="course-grid">
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-book"></i></div>
              <span className="course-code">ENG</span>
              <h3>English Literature</h3>
              <p>Study literary works, critical analysis, and creative writing.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-landmark"></i></div>
              <span className="course-code">POL</span>
              <h3>Political Science</h3>
              <p>Understand governance, policy, and political systems.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-chart-bar"></i></div>
              <span className="course-code">ECO</span>
              <h3>Economics</h3>
              <p>Analyze markets, policies, and economic development.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-history"></i></div>
              <span className="course-code">HIS</span>
              <h3>History</h3>
              <p>Explore past civilizations and their impact on the present.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i class="fas fa-people-group"></i></div>
              <span className="course-code">SOC</span>
              <h3>Sociology</h3>
              <p>Understand society, culture, social relationships, and institutions.</p>
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
                <li>Foundation Courses</li>
                <li>Language Skills</li>
                <li>Introduction to Social Sciences</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Year 2</h3>
              <ul>
                <li>Specialization Core</li>
                <li>Research Methods</li>
                <li>Elective Courses</li>
                <li>Interdisciplinary Studies</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Year 3</h3>
              <ul>
                <li>Advanced Specialization</li>
                <li>Dissertation Project</li>
                <li>Internship Opportunities</li>
                <li>Career Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
    </main>
    <Footer />
  </>
);

export default BA;
