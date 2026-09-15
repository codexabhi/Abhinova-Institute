import Header from '../components/Header';
import Footer from '../components/Footer';

const courseData = [
  ['BSC', 'Bachelor of Science', 'A rigorous foundation in scientific thinking, laboratory practice, and research.', 'fas fa-flask'],
  ['BCA', 'Bachelor of Computer Applications', 'Build practical skills in programming, software, databases, and digital systems.', 'fas fa-laptop-code'],
  ['BA', 'Bachelor of Arts', 'Understand people, culture, society, and communication through a broad liberal education.', 'fas fa-book-open'],
  ['MBA', 'Master of Business Administration', 'Develop strategic thinking, leadership, and the confidence to make an impact.', 'fas fa-chart-line'],
  ['MCA', 'Master of Computer Applications', 'Take your technology career further with advanced application and systems learning.', 'fas fa-microchip']
];

const Courses = () => <><Header /><main><section className="inner-hero institute-inner-hero" style={{background: 'var(--dark-bg) url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80) center/cover no-repeat'}}><div className="hero-content"><div className="hero-text"><p className="eyebrow">ACADEMIC PROGRAMMES</p><h1>Find the course<br /><span>that moves you forward.</span></h1><p>Explore focused, future-ready programmes at Abhinova Institute.</p></div></div></section><section className="course-directory"><div className="container"><div className="section-header"><p className="eyebrow">OUR COURSES</p><h2>Learn deeply. Apply boldly.</h2><p>Every programme combines a strong academic foundation with practical experiences and caring mentorship.</p></div><div className="course-directory-grid">{courseData.map(([code, title, description, icon]) => <article className="course-directory-card" key={code}><div className="course-icon"><i className={icon}></i></div><span className="course-code">{code}</span><h3>{title}</h3><p>{description}</p><a href="/contact" className="text-link">Enquire now <i className="fas fa-arrow-right"></i></a></article>)}</div></div></section></main><Footer /></>;
export default Courses;
