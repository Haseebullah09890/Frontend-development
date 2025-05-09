import React from 'react';

const JoinSteps = () => {
  return (
    <section className="py-16  text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-500">How to Join in 3 Simple Steps</h2>
        <p className="mt-4 text-lg text-gray-300">
          Getting started is easy — follow these steps to connect with the right people.
        </p>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="step-item bg-gray-800 p-3 rounded-lg shadow-lg">
            <div className="rounded-full bg-sky-500 w-16 h-16 mx-auto flex items-center justify-center text-2xl font-semibold">
              1
            </div>
            <h3 className="mt-4 text-xl font-semibold">Sign Up</h3>
            <p className="mt-2 text-gray-400">
              Create your profile and get started in minutes.
            </p>
          </div>

          <div className="step-item bg-gray-800 p-3 rounded-lg shadow-lg">
            <div className="rounded-full bg-sky-500 w-16 h-16 mx-auto flex items-center justify-center text-2xl font-semibold">
              2
            </div>
            <h3 className="mt-4 text-xl font-semibold">Pitch Your Idea</h3>
            <p className="mt-2 text-gray-400">
              Share your business or startup idea to attract investors.
            </p>
          </div>

          <div className="step-item bg-gray-800 p-3 rounded-lg shadow-lg">
            <div className="rounded-full bg-sky-500 w-16 h-16 mx-auto flex items-center justify-center text-2xl font-semibold">
              3
            </div>
            <h3 className="mt-4 text-xl font-semibold">Connect with Investors</h3>
            <p className="mt-2 text-gray-400">
              Start conversations with investors who are ready to back your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSteps;
