import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      navigate('/userdashboard');
    }
  }, [navigate]);

  const handleCnicChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    setCnic(numericValue);
  };

  const validateForm = () => {
    const newErrors = {};
    if (cnic.length !== 13) {
      newErrors.cnic = 'CNIC must be 13 digits long';
    }
    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    if (validateForm()) {
      setSubmitting(true);
      try {
        const response = await axios.post('http://localhost:5000/api/login', { cnic, password });
        localStorage.setItem('authToken', response.data.token);
        toast.success('Login successful!');
        navigate('/userdashboard');
      } catch (error) {
        console.error('Login failed:', error);
        toast.error('Invalid CNIC or password. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-lg w-[350px]">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">Login</h2>
        <form onSubmit={handleSubmit} className="text-base">
          <div className="mb-5">
            <label htmlFor="cnic" className="block text-lg text-white mb-1">CNIC</label>
            <input
              type="text"
              id="cnic"
              name="username"
              autoComplete="username"
              inputMode="numeric"
              value={cnic}
              onChange={handleCnicChange}
              placeholder="Enter CNIC"
              required
              className="w-full bg-transparent border-b border-white text-white placeholder-gray py-1 px-1 focus:outline-none focus:ring-0 text-sm"
            />
            {errors.cnic && <p className="text-red-200 text-xs mt-1">{errors.cnic}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-lg text-white mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full bg-transparent border-b border-white text-white placeholder-gray py-1 px-1 focus:outline-none focus:ring-0 text-sm"
            />
            {errors.password && <p className="text-red-200 text-xs mt-1">{errors.password}</p>}
          </div>

          <button 
            type="submit" 
            disabled={submitting}
            className={`w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200 ${submitting ? 'bg-gray-400' : ''} text-sm`}
          >
            {submitting ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white">
          Don't have an account? <Link to="/signup" className="text-indigo-200 hover:underline">Sign up</Link>
        </p>
      </div>

      {/* Toastify container */}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
