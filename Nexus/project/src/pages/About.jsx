import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold">About Nexus</h1>
        <p className="mt-6 text-lg text-gray-300">
          Nexus is more than just a platform—it's a movement. We bring together curious minds, problem solvers, and change-makers
          to collaborate, create, and innovate. Our aim is to build a digital ecosystem where ideas grow and progress is constant.
        </p>
      </div>

      {/* Mission, Vision, Values */}
      <div className="mt-20 grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-400">Our Mission</h3>
          <p className="mt-3 text-gray-300">
            To empower creators and innovators by providing a seamless platform that nurtures collaboration, growth, and meaningful
            connections across the globe.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-400">Our Vision</h3>
          <p className="mt-3 text-gray-300">
            We envision a connected world where boundaries between creators and consumers fade, and anyone with an idea has the tools
            and support to bring it to life.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-400">Core Values</h3>
          <ul className="mt-3 list-disc list-inside text-gray-300">
            <li>Innovation with purpose</li>
            <li>Integrity in everything</li>
            <li>Community over competition</li>
            <li>Growth through collaboration</li>
            <li>Empathy-driven design</li>
          </ul>
        </div>
      </div>

      {/* What We Offer */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <p className="mt-4 text-gray-300">
          Nexus provides tools and opportunities for users to connect, share knowledge, and build meaningful projects together.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition border border-gray-700">
          <h4 className="text-xl font-semibold text-indigo-400">Community Hub</h4>
          <p className="mt-2 text-gray-300">
            A space to meet like-minded individuals, participate in forums, and join interactive discussions.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition border border-gray-700">
          <h4 className="text-xl font-semibold text-indigo-400">Learning Resources</h4>
          <p className="mt-2 text-gray-300">
            Access curated tutorials, articles, and courses to grow your skills across various fields.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition border border-gray-700">
          <h4 className="text-xl font-semibold text-indigo-400">Collaboration Tools</h4>
          <p className="mt-2 text-gray-300">
            Work together on live projects, share files, give feedback, and co-create in real-time.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Join the Movement</h2>
        <p className="mt-4 text-gray-300">
          Nexus is constantly evolving—and so can you. Be part of a global network where your voice matters, your work is celebrated,
          and your future is limitless.
        </p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
