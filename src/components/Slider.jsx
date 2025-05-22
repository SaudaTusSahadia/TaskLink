import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import firstPic from '../assets/s-1.jpg';
import secondPic from '../assets/s-2.jpg';
import thirdPic from '../assets/s-3.jpg';
import forthPic from '../assets/s-4.jpg';

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} 
        className="w-full h-110" 
      >
        <SwiperSlide>
          <img src={firstPic} alt="Slide 1" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={secondPic} alt="Slide 2" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thirdPic} alt="Slide 3" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={forthPic} alt="Slide 4" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
