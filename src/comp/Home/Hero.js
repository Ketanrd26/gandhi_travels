import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./hero.scss";

// Import images
import img1 from "../../assests/vehicles/17_s_pushback/17seater.webp";
import img2 from "../../assests/vehicles/20_s_pushback/20_s_pushback.jpg";
import img3 from "../../assests/vehicles/26_s_modifeid_pushback/26seat.webp";
import img4 from "../../assests/vehicles/35_ac_bhartbanz/35_ac_bharatbenz.jpg";
import img5 from "../../assests/vehicles/innova_crysta/innova_cryst.jpg";
import img6 from "../../assests/vehicles/kia_carnes/kia.jpg";
import img7 from "../../assests/vehicles/luxary_urbania/urbania.webp";
import img8 from "../../assests/vehicles/vovlo/image_5.jpg";
const Hero = () => {
  // Array of image data
  const slides = [
    { id: 2, image: img2, overlay: true },
    { id: 1, image: img1, overlay: true },
    { id: 3, image: img3, overlay: true },
    { id: 4, image: img4, overlay: true },
    { id: 5, image: img5, overlay: true },
    { id: 6, image: img6, overlay: true },
    { id: 7, image: img7, overlay: true },
    { id: 8, image: img8, overlay: true },
  ];

  return (
    <div className="hero-parent parent">
      <Swiper
        cssMode={true}
        navigation={false}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {/* Map through slides array */}
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="box">
            <div
              className="swiper-img bg-img-cover"
              style={{ backgroundImage: `url(${slide.image})` }} // Dynamically set background image
            >
              {slide.overlay && <div className="overlay"></div>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-cont">
        <h1 className="hero-heading heading">Gandhi's Travels</h1>
        <div className="desc">
        Gandhi Travels offers seamless services for airport drops, outstation trips, and luxury travel with a diverse fleet.
        </div>
        <div className="btn-group">
          <a href="/contactus" className="btn">Contact Now</a>
          <a href="/about" className="btn-active">About Us</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
