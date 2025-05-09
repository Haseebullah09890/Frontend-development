// src/components/Dashboardcompnenet/Sidebar.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faPlus,
  faEye,
  faHandHoldingUsd,
  faHome,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({
  role,
  username,
  profilePic,
  onPostClick,
  onChatClick,
  onViewMyPostsClick,
  onHomeClick,
  onEditProfileClick,
  onDealsClick, // ✅ New prop for My Deals
}) => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col justify-between shadow-lg">
      <div>
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={profilePic || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 border-indigo-500 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold capitalize">{username}</h2>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-400 capitalize">{role}</p>
              <button
                onClick={onEditProfileClick}
                className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded-full"
                title="Edit Profile"
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
          </div>
        </div>

        {/* Home */}
        <button
          className="w-full bg-gray-700 hover:bg-gray-600 transition py-2 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 cursor-pointer"
          onClick={onHomeClick}
        >
          <FontAwesomeIcon icon={faHome} className="text-white" />
          Home
        </button>

        {/* Chat */}
        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-2 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 cursor-pointer"
          onClick={onChatClick}
        >
          <FontAwesomeIcon icon={faComments} className="text-white" />
          Chat
        </button>

        {/* Entrepreneur Buttons */}
        {role === 'Entrepreneur' && (
          <>
            <button
              className="w-full bg-green-600 hover:bg-green-700 transition py-2 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 cursor-pointer"
              onClick={onPostClick}
            >
              <FontAwesomeIcon icon={faPlus} className="text-white" />
              Add Post
            </button>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 cursor-pointer"
              onClick={onViewMyPostsClick}
            >
              <FontAwesomeIcon icon={faEye} className="text-white" />
              View My Posts
            </button>
          </>
        )}

        {/* Investor Button */}
        {role && role.toLowerCase() === 'investor' && (
          <button
            onClick={onDealsClick} // ✅ Use the handler
            className="w-full bg-yellow-600 hover:bg-yellow-700 transition py-2 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faHandHoldingUsd} className="text-white" />
            My Deals
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
