import Header from '../components/Header';
import Footer from '../components/Footer';

const BCom = () => (
  <>
    <Header />
    <main>
      <section className="inner-hero institute-inner-hero" style={{background: 'var(--dark-bg) url(https://images.pexels.com/photos/16504590/pexels-photo-16504590.jpeg) center/cover no-repeat'}}>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">BACHELOR OF COMMERCE</p>
            <h1>BCom<br /><span>Build a strong foundation in business.</span></h1>
            <p>Develop practical knowledge in accounting, finance, management, and entrepreneurship for India's changing economy.</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div className="intro-image">
            <img src="https://images.pexels.com/photos/18067562/pexels-photo-18067562.jpeg" alt="Indian commerce students discussing a business project" />
          </div>
          <div className="intro-copy">
            <p className="eyebrow">PROGRAMME OVERVIEW</p>
            <h2>Learn business. Create value.</h2>
            <p>Our BCom programme combines accounting and financial fundamentals with management, communication, and applied business learning.</p>
            <p>Work through real-world case studies and practical projects while building the confidence to pursue careers in finance, commerce, entrepreneurship, and further study.</p>
          </div>
        </div>
      </section>

      <section className="course-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">CORE AREAS</p>
            <h2>Build your business toolkit</h2>
            <p>Relevant knowledge for the next step in your career.</p>
          </div>
          <div className="course-grid">
            <article className="course-card"><div className="course-icon"><i className="fas fa-calculator"></i></div><span className="course-code">ACC</span><h3>Accounting</h3><p>Financial reporting, taxation, auditing, and business records.</p></article>
            <article className="course-card"><div className="course-icon"><i className="fas fa-chart-line"></i></div><span className="course-code">FIN</span><h3>Finance</h3><p>Markets, investment principles, financial planning, and analysis.</p></article>
            <article className="course-card"><div className="course-icon"><i className="fas fa-briefcase"></i></div><span className="course-code">MGT</span><h3>Management</h3><p>Organizational behavior, operations, leadership, and strategy.</p></article>
            <article className="course-card"><div className="course-icon"><i className="fas fa-lightbulb"></i></div><span className="course-code">ENT</span><h3>Entrepreneurship</h3><p>Turn ideas into practical ventures through innovation and planning.</p></article>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default BCom;
