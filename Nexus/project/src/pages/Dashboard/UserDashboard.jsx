import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Dashboardcompnenet/Sidebar';
import PostForm from './Dashboardcompnenet/PostForm';
import ChatApp from './Dashboardcompnenet/ChatApp';
import MyPost from './Dashboardcompnenet/MyPost';
import postsData from '../../utils/data';
import ProfileUser from './Dashboardcompnenet/ProfileUser';
import PostDetails from './Dashboardcompnenet/PostDetails';
import MyDeals from './Dashboardcompnenet/MyDeals'; // ✅ NEW IMPORT

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [showAddPostForm, setShowAddPostForm] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showMyPosts, setShowMyPosts] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showDeals, setShowDeals] = useState(false); // ✅ NEW STATE
  const [allPosts, setAllPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const res = await axios.get('http://localhost:5000/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
    setAllPosts(postsData); // Initialize posts data from static source
  }, []);

  const handleResetViews = () => {
    setShowAddPostForm(false);
    setShowChat(false);
    setShowMyPosts(false);
    setShowProfile(false);
    setShowDeals(false); // ✅ hide deals
    setSelectedPost(null);
  };

  const handleViewDetails = (post) => {
    setSelectedPost(post);  // Pass the selected post for details view
    setShowAddPostForm(false);
    setShowChat(false);
    setShowMyPosts(false);
    setShowProfile(false);
    setShowDeals(false);
  };

  const handleChatClick = (ownerUsername) => {
    setSelectedOwner(ownerUsername); // Set the owner to chat with
    setShowChat(true); // Show the chat view
  };

  if (!user) return <p className="text-white">Loading...</p>;

  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden mt-6">
      <div className="border-r border-gray-700">
        <Sidebar
          role={user.role}
          username={user.username}
          profilePic={user.profilePic}
          onPostClick={() => {
            handleResetViews();
            setShowAddPostForm(true);
          }}
          onChatClick={() => {
            handleResetViews();
            setShowChat(true); // This will set showChat to true and show the chat view
          }}
          onViewMyPostsClick={() => {
            handleResetViews();
            setShowMyPosts(true);
          }}
          onHomeClick={handleResetViews}
          onEditProfileClick={() => {
            handleResetViews();
            setShowProfile(true);
          }}
          onDealsClick={() => { // ✅ pass the deals handler
            handleResetViews();
            setShowDeals(true);
          }}
        />
      </div>

      <div className="flex-1 bg-gray-800 text-white overflow-y-auto">
        {!showAddPostForm && !showChat && !showMyPosts && !showProfile && !showDeals && (
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[90%] p-3 m-6 rounded bg-gray-700 placeholder-gray-400 text-white"
          />
        )}

        {showProfile ? (
          <ProfileUser />
        ) : showChat ? (
          <ChatApp selectedOwner={selectedOwner} /> // Pass selectedOwner to ChatApp
        ) : showAddPostForm ? (
          <PostForm onClose={() => setShowAddPostForm(false)} />
        ) : showMyPosts ? (
          <MyPost />
        ) : showDeals ? ( // ✅ show deals page
          <MyDeals />
        ) : selectedPost ? (
          <PostDetails post={selectedPost} onClose={() => setSelectedPost(null)} />
        ) : (
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <div key={post._id} className="bg-gray-700 p-4 rounded shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-md"
                  />
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-300 mb-2">{post.description}</p>
                  <p className="text-sm text-gray-400">By: {post.ownerUsername}</p>
                  <button
                    onClick={() => handleChatClick(post.ownerUsername)} // Trigger chat on click
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                  >
                    Chat with Owner
                  </button>
                  <button
                    onClick={() => handleViewDetails(post)} // ✅ Corrected to pass the actual post data
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              ))}
              {filteredPosts.length === 0 && (
                <p className="text-gray-400">No posts match your search.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
