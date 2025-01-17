'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-screen">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/your-image1.jpg')" }}
          >
            <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-md max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold">
                Transform your fitness journey with Fitelo&apos;s strength &
                conditioning
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Fitness that fits your schedule, your goal, and your lifestyle
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/your-image2.jpg')" }}
          >
            <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-md max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold">
                Finally, Personal Training that&apos;s more Convinient and less
                expensive.
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Injury Rehabilitation Success and Personal Training
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/your-image3.jpg')" }}
          >
            <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-md max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold">
                Exercise Safety: Personal Training with Old Injuries
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Fitness that fits your schedule, your goal, and your lifestyle
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
