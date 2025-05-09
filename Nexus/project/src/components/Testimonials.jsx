import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import p1 from '../assets/p-1.jpeg';
import p2 from '../assets/p-2.jpeg';
import p3 from '../assets/p-3.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform helped me connect with the right investors for my startup. It's been a game-changer!",
      name: 'John Doe',
      role: 'Founder at Tech Innovations',
      image: p1,
    },
    {
      quote: "The platform made it so easy to pitch my idea. I found an investor within weeks!",
      name: 'Sarah Smith',
      role: 'CEO at Creative Solutions',
      image: p2,
    },
    {
      quote: "I never thought I would find the right investor for my project. This made it possible!",
      name: 'James Lee',
      role: 'Co-Founder at GreenTech',
      image: p3,
    },
  ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-sky-500">What Our Users Are Saying</h2>
        <p className="mt-4 text-lg text-gray-300">
          Here’s how we've helped startups find the support they needed.
        </p>

        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-gray-700 rounded-xl shadow-lg h-full flex flex-col justify-between max-w-xl mx-auto">
                  <p className="text-lg italic text-gray-300 mb-6">"{item.quote}"</p>
                  <div className="flex items-center justify-center mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-18 h-18 rounded-full object-cover mr-4 border-2 border-sky-500"
                    />
                    <div className="text-left text-l">
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
