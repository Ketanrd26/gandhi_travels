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
    {/* First Section */}
      <div className="home-parent parent">
        <Swiper
          cssMode={true}
          navigation={false}
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
            <h1 className="home-heading heading">Gandhi's Travels</h1>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nulla dolor aliquid consectetur!
            </div>
            <div className="btn-group">
              <div className="btn">Contact Now</div>
              <div className="btn-active">About Us</div>
            </div>
          </div>
        </Swiper>
      </div>

      {/* Second Section */}
      <div className="home-about-parent parent">
        <div className="home-about-cont cont">
          <h2>About Us</h2>
          <div className="main-section">
            <div className="left-box"></div>
            <div className="right-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus consequatur libero illo magni est temporibus eveniet harum exercitationem accusantium laborum itaque id ullam inventore a nulla debitis, aliquam quisquam explicabo ipsum quibusdam incidunt! Sapiente tempora magnam necessitatibus vero ab deserunt nisi, aut quaerat voluptatum nobis, ex molestias vel! Maxime!</p>
              <div className="btn">Read More</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
