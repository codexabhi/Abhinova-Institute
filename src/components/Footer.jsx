import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-section col-md-3">
            <h3>Abhinova Institute</h3>
            <p>Learning with purpose, leading with confidence. A student-first community for meaningful higher education.</p>
            
          </div>
          <div className="footer-section col-md-3 col-6">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section col-md-3 col-6">
            <h3>Courses</h3>
            <ul className="footer-links">
              <li><Link to="/courses">BSC</Link></li>
              <li><Link to="/courses">BCA</Link></li>
              <li><Link to="/courses">BA</Link></li>
              <li><Link to="/courses">MBA</Link></li>
              <li><Link to="/courses">MCA</Link></li>
            </ul>
          </div>
          <div className="footer-section col-md-3">
            <h3>Contact Info</h3>
            <ul className="footer-links footer-contact">
              <li><i className="fas fa-envelope"></i> email@gmail.com</li>
              <li><i className="fas fa-phone"></i> +91 8806968959</li>
              <li><i className="fas fa-map-marker-alt"></i> Thane, Mumbai</li>
            </ul>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Abhinova Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
