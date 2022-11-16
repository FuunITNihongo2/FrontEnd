import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

export default function Slide() {
  const img_slide = [
    "mon1.jpg",
    "mon2.jpg",
    "mon3.jpg",
    "mon4.jpg",
    "mon5.jpg",
    "mon6.jpg",
    "mon7.jpg",
    "mon8.jpg",
    "mon9.jpg",
  ];
  let i = 0;
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
        speed={2000}
        navigation={true}
        effect={"fade"}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {img_slide.map((img) => {
          i = i + 1;
          return (
            <SwiperSlide key={i}>
              <img style={{ height: "70vh" }} src={"/slide/" + img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
