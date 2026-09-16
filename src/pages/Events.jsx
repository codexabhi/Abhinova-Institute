import Header from '../components/Header';
import Footer from '../components/Footer';

const events = [
  ['Annual Academic Conference', '18 Oct 2026', 'A day of papers, ideas, and conversations connecting students with the wider academic community.', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&h=600&fit=crop'],
  ['Science & Technology Exhibition', '06 Nov 2026', 'Student projects and inventive demonstrations that turn curiosity into working solutions.', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&h=600&fit=crop'],
  ['Research & Innovation Summit', '14 Nov 2026', 'A meeting point for emerging research, thoughtful debate, and bold new possibilities.', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=600&fit=crop'],
  ['Guest Lecture Series', '22 Nov 2026', 'Learn directly from leaders and specialists who are shaping their fields.', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop'],
  ['Career Guidance Seminar', '04 Dec 2026', 'Get practical direction on pathways, applications, skills, and the world of work.', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&h=600&fit=crop'],
  ['Industry Expert Workshop', '12 Dec 2026', 'Hands-on sessions that connect classroom knowledge to real industry practice.', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop']
];

const Events = () => <><Header /><main><section className="inner-hero events-inner-hero" style={{background: 'var(--dark-bg) url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80) center/cover no-repeat'}}><div className="hero-content"><div className="hero-text"><p className="eyebrow">CAMPUS CALENDAR</p><h1>Ideas come alive<br /><span>at Abhinova.</span></h1><p>Meet, make, question, and discover at the events that make our campus a living learning community.</p></div></div></section><section className="events-directory"><div className="container"><div className="section-header"><p className="eyebrow">WHAT'S HAPPENING</p><h2>Events at Abhinova</h2><p>There is always another perspective to discover.</p></div><div className="events-directory-grid">{events.map(([title, date, description, image]) => <article className="event-card" key={title}><img src={image} alt={`${title} at Abhinova Institute`} /><div className="event-card-copy"><span>{date}</span><h3>{title}</h3><p>{description}</p><a href="/contact" aria-label={`Learn more about ${title}`}><i className="fas fa-arrow-right"></i></a></div></article>)}</div></div></section></main><Footer /></>;
export default Events;
