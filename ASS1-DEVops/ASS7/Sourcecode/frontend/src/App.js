import React, { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import AuthForm from './components/AuthForm';
import CourseFilter from './components/CourseFilter';
import './App.css';

const API_URL = 'http://localhost:5000/api/feedback';
const AUTH_URL = 'http://localhost:5000/api/auth';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [authError, setAuthError] = useState('');
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('studentFeedbackUser');
    return stored ? JSON.parse(stored) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('studentFeedbackToken') || '');
  const [courseFilter, setCourseFilter] = useState('');

  const getHeaders = () => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  };

  const loadFeedbacks = async (filter = '') => {
    try {
      setLoading(true);
      const query = filter ? `?course=${encodeURIComponent(filter)}` : '';
      const response = await fetch(`${API_URL}${query}`);
      const data = await response.json();
      setFeedbacks(data);
    } catch (err) {
      setError('Unable to load feedback.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeedbacks(courseFilter);
  }, [courseFilter]);

  const handleAuthSuccess = (result) => {
    setAuthError('');
    setUser(result.user);
    setToken(result.token);
    localStorage.setItem('studentFeedbackUser', JSON.stringify(result.user));
    localStorage.setItem('studentFeedbackToken', result.token);
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch(`${AUTH_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const result = await response.json();
      if (response.ok) {
        handleAuthSuccess(result);
      } else {
        setAuthError(result.message || 'Login failed.');
      }
    } catch (err) {
      setAuthError('Unable to connect to auth server.');
    }
  };

  const handleRegister = async (details) => {
    try {
      const response = await fetch(`${AUTH_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details),
      });
      const result = await response.json();
      if (response.ok) {
        handleAuthSuccess(result);
      } else {
        setAuthError(result.message || 'Registration failed.');
      }
    } catch (err) {
      setAuthError('Unable to connect to auth server.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('studentFeedbackUser');
    localStorage.removeItem('studentFeedbackToken');
  };

  const addFeedback = async (feedback) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(feedback),
      });
      const saved = await response.json();
      if (response.ok) {
        setFeedbacks([saved, ...feedbacks]);
      } else {
        setError(saved.message || 'Could not submit feedback.');
      }
    } catch (err) {
      setError('Could not submit feedback.');
    }
  };

  const deleteFeedback = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      if (response.ok) {
        setFeedbacks(feedbacks.filter((item) => item._id !== id));
      } else {
        const result = await response.json();
        setError(result.message || 'Unable to delete feedback.');
      }
    } catch (err) {
      setError('Unable to delete feedback.');
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Student Feedback Review</h1>
        <p>Collect student course feedback, ratings, and comments.</p>
      </header>

      {user ? (
        <div className="signed-in-bar">
          <p>Welcome, {user.name}. You can now add or remove feedback.</p>
          <button className="logout-button" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      ) : (
        <AuthForm onLogin={handleLogin} onRegister={handleRegister} authError={authError} />
      )}

      <CourseFilter courseFilter={courseFilter} onSearch={setCourseFilter} onClear={() => setCourseFilter('')} />

      {user && <FeedbackForm onAdd={addFeedback} />}

      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <p>Loading feedback...</p>
      ) : (
        <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback} />
      )}
    </div>
  );
}

export default App;
