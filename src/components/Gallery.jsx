import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import video from "../assets/video.mp4"
// import image4 from "../assets/image4.jpg";
// import image5 from "../assets/image5.jpg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Gallery.css";

// const images =video;
// 
const Gallery = () => {
  return (
    <div>
    
      <div className="tit-gal">Sealed with Love💝</div>

    <div className="gallery-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="wedding-slider"
      >
        {/*  */}
        {/* {images.map((src, index) => ( */}
          <SwiperSlide >
          <SwiperSlide>
  {/* <video
    className="slide-image"
    src={video}
    autoPlay
    loop
    muted
    playsInline
  /> */}
</SwiperSlide>

          </SwiperSlide>
        {/* ))} */}
      </Swiper>
    </div>
    </div>
  );
};

export default Gallery;
