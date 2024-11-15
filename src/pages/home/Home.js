import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { GoPackage } from "react-icons/go";
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

      {/* Third Section */}
      <div className="home-fac-parent parent">
        <div className="home-fact-cont cont">
          <h2>Facilities</h2>
          <div className="fac-box">
            <div className="left-fac">
              <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam id labore dolore delectus reiciendis! Adipisci animi odio cupiditate minus laborum?</p>
            </div>
            
            <div className="right-fac">
            <div className="left-box">
              <div className="box1">
                <div className="card-head">
                  <div className="number">1</div>
                  <div className="icon"><GoPackage /></div>
                </div>
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sed.</p>
              </div>
              <div className="box2">
              <div className="card-head">
                  <div className="number">1</div>
                  <div className="icon"><GoPackage /></div>
                </div>
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sed.</p>
              </div>
            </div>
            <div className="right-box">
            <div className="box3">
              <div className="card-head">
                  <div className="number">1</div>
                  <div className="icon"><GoPackage /></div>
                </div>
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sed.</p>
              </div>
              <div className="box4">
              <div className="card-head">
                  <div className="number">1</div>
                  <div className="icon"><GoPackage /></div>
                </div>
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sed.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
