import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DASHBOARD_STORAGE_KEY = 'abhinova-admin-dashboard-data';

const getStoredDashboardData = () => {
  try {
    const storedData = JSON.parse(localStorage.getItem(DASHBOARD_STORAGE_KEY));

    return {
      students: Array.isArray(storedData?.students) ? storedData.students : [],
      courses: Array.isArray(storedData?.courses) ? storedData.courses : [],
      faculty: Array.isArray(storedData?.faculty) ? storedData.faculty : [],
      events: Array.isArray(storedData?.events) ? storedData.events : [],
      notices: Array.isArray(storedData?.notices) ? storedData.notices : []
    };
  } catch (error) {
    return { students: [], courses: [], faculty: [], events: [], notices: [] };
  }
};

const AdminDashboard = () => {
  const { user, token, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const storedData = getStoredDashboardData();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('students');
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  // Statistics
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    faculty: 0,
    enquiries: 0,
    notices: 0,
    events: 0
  });

  // Data arrays
  const [students, setStudents] = useState([]);

  const [courses, setCourses] = useState([]);

  const [faculty, setFaculty] = useState([]);

  const [events, setEvents] = useState([]);

  const [notices, setNotices] = useState([]);

  const sidebarItems = [
    ['students', 'user-graduate', 'Students'],
    ['courses', 'book', 'Courses'],
    ['faculty', 'chalkboard-teacher', 'Faculty'],
    ['events', 'calendar-alt', 'Events'],
    ['notices', 'bullhorn', 'Notices']
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (!isAuthenticated || !token) return;

    const loadDashboardData = async () => {
      try {
        const response = await axios.get('/api/dashboard-data', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const remoteData = response.data;
        const dashboardData = remoteData || storedData;

        setStudents(dashboardData.students || []);
        setCourses(dashboardData.courses || []);
        setFaculty(dashboardData.faculty || []);
        setEvents(dashboardData.events || []);
        setNotices(dashboardData.notices || []);
        setStats((currentStats) => ({
          ...currentStats,
          students: (dashboardData.students || []).length,
          courses: (dashboardData.courses || []).length,
          faculty: (dashboardData.faculty || []).length,
          events: (dashboardData.events || []).length,
          notices: (dashboardData.notices || []).length
        }));
      } catch (error) {
        console.error('Unable to load shared dashboard data:', error);
        return;
      }

      setDataLoaded(true);
    };

    loadDashboardData();
  }, [isAuthenticated, token]);

  useEffect(() => {
    if (!dataLoaded) return;

    const dashboardData = { students, courses, faculty, events, notices };
    localStorage.setItem(DASHBOARD_STORAGE_KEY, JSON.stringify(dashboardData));

    if (token) {
      axios.put('/api/dashboard-data', dashboardData, {
        headers: { Authorization: `Bearer ${token}` }
      }).catch((error) => {
        console.error('Unable to save shared dashboard data:', error);
      });
    }
  }, [dataLoaded, token, students, courses, faculty, events, notices]);

  const handleAdd = (tab) => {
    setEditingItem(null);
    setFormData({});
    setShowForm(true);
  };

  const handleEdit = (item, tab) => {
    setEditingItem(item);
    setFormData(item);
    setShowForm(true);
  };

  const handleDelete = (id, tab) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    switch(tab) {
      case 'students':
        setStudents(students.filter(s => s.id !== id));
        setStats({...stats, students: stats.students - 1});
        break;
      case 'courses':
        setCourses(courses.filter(c => c.id !== id));
        setStats({...stats, courses: stats.courses - 1});
        break;
      case 'faculty':
        setFaculty(faculty.filter(f => f.id !== id));
        setStats({...stats, faculty: stats.faculty - 1});
        break;
      case 'events':
        setEvents(events.filter(e => e.id !== id));
        setStats({...stats, events: stats.events - 1});
        break;
      case 'notices':
        setNotices(notices.filter(n => n.id !== id));
        setStats({...stats, notices: stats.notices - 1});
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingItem) {
      // Edit existing
      switch(activeTab) {
        case 'students':
          setStudents(students.map(s => s.id === editingItem.id ? {...formData, id: editingItem.id} : s));
          break;
        case 'courses':
          setCourses(courses.map(c => c.id === editingItem.id ? {...formData, id: editingItem.id} : c));
          break;
        case 'faculty':
          setFaculty(faculty.map(f => f.id === editingItem.id ? {...formData, id: editingItem.id} : f));
          break;
        case 'events':
          setEvents(events.map(e => e.id === editingItem.id ? {...formData, id: editingItem.id} : e));
          break;
        case 'notices':
          setNotices(notices.map(n => n.id === editingItem.id ? {...formData, id: editingItem.id} : n));
          break;
      }
    } else {
      // Add new
      const newId = Date.now();
      switch(activeTab) {
        case 'students':
          setStudents([...students, {...formData, id: newId}]);
          setStats({...stats, students: stats.students + 1});
          break;
        case 'courses':
          setCourses([...courses, {...formData, id: newId}]);
          setStats({...stats, courses: stats.courses + 1});
          break;
        case 'faculty':
          setFaculty([...faculty, {...formData, id: newId}]);
          setStats({...stats, faculty: stats.faculty + 1});
          break;
        case 'events':
          setEvents([...events, {...formData, id: newId}]);
          setStats({...stats, events: stats.events + 1});
          break;
        case 'notices':
          setNotices([...notices, {...formData, id: newId}]);
          setStats({...stats, notices: stats.notices + 1});
          break;
      }
    }
    
    setShowForm(false);
    setFormData({});
    setEditingItem(null);
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <button onClick={() => { setShowForm(false); setActiveTab('overview'); }} className="sidebar-btn">
            <i className="fas fa-home"></i> Dashboard
          </button>
          <hr></hr>
          {sidebarItems.map(([tab, icon, label]) => (
            <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
              <i className={`fas fa-${icon}`}></i> {label}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button onClick={() => { logout(); navigate('/'); }} className="sidebar-btn logout">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-content">

          {/* Form Modal */}
          {showForm && (
            <div className="admin-form-modal">
              <div className="admin-form-content">
                <div className="admin-form-header">
                  <h2>{editingItem ? 'Edit' : 'Add'} {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                  <button onClick={() => { setShowForm(false); setEditingItem(null); setFormData({}); }}><i className="fas fa-times"></i></button>
                </div>
                <form onSubmit={handleSubmit}>
                  {activeTab === 'students' && (
                    <>
                      <label>Name<input type="text" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required /></label>
                      <label>Email<input type="email" value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} required /></label>
                      <label>Course<input type="text" value={formData.course || ''} onChange={(e) => setFormData({...formData, course: e.target.value})} required /></label>
                      <label>Year<input type="text" value={formData.year || ''} onChange={(e) => setFormData({...formData, year: e.target.value})} required /></label>
                    </>
                  )}
                  {activeTab === 'courses' && (
                    <>
                      <label>Code<input type="text" value={formData.code || ''} onChange={(e) => setFormData({...formData, code: e.target.value})} required /></label>
                      <label>Title<input type="text" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} required /></label>
                      <label>Duration<input type="text" value={formData.duration || ''} onChange={(e) => setFormData({...formData, duration: e.target.value})} required /></label>
                    </>
                  )}
                  {activeTab === 'faculty' && (
                    <>
                      <label>Name<input type="text" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required /></label>
                      <label>Department<input type="text" value={formData.department || ''} onChange={(e) => setFormData({...formData, department: e.target.value})} required /></label>
                      <label>Email<input type="email" value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} required /></label>
                    </>
                  )}
                  {activeTab === 'events' && (
                    <>
                      <label>Title<input type="text" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} required /></label>
                      <label>Date<input type="text" value={formData.date || ''} onChange={(e) => setFormData({...formData, date: e.target.value})} required /></label>
                      <label>Type<input type="text" value={formData.type || ''} onChange={(e) => setFormData({...formData, type: e.target.value})} required /></label>
                    </>
                  )}
                  {activeTab === 'notices' && (
                    <>
                      <label>Title<input type="text" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} required /></label>
                      <label>Date<input type="text" value={formData.date || ''} onChange={(e) => setFormData({...formData, date: e.target.value})} required /></label>
                      <label>Type<input type="text" value={formData.type || ''} onChange={(e) => setFormData({...formData, type: e.target.value})} required /></label>
                    </>
                  )}
                  <div className="admin-form-actions">
                    <button type="button" onClick={() => { setShowForm(false); setEditingItem(null); setFormData({}); }}>Cancel</button>
                    <button type="submit">Save</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Content Sections */}
          {activeTab === 'overview' && (
            <div className="admin-overview">
              <h2>Admin Dashboard Summary</h2>
              <p>Choose a section below to view or add your institute data.</p>
              <div className="admin-stats-grid">
                {[
                  ['students', 'user-graduate', 'Students'],
                  ['courses', 'book', 'Courses'],
                  ['faculty', 'chalkboard-teacher', 'Faculty'],
                  ['notices', 'bullhorn', 'Notices'],
                  ['events', 'calendar-alt', 'Events']
                ].map(([tab, icon, label]) => (
                  <button key={tab} className="admin-stat-card" onClick={() => setActiveTab(tab)}>
                    <span className="stat-icon"><i className={`fas fa-${icon}`}></i></span>
                    <span className="stat-content"><strong>{stats[tab]}</strong><span>{label}</span></span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="admin-content-section">
              <div className="admin-section-header">
                <h2>Students Management</h2>
                <button onClick={() => handleAdd('students')}><i className="fas fa-plus"></i> Add Student</button>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr><th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Year</th><th>Actions</th></tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.course}</td>
                        <td>{student.year}</td>
                        <td>
                          <button onClick={() => handleEdit(student, 'students')}><i className="fas fa-edit"></i></button>
                          <button onClick={() => handleDelete(student.id, 'students')}><i className="fas fa-trash"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="admin-content-section">
              <div className="admin-section-header">
                <h2>Courses Management</h2>
                <button onClick={() => handleAdd('courses')}><i className="fas fa-plus"></i> Add Course</button>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr><th>ID</th><th>Code</th><th>Title</th><th>Duration</th><th>Actions</th></tr>
                  </thead>
                  <tbody>
                    {courses.map(course => (
                      <tr key={course.id}>
                        <td>{course.id}</td>
                        <td>{course.code}</td>
                        <td>{course.title}</td>
                        <td>{course.duration}</td>
                        <td>
                          <button onClick={() => handleEdit(course, 'courses')}><i className="fas fa-edit"></i></button>
                          <button onClick={() => handleDelete(course.id, 'courses')}><i className="fas fa-trash"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'faculty' && (
            <div className="admin-content-section">
              <div className="admin-section-header">
                <h2>Faculty Management</h2>
                <button onClick={() => handleAdd('faculty')}><i className="fas fa-plus"></i> Add Faculty</button>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr><th>ID</th><th>Name</th><th>Department</th><th>Email</th><th>Actions</th></tr>
                  </thead>
                  <tbody>
                    {faculty.map(fac => (
                      <tr key={fac.id}>
                        <td>{fac.id}</td>
                        <td>{fac.name}</td>
                        <td>{fac.department}</td>
                        <td>{fac.email}</td>
                        <td>
                          <button onClick={() => handleEdit(fac, 'faculty')}><i className="fas fa-edit"></i></button>
                          <button onClick={() => handleDelete(fac.id, 'faculty')}><i className="fas fa-trash"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="admin-content-section">
              <div className="admin-section-header">
                <h2>Events Management</h2>
                <button onClick={() => handleAdd('events')}><i className="fas fa-plus"></i> Add Event</button>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr><th>ID</th><th>Title</th><th>Date</th><th>Type</th><th>Actions</th></tr>
                  </thead>
                  <tbody>
                    {events.map(event => (
                      <tr key={event.id}>
                        <td>{event.id}</td>
                        <td>{event.title}</td>
                        <td>{event.date}</td>
                        <td>{event.type}</td>
                        <td>
                          <button onClick={() => handleEdit(event, 'events')}><i className="fas fa-edit"></i></button>
                          <button onClick={() => handleDelete(event.id, 'events')}><i className="fas fa-trash"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'notices' && (
            <div className="admin-content-section">
              <div className="admin-section-header">
                <h2>Notices Management</h2>
                <button onClick={() => handleAdd('notices')}><i className="fas fa-plus"></i> Add Notice</button>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr><th>ID</th><th>Title</th><th>Date</th><th>Type</th><th>Actions</th></tr>
                  </thead>
                  <tbody>
                    {notices.map(notice => (
                      <tr key={notice.id}>
                        <td>{notice.id}</td>
                        <td>{notice.title}</td>
                        <td>{notice.date}</td>
                        <td>{notice.type}</td>
                        <td>
                          <button onClick={() => handleEdit(notice, 'notices')}><i className="fas fa-edit"></i></button>
                          <button onClick={() => handleDelete(notice.id, 'notices')}><i className="fas fa-trash"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
