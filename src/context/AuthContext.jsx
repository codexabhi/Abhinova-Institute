import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchUserProfile = async () => {
    try {
      const response = await api.get('/user/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      localStorage.removeItem('token');
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    // Use the server demo account when the API is available so data is shared across devices.
    if (email === 'admin@codex.com' && password === 'admin123') {
      try {
        const response = await api.post('/auth/login', { email, password });
        localStorage.setItem('token', response.data.token);
        setToken(response.data.token);
        setUser(response.data.user);
        return { success: true };
      } catch (error) {
        // Keep demo access available when the local API server is offline.
        const demoToken = 'demo-token-' + Date.now();
        const demoUser = { name: 'Admin User', email, role: 'admin' };
        localStorage.setItem('token', demoToken);
        setToken(demoToken);
        setUser(demoUser);
        return { success: true };
      }
    }

    // Try backend API if not demo credentials
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      setUser(response.data.user);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.code === 'ECONNABORTED' || !error.response
          ? 'Invalid credentials. Use admin@codex.com / admin123 for demo access.'
          : error.response.data?.message || 'Login failed'
      };
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await api.post('/auth/signup', {
        name,
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      setUser(response.data.user);
      return { success: true };
    } catch (error) {
      console.error('Signup error:', error);
      return { 
        success: false, 
        message: error.code === 'ECONNABORTED' || !error.response
          ? 'Unable to reach the server. Please start the API server and try again.'
          : error.response.data?.message || 'Signup failed'
      };
    }
  };

  const updateUser = (updatedUser) => setUser(updatedUser);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    loading,
    login,
    signup,
    updateUser,
    logout,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
