import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header id="navbar" className={scrolled ? 'scrolled' : ''}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/assets/image/logo.png" alt="Abhinova Institute" className="logo-img" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Courses
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/courses"><i className="fas fa-flask"></i> All Courses</Link></li>
                    <li><Link className="dropdown-item" to="/course/bsc"><i className="fas fa-flask"></i> BSC</Link></li>
                    <li><Link className="dropdown-item" to="/course/bca"><i className="fas fa-laptop-code"></i> BCA</Link></li>
                    <li><Link className="dropdown-item" to="/course/ba"><i className="fas fa-book-open"></i> BA</Link></li>
                    <li><Link className="dropdown-item" to="/course/mba"><i className="fas fa-chart-line"></i> MBA</Link></li>
                    <li><Link className="dropdown-item" to="/course/mca"><i className="fas fa-microchip"></i> MCA</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/why-choose-us">Why Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            {isAuthenticated ? (
              <>
                <Link to="/admin" className="cta-btn">Dashboard</Link>
                <button onClick={handleLogout} className="cta-btn ms-2">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="cta-btn">Log In</Link>
                <Link to="/signup" className="cta-btn ms-2">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
