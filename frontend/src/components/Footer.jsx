import React from 'react';
import body1 from '../assets/Body (1).png';
import body2 from '../assets/body2.png';
import Playstore from '../assets/Play store.png';
import Appstore from '../assets/App store.png';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 overflow-hidden'>
      <div className='w-[90%] m-auto bg-red-500 rounded-t-lg shadow-lg p-6 sm:p-8'>

        {/* Text Section */}
        <div className='text-start'>
          <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold py-4 text-white max-w-full sm:max-w-[600px]'>
            Join the Fun – Download MyBindle Now!
          </h1>
          <p className='text-white max-w-full sm:max-w-[600px]'>
            Your Social Network, Your Way. Download MyBindle Now and Be a Part of a Community That’s Always Evolving!
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 mt-6">
            <img src={Playstore} alt="Play Store" className='w-[150px] cursor-pointer' />
            <img src={Appstore} alt="App Store" className='w-[150px] cursor-pointer' />
          </div>
        </div>

        {/* Images Section */}
        <div className="relative w-full flex flex-col items-center justify-center mt-16 md:mt-8 md:h-[400px]">
          {/* Back Phone */}
          <img
            src={body2}
            alt="Phone 2"
            className="w-[200px] sm:w-[300px] md:w-[400px] mb-[-60px] md:absolute md:bottom-[-40px] md:right-[480px]"
          />
          {/* Front Phone */}
          <img
            src={body1}
            alt="Phone 1"
            className="w-[250px] sm:w-[350px] md:w-[450px] relative z-10 md:absolute md:top-[-200px] md:right-[10px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;
