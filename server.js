require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const DEMO_EMAIL = 'admin@codex.com';
const DEMO_PASSWORD = 'admin123';

const getDemoUser = () => ({
  _id: 'demo-user',
  id: 'demo-user',
  name: 'Admin User',
  email: DEMO_EMAIL,
  role: 'admin',
  enrolledProgram: 'web-applications',
  mobile: '',
  createdAt: new Date().toISOString()
});

const getUserById = async (userId) => {
  if (userId === 'demo-user') {
    return getDemoUser();
  }

  return User.findById(userId).select('-password');
};

// Middleware
app.use(cors());
app.use(express.json());

const startServer = () => {
  if (require.main !== module) return;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

// MongoDB Connection
const mongoConnection = MONGODB_URI ? mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000
})
  .then(async () => {
    console.log('MongoDB connected successfully');

    try {
      const User = mongoose.model('User');
      await User.collection.dropIndex('username_1');
      console.log('Dropped problematic username_1 index');
    } catch (error) {
      if (error.code !== 26) {
        console.log('No username index to drop or already cleaned');
      }
    }

    startServer();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    console.log('Starting server in demo-auth fallback mode...');
    startServer();
    throw err;
  })
: Promise.reject(new Error('MONGODB_URI is not configured'));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, default: '' },
  enrolledProgram: { type: String, default: 'web-applications' },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Portfolio Schema
const portfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  technologies: [String],
  projectUrl: String,
  githubUrl: String,
  createdAt: { type: Date, default: Date.now }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Project Schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  category: { type: String, required: true },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: String,
  description: String,
  type: { type: String, default: 'Support' },
  source: { type: String, default: 'Admin' },
  dueDate: String,
  crmLink: String,
  customer: String,
  project: String,
  assignedTo: { type: String, required: true },
  priority: { type: String, default: 'Normal' },
  status: { type: String, default: 'Open' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);

const dashboardDataSchema = new mongoose.Schema({
  ownerKey: { type: String, required: true, unique: true },
  students: { type: [mongoose.Schema.Types.Mixed], default: [] },
  courses: { type: [mongoose.Schema.Types.Mixed], default: [] },
  faculty: { type: [mongoose.Schema.Types.Mixed], default: [] },
  events: { type: [mongoose.Schema.Types.Mixed], default: [] },
  notices: { type: [mongoose.Schema.Types.Mixed], default: [] }
}, { timestamps: true });

const DashboardData = mongoose.model('DashboardData', dashboardDataSchema);

const requireDatabase = async (req, res, next) => {
  try {
    await mongoConnection;
    next();
  } catch (error) {
    res.status(503).json({ message: 'Shared database is unavailable' });
  }
};

app.get('/api/health', async (req, res) => {
  try {
    await mongoConnection;
    res.json({ api: 'ok', database: 'connected' });
  } catch (error) {
    res.status(503).json({ api: 'ok', database: ' unavailable', message: 'Configure MONGODB_URI in the deployment environment' });
  }
});

// Auth Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password, enrolledProgram } = req.body;
    
    console.log('Signup request received:', { name, email });
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      enrolledProgram: enrolledProgram || 'web-applications'
    });
    
    await user.save();
    console.log('User created successfully:', user._id);
    
    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });
    
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role, enrolledProgram: user.enrolledProgram, createdAt: user.createdAt } });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = String(email || '').trim().toLowerCase();

    if (normalizedEmail === DEMO_EMAIL.toLowerCase() && password === DEMO_PASSWORD) {
      const token = jwt.sign({ userId: 'demo-user' }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });
      return res.json({
        token,
        user: getDemoUser()
      });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role, enrolledProgram: user.enrolledProgram || (user.enrolledCourse === 'web-development' ? 'web-applications' : user.enrolledCourse), createdAt: user.createdAt } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Portfolio Routes
app.get('/api/portfolio', authenticateToken, async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ userId: req.user.userId });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/portfolio', authenticateToken, async (req, res) => {
  try {
    const portfolio = new Portfolio({
      ...req.body,
      userId: req.user.userId
    });
    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.put('/api/portfolio/:id', authenticateToken, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.delete('/api/portfolio/:id', authenticateToken, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.json({ message: 'Portfolio deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Project Routes (Admin only)
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/projects', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.put('/api/projects/:id', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.delete('/api/projects/:id', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/tasks', authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/tasks', authenticateToken, async (req, res) => {
  try {
    const task = new Task({ ...req.body, createdBy: req.user.userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Unable to create task', error: error.message });
  }
});

app.put('/api/tasks/:id', authenticateToken, async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: 'Unable to update task', error: error.message });
  }
});

app.delete('/api/tasks/:id', authenticateToken, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to delete task', error: error.message });
  }
});

// Admin dashboard data
app.use('/api/dashboard-data', requireDatabase);

app.get('/api/dashboard-data', authenticateToken, async (req, res) => {
  try {
    const dashboardData = await DashboardData.findOne({ ownerKey: req.user.userId }).lean();
    res.json(dashboardData ? {
      students: dashboardData.students,
      courses: dashboardData.courses,
      faculty: dashboardData.faculty,
      events: dashboardData.events,
      notices: dashboardData.notices
    } : null);
  } catch (error) {
    res.status(500).json({ message: 'Unable to load dashboard data', error: error.message });
  }
});

app.put('/api/dashboard-data', authenticateToken, async (req, res) => {
  try {
    const dashboardData = await DashboardData.findOneAndUpdate(
      { ownerKey: req.user.userId },
      {
        ownerKey: req.user.userId,
        students: Array.isArray(req.body.students) ? req.body.students : [],
        courses: Array.isArray(req.body.courses) ? req.body.courses : [],
        faculty: Array.isArray(req.body.faculty) ? req.body.faculty : [],
        events: Array.isArray(req.body.events) ? req.body.events : [],
        notices: Array.isArray(req.body.notices) ? req.body.notices : []
      },
      { new: true, upsert: true, runValidators: true }
    ).lean();
    res.json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: 'Unable to save dashboard data', error: error.message });
  }
});

// Get all contacts (Admin only)
app.get('/api/contacts', authenticateToken, async (req, res) => {
  try {
    const user = await getUserById(req.user.userId);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user profile
app.get('/api/user/profile', authenticateToken, async (req, res) => {
  try {
    const user = await getUserById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.put('/api/user/profile', authenticateToken, async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    if (req.user.userId === 'demo-user') {
      const updatedDemoUser = {
        ...getDemoUser(),
        name: name || getDemoUser().name,
        email: email || getDemoUser().email,
        mobile: mobile || ''
      };
      return res.json(updatedDemoUser);
    }

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { name, email, mobile: mobile || '' },
      { new: true, runValidators: true }
    ).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    if (error.code === 11000) return res.status(400).json({ message: 'That email address is already in use' });
    res.status(400).json({ message: 'Unable to update profile', error: error.message });
  }
});

// Temporary endpoint to clear all users (for testing only)
app.delete('/api/users/clear', async (req, res) => {
  try {
    await User.deleteMany({});
    res.json({ message: 'All users cleared successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = app;

