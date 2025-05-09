import React, { useState } from 'react';
import PostForm from './PostForm'; // Import PostForm component

const demoPosts = [
  {
    id: 1,
    title: 'Smart Greenhouse System',
    description: 'An IoT-based solution for real-time crop monitoring and automated irrigation.',
    category: 'AgriTech',
    image: 'https://source.unsplash.com/featured/?greenhouse',
  },
  {
    id: 2,
    title: 'EduConnect App',
    description: 'A mobile platform connecting tutors and students with built-in scheduling and payments.',
    category: 'EdTech',
    image: 'https://source.unsplash.com/600x400/?startup,technology',
  },
  {
    id: 3,
    title: 'RecycloBin',
    description: 'AI-enabled smart bins that detect and sort recyclable waste automatically.',
    category: 'Sustainability',
    image: 'https://source.unsplash.com/featured/?recycling,technology',
  },
  {
    id: 4,
    title: 'FitStream',
    description: 'A live fitness streaming service with integrated wearables for personalized tracking.',
    category: 'HealthTech',
    image: 'https://source.unsplash.com/featured/?fitness,health',
  },
  {
    id: 5,
    title: 'FinBot',
    description: 'A chatbot that simplifies investment decisions for millennials using AI.',
    category: 'FinTech',
    image: 'https://source.unsplash.com/featured/?finance,technology',
  },
];

const MyPost = () => {
  const [displayMode, setDisplayMode] = useState('grid');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const handleEdit = (id) => {
    const postToEdit = demoPosts.find((post) => post.id === id);
    if (postToEdit) {
      setEditingPost(postToEdit);
      setIsFormOpen(true);
    }
  };

  const handleDelete = (id) => {
    alert(`Delete post ID: ${id}`);
  };

  const toggleDisplayMode = () => {
    setDisplayMode((prevMode) => (prevMode === 'grid' ? 'list' : 'grid'));
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingPost(null);
  };

  return (
    <div className="p-6">
      {isFormOpen ? (
        <PostForm onClose={handleCloseForm} initialData={editingPost} />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white">My Posts</h2>
            <button
              onClick={toggleDisplayMode}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
            >
              {displayMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
            </button>
          </div>

          <div
            className={`${
              displayMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'
            }`}
          >
            {demoPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-600 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-102 transition-transform duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{post.description}</p>
                  <span className="inline-block text-xs bg-indigo-500 px-3 py-1 rounded-full text-white">
                    {post.category}
                  </span>
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => handleEdit(post.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyPost;
