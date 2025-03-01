import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import "./hero.scss";

// Import images
import img1 from "../../assests/vehicles/vovlo/image_5.jpg";
import img2 from "../../assests/36seat.png";
import img3 from "../../assests/vehicles/35_ac_bhartbanz/35_ac_bharatbenz.jpg";
import img4 from "../../assests/12seat.png";
import img5 from "../../assests/vehicles/20_s_pushback/20_s_pushback.jpg";









import img6 from "../../assests/vehicles/kia_carnes/kia.jpg";
import img7 from "../../assests/vehicles/luxary_urbania/urbania.webp";
import img8 from "../../assests/vehicles/vovlo/image_5.jpg";

// mobile image

import mob_img1 from "../../assests/mobile_photos/img1.png";
import mob_img2 from "../../assests/mobile_photos/img2.jpeg";
import mob_img3 from "../../assests/mobile_photos/img3.png";
import mob_img4 from "../../assests/mobile_photos/img4.jpg";
import mob_img5 from "../../assests/mobile_photos/img5.png";


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
   
    { id: 1, image: img1, mob_image: mob_img2, overlay: true },
    { id: 2, image: img2, mob_image: mob_img1, overlay: true },
    { id: 3, image: img3, mob_image: mob_img3, overlay: true },
    { id: 4, image: img4, mob_image: mob_img4, overlay: true },
    { id: 5, image: img5, mob_image: mob_img5, overlay: true },
    // { id: 6, image: img6, mob_image: mob_img6, overlay: true },
    // { id: 7, image: img7, mob_image: mob_img7, overlay: true },
    // { id: 8, image: img8, mob_image: mob_img8, overlay: true },
  ];

  return (
    <div className="hero-parent parent">
      <Swiper
        cssMode={true}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="box">
            <div
              className="swiper-img bg-img-cover"
              style={{ backgroundImage: `url(${!isMobile ? slide.image : slide.mob_image})` }}
              data-aos="fade-down" // Add AOS animation for individual slides
            >
              {/* {slide.overlay && <div className="overlay"></div>} */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="hero-cont" data-aos="fade-down">
        <h1 className="hero-heading heading">Gandhi's Travels</h1>
        <div className="desc">
          Gandhi Travels offers seamless services for airport drops, outstation
          trips, and luxury travel with a diverse fleet.
        </div>

        <div className="btn-group" data-aos="fade-up">
          <a href="/contactus" className="btn">
            Contact Now
          </a>
          <a href="/about" className="btn-active">
            About Us
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
