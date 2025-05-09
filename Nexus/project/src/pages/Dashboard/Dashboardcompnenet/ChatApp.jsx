import React, { useState } from 'react';
import { Send, Search, Video } from 'lucide-react';

const users = [
  { id: 1, name: 'Michael Huddson', lastMessage: 'Lorem ipsum dolor sit amet ...', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, name: 'John Doe', lastMessage: 'Lorem ipsum dolor sit amet ...', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 3, name: 'Alex Smith', lastMessage: 'Lorem ipsum dolor sit amet ...', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 4, name: 'Chris Evans', lastMessage: 'Lorem ipsum dolor sit amet ...', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
];

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([
    { text: 'Lorem ipsum dolor sit amet consectetuer adipiscing', isSender: false, time: '9:02 PM' },
    { text: 'Lorem ipsum dolor', isSender: true, time: '9:02 PM' },
    { text: 'Lorem ipsum dolor sit amet', isSender: false, time: '9:02 PM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage.trim(), isSender: true, time: '9:03 PM' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-900 p-4 space-y-4 overflow-y-auto border-r border-gray-700">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 rounded-full bg-gray-700 text-white focus:outline-none"
          />
          <Search className="absolute top-2.5 left-3 text-gray-400" size={20} />
        </div>

        {/* User List */}
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"  // Added cursor-pointer here
            onClick={() => setSelectedUser(user)}
          >
            <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
            <div className="ml-3">
              <h4 className="text-white font-semibold">{user.name}</h4>
              <p className="text-gray-400 text-sm truncate">{user.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-800">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-900">
          <div className="flex items-center">
            <img src={selectedUser.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
            <div className="ml-3">
              <h4 className="text-white font-semibold">Chat with {selectedUser.name}</h4>
              <p className="text-green-400 text-sm">Online</p>
            </div>
          </div>
          <Video className="text-gray-400 hover:text-white cursor-pointer" size={28} />  {/* Added cursor-pointer here */}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[70%] px-4 py-2 rounded-2xl text-white relative ${
                msg.isSender ? 'ml-auto bg-blue-600' : 'mr-auto bg-gray-700'
              }`}
            >
              {msg.text}
              <div className="text-gray-300 text-xs mt-1 text-right">{msg.time}</div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center p-4 border-t border-gray-700 bg-gray-900">
          <input
            type="text"
            className="flex-1 p-2 rounded-full bg-gray-700 text-white focus:outline-none"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="ml-3 p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white cursor-pointer"  // Added cursor-pointer here
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
