import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AccountMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener('mousedown', closeMenu);
    return () => document.removeEventListener('mousedown', closeMenu);
  }, []);

  return <div className="account-menu" ref={menuRef}>
    <button className="account-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
      <span className="account-avatar"><i className="fas fa-user"></i></span>
      <strong>{user?.name || 'Account'}</strong>
      <i className="fas fa-caret-down"></i>
    </button>
    {open && <div className="account-dropdown">
      <div className="account-details"><strong>{user?.email}</strong><span>{user?.role === 'admin' ? 'Administrator' : 'Student'}</span></div>
      <button onClick={() => { setOpen(false); navigate('/profile'); }}><i className="fas fa-user"></i> My profile</button>
      <button onClick={() => { setOpen(false); navigate('/profile?password=1'); }}><i className="fas fa-key"></i> Change password</button>
      <button onClick={() => { setOpen(false); navigate('/'); }}><i className="fas fa-globe"></i> View website</button>
      <button onClick={() => { logout(); navigate('/'); }} className="dropdown-logout"><i className="fas fa-sign-out-alt"></i> Logout</button>
    </div>}
  </div>;
};

export default AccountMenu;