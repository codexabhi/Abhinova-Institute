import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage('');
    try {
      await axios.post('/api/contact', formData);
      setMessage('Thank you. Our admissions team will get back to you soon.');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch {
      setMessage('We could not send your message. Please email admissions@abhinovainstitute.edu.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });

  return (
    <>
      <Header />
      <main>
        <section className="contact-banner">
          <div className="container contact-banner-content">
            <div>
              <p className="eyebrow">CONNECT WITH ABHINOVA</p>
              <h1>Let your next chapter<br /><span>begin here.</span></h1>
              <p>Have a question about admissions, courses, campus life, or student support? We would love to hear from you.</p>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <div className="container contact-layout">
            <div className="contact-form-panel">
              <p className="eyebrow">SEND AN ENQUIRY</p>
              <h2>We are here to help.</h2>
              <p className="contact-intro">Share a few details and our admissions team will guide you through the next step.</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name<input type="text" id="name" name="name" placeholder="Your full name" required value={formData.name} onChange={handleChange} /></label>
                <label htmlFor="email">Email address<input type="email" id="email" name="email" placeholder="you@example.com" required value={formData.email} onChange={handleChange} /></label>
                <label htmlFor="service">Course of interest<select id="service" name="service" value={formData.service} onChange={handleChange}><option value="">Select a course</option><option value="BSC">BSC - Bachelor of Science</option><option value="BCA">BCA - Bachelor of Computer Applications</option><option value="BA">BA - Bachelor of Arts</option><option value="MBA">MBA - Master of Business Administration</option><option value="MCA">MCA - Master of Computer Applications</option></select></label>
                <label htmlFor="message">Your question<textarea id="message" name="message" rows="5" placeholder="Tell us how we can help" required value={formData.message} onChange={handleChange}></textarea></label>
                <button type="submit" className="submit-btn" disabled={submitting}>{submitting ? 'Sending...' : 'Send enquiry'} <i className="fas fa-arrow-right"></i></button>
                {message && <p className="contact-status" role="status">{message}</p>}
              </form>
            </div>
            <aside className="contact-details">
              <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&h=620&fit=crop" alt="Indian students on a university campus" />
              <div className="contact-detail-list">
                <div><i className="fas fa-envelope"></i><span><strong>Email us</strong>email@gmail.com</span></div>
                <div><i className="fas fa-phone"></i><span><strong>Call admissions</strong>+91 8806968959</span></div>
                <div><i className="fas fa-location-dot"></i><span><strong>Visit campus</strong>Thane, Mumbai, Maharashtra</span></div>
                <div><i className="fas fa-clock"></i><span><strong>Office hours</strong>Monday to Saturday, 9:00 AM - 5:00 PM</span></div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
