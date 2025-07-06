import React from 'react';
import aboutimg from '../assets/Group 3.png';

const Aboutus = () => {
  return (
    <div className='w-full bg-gray-100'>
      <div className="w-[90%] min-h-screen m-auto flex flex-col md:flex-row items-center justify-between gap-12 py-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={aboutimg} alt="About Us" className="w-full h-auto mx-auto md:mx-0" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="w-full text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800">
              Where Every Click Sparks a Connection!
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              A small act of kindness today can create a lifetime of impact for someone in need. 
              Give from the heart and change a life!
            </p>
          </div>

          {/* Features Section */}
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 shadow-lg text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">🎥 Short Videos & Reels</h2>
              <p>Share engaging, bite-sized content that keeps everyone entertained.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 shadow-lg text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">🔔 Smart Notifications</h2>
              <p>Stay updated on what matters without the noise.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 shadow-lg text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">👥 Interest-Based Communities</h2>
              <p>Join groups and discussions that match your passion.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Aboutus;
