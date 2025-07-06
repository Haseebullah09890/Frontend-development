import React from 'react';
import iphone1 from '../assets/iphone 14 Pro (1).png';
import iphone2 from '../assets/iphone 14 Pro (2).png';

const Connect = () => {
  return (
    <div className='w-full bg-gray-100 overflow-hidden pt-10'>
      <div className='w-[90%] m-auto bg-red-500 rounded-lg shadow-lg p-6 sm:p-8'>
        
        {/* Text Section */}
        <div className='text-start'>
          <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold py-4 text-white max-w-full sm:max-w-[600px]'>
            Be the Reason Someone Smiles Today!
          </h1>
          <p className='text-white max-w-full sm:max-w-[600px]'>
            Your generosity can change lives every donation brings hope, support, and a brighter future. Give today and make a difference!
          </p>
          <button className='bg-white text-red-500 font-bold py-2 mt-6 px-4 rounded-xl shadow-md hover:shadow-lg transition duration-200'>
            Donate Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full flex flex-col items-center justify-center mt-16 md:mt-18 md:h-[400px]">
          {/* iPhone 2 - back phone */}
          <img
            src={iphone2}
            alt="iPhone 14 Pro"
            className="w-[200px] sm:w-[300px] md:w-[400px] mb-[-60px] md:absolute md:bottom-[-40px] md:right-[480px]"
          />
          {/* iPhone 1 - front phone */}
          <img
            src={iphone1}
            alt="iPhone 14 Pro"
            className="w-[250px] sm:w-[350px] md:w-[450px] relative z-10 md:absolute md:top-[-200px] md:right-[10px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Connect;
