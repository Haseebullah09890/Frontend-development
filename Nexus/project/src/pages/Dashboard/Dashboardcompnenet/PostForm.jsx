import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostForm = ({ onClose, initialData }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setPostTitle(initialData.title || '');
      setPostContent(initialData.description || '');
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('No token, authorization denied');
      return;
    }

    const formData = new FormData();
    formData.append('title', postTitle);
    formData.append('content', postContent);
    if (image) formData.append('image', image);

    try {
      if (initialData) {
        // Update existing post
        await axios.put(`http://localhost:5000/api/posts/${initialData.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        setSuccessMessage('Post updated successfully!');
      } else {
        // Create new post
        await axios.post('http://localhost:5000/api/posts/add', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        setSuccessMessage('Post created successfully!');
      }

      setError(null);
      onClose(); // Close the form after successful submit
    } catch (err) {
      console.error('Error submitting post:', err);
      if (err.response) {
        setError(`Error: ${err.response.data.message || 'Unknown error occurred'}`);
      } else {
        setError('Error creating/updating post. Please try again.');
      }
      setSuccessMessage(null);
    }
  };

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, error]);

  // Toast component
  const Toast = ({ message, type, onClose }) => {
    return (
      <div className={`fixed top-4 right-4 px-6 py-3 rounded shadow-lg text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} z-50`}>
        <div className="flex items-center justify-between space-x-4">
          <span>{message}</span>
          <button onClick={onClose} className="text-white font-bold">X</button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg relative">
      {successMessage && (
        <Toast message={successMessage} type="success" onClose={() => setSuccessMessage(null)} />
      )}
      {error && (
        <Toast message={error} type="error" onClose={() => setError(null)} />
      )}

      <h2 className="text-2xl font-bold text-white mb-4">
        {initialData ? 'Edit Post' : 'Add Post'}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white mb-2">Title</label>
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded cursor-pointer"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">Content</label>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded cursor-pointer"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full bg-gray-700 text-white p-2 rounded cursor-pointer"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer m-4"
        >
          {initialData ? 'Update Post' : 'Submit'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg cursor-pointer"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PostForm;
