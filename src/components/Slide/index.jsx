import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

export default function Slide() {
  return (
    <div className="slide">
      <Swiper
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/slide/slide1.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide/slide2.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide/slide3.svg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
