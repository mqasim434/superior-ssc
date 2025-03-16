import React, { useState } from 'react';
import '../../assets/styles/login.css';
import logo from '../../assets/images/uog-logo.png';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase'; // Your Firebase config

export const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!id.trim()) {
      newErrors.id = 'ID is required';
    } else if (id.length < 3) {
      newErrors.id = 'ID must be at least 3 characters';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Main login function to search in all collections
  const handleLogin = async () => {
    setLoading(true);
    setLoginError('');

    // Helper function to search in a single collection
    const searchInCollection = async (collectionName) => {
      const ref = collection(db, collectionName);
      const q = query(ref, where('email', '==', id), where('password', '==', password));
      const snapshot = await getDocs(q);
      return !snapshot.empty ? snapshot.docs[0].data() : null;
    };

    try {
      const collections = ['admin', 'teachers', 'students'];
      let userFound = null;
      let userRole = null;

      for (const coll of collections) {
        const user = await searchInCollection(coll);
        if (user) {
          userFound = user;
          userRole = coll; 
          break; 
        }
      }

      if (userFound) {
        console.log('User found:', userFound);
        // Store user data and role in localStorage/sessionStorage if needed
        localStorage.setItem('currentUser', JSON.stringify({ ...userFound, role: userRole }));

        // ✅ Navigate based on role
        if (userRole === 'admin') {
          navigate('/admin/dashboard');
        } else if (userRole === 'teachers') {
          navigate('/teacher/dashboard');
        } else if (userRole === 'students') {
          navigate('/student/dashboard');
        }
      } else {
        setLoginError('Invalid ID or Password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Something went wrong. Please try again later.');
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleLogin(); // Call the login function
    }
  };

  return (
    <div className='login-page'>
      <div className="login-container">
        <img src={logo} alt="Logo" />
        <h1>Login to Your Account</h1>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input
            type="text"
            placeholder='Type your Student Id/Teacher Id'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          {errors.id && <p className="error-message">{errors.id}</p>}

          <input
            type="password"
            placeholder='Type your password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}

          {loginError && <p className="error-message">{loginError}</p>}

          <button
            type="submit"
            className='button btn-primary'
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p>Forgot Password?
          <span
            style={{ color: 'black', cursor: 'pointer' }}
            onClick={() => alert('Reset Password Flow')}
          > Reset Password
          </span>
        </p>
      </div>
    </div>
  );
};
