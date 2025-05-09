import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSave } from 'react-icons/fa'; // Save icon

const ProfileUser = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    cnic: '',
    mobile: '',
    countryCode: '',
    profilePic: '',
  });
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setError('No token found. Please log in.');
          setLoading(false);
          return;
        }

        const res = await axios.get('http://localhost:5000/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data && res.data.user) {
          setUser(res.data.user);
          setFormData({
            username: res.data.user.username || '',
            email: res.data.user.email || '',
            role: res.data.user.role || '',
            cnic: res.data.user.cnic || '',
            mobile: res.data.user.mobile || '',
            countryCode: res.data.user.countryCode || '',
            profilePic: res.data.user.profilePic || '',
          });
        } else {
          setError('User data not available');
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        setError('Failed to load user.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setPasswordData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('authToken');
      await axios.put(
        'http://localhost:5000/api/update-profile',
        { ...formData },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Profile updated successfully!');
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile.');
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordSave = async () => {
    setPasswordSaving(true);
    setPasswordError('');
    setPasswordSuccess('');

    // Password validation
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New password and confirm password do not match.');
      setPasswordSaving(false);
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      await axios.put(
        'http://localhost:5000/api/update-password',
        { ...passwordData },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPasswordSuccess('Password updated successfully!');
      setPasswordData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error('Error updating password:', err);
      setPasswordError('Failed to update password.');
    } finally {
      setPasswordSaving(false);
    }
  };

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white/10 backdrop-blur-md text-white p-8 rounded-xl shadow-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Profile Settings</h1>

      {/* Profile Information */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={formData.profilePic || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-500"
        />
     
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Username"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            disabled
            className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">CNIC</label>
          <input
            type="text"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="CNIC"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Country Code</label>
          <input
            type="text"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="+92"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Mobile Number"
          />
        </div>
      </div>

      {error && <p className="text-red-400 mt-4">{error}</p>}
      {success && <p className="text-green-400 mt-4">{success}</p>}

      <button
        onClick={handleSave}
        disabled={saving}
        className="mt-6 w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition py-3 px-6 rounded-lg text-white font-semibold text-lg shadow-md"
      >
        {saving ? 'Saving...' : (
          <>
            <FaSave className="mr-2" /> Save Changes
          </>
        )}
      </button>

      {/* Change Password Section */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Change Password</h2>
      <div>
        <label className="block mb-1 font-medium">Old Password</label>
        <input
          type="password"
          name="oldPassword"
          value={passwordData.oldPassword}
          onChange={handlePasswordChange}
          className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Old Password"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-1 font-medium">New Password</label>
        <input
          type="password"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handlePasswordChange}
          className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="New Password"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-1 font-medium">Confirm New Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handlePasswordChange}
          className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Confirm New Password"
        />
      </div>

      {passwordError && <p className="text-red-400 mt-4">{passwordError}</p>}
      {passwordSuccess && <p className="text-green-400 mt-4">{passwordSuccess}</p>}

      <button
        onClick={handlePasswordSave}
        disabled={passwordSaving}
        className="mt-6 w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition py-3 px-6 rounded-lg text-white font-semibold text-lg shadow-md"
      >
        {passwordSaving ? 'Saving...' : (
          <>
            <FaSave className="mr-2" /> Change Password
          </>
        )}
      </button>
    </div>
  );
};

export default ProfileUser;
