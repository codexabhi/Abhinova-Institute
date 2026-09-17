import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountMenu from '../components/AccountMenu';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, isAuthenticated, updateProfile, changePassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState({ name: '', email: '', mobile: '' });
  const [passwords, setPasswords] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [showPassword, setShowPassword] = useState(new URLSearchParams(location.search).has('password'));

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
    if (user) setProfile({ name: user.name || '', email: user.email || '', mobile: user.mobile || '' });
  }, [isAuthenticated, navigate, user]);

  const saveProfile = async (event) => {
    event.preventDefault(); setSaving(true); setError(''); setMessage('');
    try { await updateProfile(profile); setMessage('Profile updated successfully.'); }
    catch (requestError) { setError(requestError.response?.data?.message || 'Unable to update profile.'); }
    finally { setSaving(false); }
  };

  const savePassword = async (event) => {
    event.preventDefault(); setError(''); setMessage('');
    if (passwords.newPassword.length < 6) return setError('New password must be at least 6 characters.');
    if (passwords.newPassword !== passwords.confirmPassword) return setError('New passwords do not match.');
    setSaving(true);
    try { await changePassword(passwords.currentPassword, passwords.newPassword); setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' }); setMessage('Password changed successfully.'); }
    catch (requestError) { setError(requestError.response?.data?.message || 'Unable to change password.'); }
    finally { setSaving(false); }
  };

  return <div className="admin-layout profile-admin-layout"><aside className="admin-sidebar"><div className="sidebar-header"><h2>Admin Panel</h2></div><nav className="sidebar-nav"><button className="sidebar-btn" onClick={() => navigate('/admin')}><i className="fas fa-home"></i> Dashboard</button><hr /><button className="sidebar-btn" onClick={() => navigate('/admin')}><i className="fas fa-user-graduate"></i> Students</button><button className="sidebar-btn" onClick={() => navigate('/admin')}><i className="fas fa-book"></i> Courses</button><button className="sidebar-btn" onClick={() => navigate('/admin')}><i className="fas fa-chalkboard-teacher"></i> Faculty</button><button className="sidebar-btn" onClick={() => navigate('/admin')}><i className="fas fa-calendar-alt"></i> Events</button><button className="sidebar-btn" onClick={() => navigate('/admin')}><i className="fas fa-bullhorn"></i> Notices</button></nav></aside><main className="admin-main"><div className="admin-topbar"><span>Institute administration</span><AccountMenu /></div><div className="profile-page"><div className="container py-4">
    <div className="profile-header"><div><h1><i className="fas fa-user-circle"></i> My profile</h1><p>Manage your account details and security.</p></div><div className="profile-header-actions"><button className="profile-password-button" onClick={() => setShowPassword(!showPassword)}><i className="fas fa-key"></i> {showPassword ? 'Profile details' : 'Change password'}</button><button className="profile-dashboard-button" onClick={() => navigate('/admin')}>Dashboard</button></div></div>
    {message && <p className="profile-success">{message}</p>}{error && <p className="profile-error">{error}</p>}
    {!showPassword ? <form className="profile-card" onSubmit={saveProfile}><h2><i className="fas fa-id-card"></i> Profile details</h2><div className="profile-card-body"><div className="profile-fields"><label>Full name<input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} required /></label><label>Email address<input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} required /></label><label className="mobile-field">Mobile number<input value={profile.mobile} onChange={(e) => setProfile({ ...profile, mobile: e.target.value })} /></label></div><div className="profile-actions"><button className="profile-save" disabled={saving}>{saving ? 'Saving...' : 'Save changes'}</button></div></div></form> : <form className="profile-card" onSubmit={savePassword}><h2><i className="fas fa-lock"></i> Change password</h2><div className="profile-card-body"><div className="profile-fields"><label>Current password<input type="password" value={passwords.currentPassword} onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })} required /></label><label>New password<input type="password" value={passwords.newPassword} onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })} minLength="6" required /></label><label>Confirm new password<input type="password" value={passwords.confirmPassword} onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })} minLength="6" required /></label></div><div className="profile-actions"><button className="profile-save" disabled={saving}>{saving ? 'Changing...' : 'Change password'}</button></div></div></form>}
  </div></div></main></div>;
};

export default Profile;