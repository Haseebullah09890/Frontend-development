import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const progress = ['Role', 'Details', 'Profile'];

const InputField = ({ label, name, type, value, onChange, error }) => (
  <div className="mb-4">
    <label className="block mb-1 capitalize text-sm">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter your ${label.toLowerCase()}`}
      className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 py-1.5 px-1 focus:outline-none text-sm"
    />
    {error && <p className="text-red-200 text-xs mt-1">{error}</p>}
  </div>
);

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: '', username: '', email: '', cnic: '', password: '', confirmPassword: '',
    mobile: '', countryCode: '+92', profile: null,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1 && !formData.role) newErrors.role = 'Please select a role.';
    if (step === 2) {
      ['username', 'email', 'cnic', 'password'].forEach(field => {
        if (!formData[field]) newErrors[field] = `${field} is required.`;
      });
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    }
    if (step === 3) {
      if (!formData.profile) newErrors.profile = 'Profile picture is required.';
      if (!formData.mobile) newErrors.mobile = 'Mobile number is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => validateStep() && setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting || !validateStep()) return;
    setSubmitting(true);

    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => formDataToSubmit.append(key, value));

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formDataToSubmit, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.error === 'CNIC already registered') {
        setErrors(prev => ({ ...prev, cnic: 'This CNIC is already registered.' }));
        toast.warning('This CNIC is already registered.', { autoClose: 3000 });
        return;
      }

      toast.success('Signup successful! Redirecting to login...', { autoClose: 3000 });
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Signup failed! Please try again later.', { autoClose: 4000 });
      setErrors({ general: 'An error occurred. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-6">
      <ToastContainer />
      <div className="bg-white/30 backdrop-blur-lg p-5 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md text-sm sm:text-base text-white">
        <div className="flex justify-between mb-6">
          {progress.map((label, idx) => (
            <div key={idx}
              className={`flex-1 text-center py-2 mx-1 text-xs font-semibold relative transition duration-300 
                ${step === idx + 1 ? 'bg-indigo-600' : step > idx + 1 ? 'bg-green-500' : 'bg-gray-400'}`}>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Signup</h2>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <label className="block mb-2 text-sm">Select Role:</label>
              {['Investor', 'Entrepreneur'].map(role => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, role }))}
                  className={`w-full py-1.5 border-2 mb-2 rounded-lg 
                    ${formData.role === role ? 'bg-indigo-600 border-indigo-600' : 'bg-gray border-gray-300'} text-white text-sm`}>
                  {role}
                </button>
              ))}
              {errors.role && <p className="text-red-200 text-xs mt-1">{errors.role}</p>}
              <div className="text-right mt-4">
                <button type="button" onClick={handleNext} className="px-5 py-1.5 bg-indigo-600 rounded-lg hover:bg-indigo-700 text-sm">
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              {['username', 'email', 'cnic'].map(field => (
                <InputField key={field} label={field} name={field} value={formData[field]} onChange={handleChange} error={errors[field]} type="text" />
              ))}
              {['password', 'confirmPassword'].map(field => (
                <InputField key={field} label={field === 'confirmPassword' ? 'Confirm Password' : field} name={field} value={formData[field]} onChange={handleChange} error={errors[field]} type="password" />
              ))}
              <div className="flex justify-between mt-6">
                <button type="button" onClick={handleBack} className="px-5 py-1.5 bg-gray-500 rounded-lg hover:bg-gray-600 text-sm">Back</button>
                <button type="button" onClick={handleNext} className="px-5 py-1.5 bg-indigo-600 rounded-lg hover:bg-indigo-700 text-sm">Next</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="mb-6 flex items-center space-x-4">
                {formData.profile && (
                  <div className="w-16 h-16 border-2 border-gray-300 rounded-full overflow-hidden">
                    <img src={URL.createObjectURL(formData.profile)} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Upload Profile Picture</label>
                  <input type="file" name="profile" accept="image/*" onChange={handleChange} className="text-xs text-white" />
                  {errors.profile && <p className="text-red-200 text-xs mt-1">{errors.profile}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-1 text-sm">Mobile Number</label>
                <div className="flex items-center space-x-4">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="bg-gray-600 text-white border-b border-white py-1.5 px-1 hover:bg-gray-600 focus:outline-none text-xs"
                  >
                    {['+92', '+1', '+44', '+91', '+61'].map(code => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full border-b border-white text-white placeholder-gray-300 py-1.5 px-1 focus:outline-none text-sm"
                  />
                </div>
                {errors.mobile && <p className="text-red-200 text-xs mt-1">{errors.mobile}</p>}
              </div>

              <div className="flex justify-between mt-6">
                <button type="button" onClick={handleBack} className="px-5 py-1.5 bg-gray-500 rounded-lg hover:bg-gray-600 text-sm">Back</button>
                <button type="submit" disabled={submitting}
                  className={`px-5 py-1.5 rounded-lg text-sm ${submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}>
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
