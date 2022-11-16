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
          <img style={{height:"90vh"}} src="/slide/hinh1.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"90vh"}} src="/slide/hinh2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"90vh"}} src="/slide/hinh3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
