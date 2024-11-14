import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
const Home = () => {
  return (
    <>
      <div className="home-parent parent">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className="box">
            <div className="swiper-img img1 bg-img-cover">
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="box">
            <div className="swiper-img img2 bg-img-cover">
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
          <div className="home-cont">
            <h1 className="home-heading">Gandhi's Travels</h1>
            <div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla dolor aliquid consectetur!</div>
            <div className="btn-group">
              <div className="btn">Contact Now</div>
              <div className="btn">About Us</div>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
