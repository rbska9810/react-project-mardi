import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const MainVisual = () => {
  return (
    <div className='MainVisual'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL+'./images/image03.png'} alt="images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL+'./images/image04.png'} alt="images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL+'./images/image05.png'} alt="images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL+'./images/image06.png'} alt="images" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainVisual