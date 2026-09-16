import Header from '../components/Header';
import Footer from '../components/Footer';

const BSC = () => (
  <>
    <Header />
    <main>
      <section className="inner-hero institute-inner-hero" style={{background: 'var(--dark-bg) url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80) center/cover no-repeat'}}>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">BACHELOR OF SCIENCE</p>
            <h1>BSC<br /><span>Build a strong foundation in science.</span></h1>
            <p>Develop critical thinking, laboratory skills, and research expertise for a career in science and technology.</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div className="intro-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=700&fit=crop" alt="Indian science students in laboratory" />
          </div>
          <div className="intro-copy">
            <p className="eyebrow">PROGRAMME OVERVIEW</p>
            <h2>Science that shapes the future.</h2>
            <p>Our BSC programme combines rigorous theoretical knowledge with hands-on laboratory experience. Students learn to think like scientists, conduct experiments, analyze data, and contribute to research that matters.</p>
            <p>From physics and chemistry to biology and mathematics, we offer specializations that align with your interests and career goals in India's growing scientific landscape.</p>
          </div>
        </div>
      </section>

      <section className="course-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">SPECIALIZATIONS</p>
            <h2>Choose your path</h2>
            <p>Focus areas designed for India's scientific and industrial needs.</p>
          </div>
          <div className="course-grid">
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-atom"></i></div>
              <span className="course-code">PHY</span>
              <h3>Physics</h3>
              <p>Study matter, energy, and the fundamental forces that govern the universe.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-flask"></i></div>
              <span className="course-code">CHE</span>
              <h3>Chemistry</h3>
              <p>Explore the composition, properties, and reactions of matter.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-dna"></i></div>
              <span className="course-code">BIO</span>
              <h3>Biology</h3>
              <p>Understand living organisms and their interactions with the environment.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i className="fas fa-calculator"></i></div>
              <span className="course-code">MAT</span>
              <h3>Mathematics</h3>
              <p>Master abstract reasoning, problem-solving, and quantitative analysis.</p>
            </article>
            <article className="course-card">
              <div className="course-icon"><i class="fas fa-mountain"></i></div>
              <span className="course-code">GEO</span>
              <h3>Geology</h3>
              <p>Study the Earth's physical structure, processes, and history.</p>
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
                <li>Fundamental Sciences</li>
                <li>Laboratory Techniques</li>
                <li>Mathematical Foundations</li>
                <li>Scientific Communication</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Year 2</h3>
              <ul>
                <li>Advanced Core Subjects</li>
                <li>Research Methodology</li>
                <li>Statistical Analysis</li>
                <li>Interdisciplinary Projects</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Year 3</h3>
              <ul>
                <li>Specialization Courses</li>
                <li>Capstone Research Project</li>
                <li>Industry Internship</li>
                <li>Career Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
    </main>
    <Footer />
  </>
);

export default BSC;
