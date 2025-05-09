import React from 'react';

const PostDetails = ({ post, onClose }) => {
  if (!post) return null; // Add a guard clause if post is undefined or null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-white bg-red-600 px-4 py-2 rounded mb-4 float-right"
        >
          Close
        </button>
        
        {/* Post Title */}
        <h2 className="text-3xl font-semibold mb-4">{post.title}</h2>
        
        {/* Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        
        {/* Description */}
        <p className="text-gray-300 mb-4">{post.description}</p>
        
        {/* Owner Username */}
        <p className="text-sm text-gray-400 mb-4">By: {post.ownerUsername}</p>
        
        {/* Full Details */}
        <div>
          <h3 className="font-semibold text-lg">Full Details:</h3>
          {/* Check if fullDetails exists */}
          <p className="text-gray-400">
            {post.fullDetails ? post.fullDetails : "No additional details available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
