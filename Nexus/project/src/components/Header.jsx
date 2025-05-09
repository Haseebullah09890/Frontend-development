import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);

    const handleStorageChange = () => {
      const token = localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="w-[90%] m-auto py-5 px-4 md:px-8 flex items-center justify-between  z-10 relative">
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-10 cursor-pointer" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6 text-gray-300 font-medium text-base">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          {isLoggedIn && <li><Link to="/userdashboard" className="hover:text-blue-500">User Dashboard</Link></li>}
        </ul>
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:block">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="px-5 py-2 rounded-full bg-[#333] text-sm text-white hover:bg-gray-700 cursor-pointer">
            <span>Logout</span>
            <FontAwesomeIcon icon={faRightToBracket} className="ml-2" />
          </button>
        ) : (
          <Link to="/login">
            <button className="px-5 py-2 rounded-full bg-[#333] text-sm text-white hover:bg-gray-700 cursor-pointer">
              <span>Login</span>
              <FontAwesomeIcon icon={faRightToBracket} className="ml-2" />
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full h-[50vh] bg-slate-900 py-4 px-6 flex flex-col space-y-4 md:hidden z-20">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-300 text-base hover:text-blue-500">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-300 text-base hover:text-blue-500">About</Link>
          {isLoggedIn && (
            <Link to="/userdashboard" onClick={() => setMenuOpen(false)} className="text-gray-300 text-base hover:text-blue-500">
              User Dashboard
            </Link>
          )}
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#333] text-sm text-white hover:bg-gray-700 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="mt-4 px-5 py-2 rounded-full bg-[#333] text-sm text-white hover:bg-gray-700 cursor-pointer">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
