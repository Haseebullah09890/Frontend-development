import React from 'react';
import Herosimg from '../assets/Group 1.png'; // Make sure the image path and name are correct
import card from '../assets/card.png'; // Adjust the path as necessary
import card1 from '../assets/card-1.png'; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className="w-[90%] h-[80vh] m-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-start opacity-0 animate-fade-in flex flex-col justify-center h-full">
        <h1 className="text-5xl md:text-7xl text-white font-bold capitalize">stay connected</h1>
        <h2 className="text-3xl md:text-6xl text-white mt-6 font-bold capitalize">stay social</h2>
        <h3 className="text-2xl md:text-5xl text-white mt-6 font-bold capitalize">stay you!</h3>
        <p className="text-base md:text-lg text-white mt-5">
          A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
        </p>
        <button className="p-4 capitalize bg-white text-red-500 w-fit mt-4 rounded-lg">
          get started
        </button>
      </div>

      {/* Image Section - hidden on mobile */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center opacity-0 animate-fade-in h-full relative">
        <img
          src={Herosimg}
          alt="Hero section illustration"
          className="max-w-full h-auto relative top-[60px] right-[-50px] md:max-w-[400px]"
        />
        <div className="absolute top-[100px] left-0">
          <img src={card} alt="" />
        </div>
        <div className="absolute bottom-0 right-[-100px]">
          <img src={card1} alt="" className="h-[140px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
