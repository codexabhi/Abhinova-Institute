import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => <><Header /><main><section className="inner-hero institute-inner-hero" style={{background: 'var(--dark-bg) url(https://images.unsplash.com/photo-1588072432836-e10032774350?w=1920&q=80) center/cover no-repeat'}}><div className="hero-content"><div className="hero-text"><p className="eyebrow">OUR STORY</p><h1>Rooted in learning.<br /><span>Ready for tomorrow.</span></h1><p>Abhinova Institute is a welcoming higher-education community built around curious minds and meaningful futures.</p></div></div></section><section className="intro-section"><div className="container intro-grid"><div className="intro-image"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=700&fit=crop" alt="Abhinova Institute campus" /></div><div className="intro-copy"><p className="eyebrow">WHO WE ARE</p><h2>Learning that sees the whole student.</h2><p>Abhinova Institute brings together committed educators, ambitious students, and a campus culture that values both achievement and character.</p><p>Our programmes are designed to prepare learners for a changing world through strong fundamentals, applied projects, collaboration, and a steady sense of purpose.</p></div></div></section><section className="values-section"><div className="container"><div className="section-header"><p className="eyebrow">WHAT GUIDES US</p><h2>Our core values</h2></div><div className="value-grid"><article><i className="fas fa-lightbulb"></i><h3>Curiosity</h3><p>We make room for questions, experimentation, and independent thought.</p></article><article><i className="fas fa-hand-holding-heart"></i><h3>Belonging</h3><p>We build a respectful campus where every student can participate fully.</p></article><article><i className="fas fa-compass"></i><h3>Purpose</h3><p>We connect learning with responsibility, opportunity, and meaningful work.</p></article></div></div></section>
      {/* Timeline Section */}
      <section className="timeline-section pt-5">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>The milestones that shaped our company</p>
          </div>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Company Founded</h3>
                <p>Started with a mission to deliver exceptional web development services to businesses of all sizes.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>15+ Projects Completed</h3>
                <p>Expanded our team and services to include digital marketing and brand design solutions.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <h3>Global Client Base</h3>
                <p>Started serving international clients and established partnerships with industry leaders.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <h3>25+ Success Stories</h3>
                <p>Celebrated helping hundreds of businesses achieve their digital transformation goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
</main><Footer /></>;
export default About;
