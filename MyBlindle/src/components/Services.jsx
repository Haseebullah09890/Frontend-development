import React from 'react'

const Services = () => {
  return (
    <div className='min-h-screen bg-gray-100 py-12'>
       <div className='text-center pt-30'>
         <h1 className='text-4xl font-bold mb-4 text-gray-800' >Features That Keep You Hooked!</h1>
         <p className='text-base'>Meet, Chat, Share – Anytime, Anywhere!</p>
       </div>
        <div className='w-[90%] m-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-gray-100 p-8 rounded-lg border border-gray-200 shadow-lg text-center'>
            <h2 className='text-3xl font-bold mb-2 text-gray-800'>🔥 Seamless Connections </h2>
            <p className='text-base text-gray-600'>Stay in touch with friends, family, and like-minded people with just a tap.</p>
          </div>
          <div className='bg-gray-100 p-8 rounded-lg border border-gray-200 shadow-lg text-center'>
            <h2 className='text-3xl font-bold mb-2 text-gray-800'>📸 Share Your Story</h2>
            <p className='text-base text-gray-600'>Upload photos, videos, and updates to let the world know what’s happening in your life.</p>
          </div>
          <div className='bg-gray-100 p-8 rounded-lg border border-gray-200 shadow-lg text-center'>
            <h2 className='text-3xl font-bold mb-2 text-gray-800'>💬 Real-Time Chat</h2>
            <p className='text-base text-gray-600'>Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.</p>
          </div>
          <div className='bg-gray-100 p-8 rounded-lg border border-gray-200 shadow-lg text-center'>
            <h2 className='text-3xl font-bold mb-2 text-gray-800'>🔒 Privacy First</h2>
            <p className='text-base text-gray-600'>Your data, your control. We prioritize your privacy with world-class security.</p>
          </div>
          <div className='bg-gray-100 p-8 rounded-lg border border-gray-200 shadow-lg text-center'>
            <h2 className='text-3xl font-bold mb-2 text-gray-800'>🌎 Discover & Explore</h2>
            <p className='text-base text-gray-600'>Find trending content, join communities, and follow pages that match your interests.</p>
          </div>
          <div className='bg-gray-100 p-8 rounded-lg border border-gray-200 shadow-lg text-center'>
            <h2 className='text-3xl font-bold mb-2 text-gray-800'>💼 Grow Your Business</h2>
            <p className='text-base text-gray-600'> Use our platform to market your brand, connect with customers, and build meaningful relationships.</p>
          </div>
        </div>

    </div>
  )
}

export default Services