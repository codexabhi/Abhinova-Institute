import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WhyChooseUs from './pages/WhyChooseUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Portfolio from './pages/Portfolio';
import AdminDashboard from './pages/AdminDashboard';
import Events from './pages/Events';
import Courses from './pages/Courses';
import BSC from './pages/BSC';
import BCA from './pages/BCA';
import BA from './pages/BA';
import MBA from './pages/MBA';
import MCA from './pages/MCA';
import BCom from './pages/BCom';
import Profile from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Events />} />
          <Route path="/events" element={<Events />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/bsc" element={<BSC />} />
          <Route path="/course/bca" element={<BCA />} />
          <Route path="/course/ba" element={<BA />} />
          <Route path="/course/mba" element={<MBA />} />
          <Route path="/course/mca" element={<MCA />} />
          <Route path="/course/bcom" element={<BCom />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/edit/:id" element={<Portfolio />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
