import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./testimonial.scss";
//Bus Images 
import img1 from "../../assests/vehicles/17_s_pushback/17_SEATER_pushback.webp";
import img2 from "../../assests/vehicles/20_s_pushback/20_s_2.webp";
import img3 from "../../assests/vehicles/20_s_pushback/20_s_pushback.jpg";
import img4 from "../../assests/vehicles/26_s_modifeid_pushback/26_s_m_pushback.jpg";
import img5 from "../../assests/vehicles/26_s_modifeid_pushback/26_s_5.webp";
import img6 from "../../assests/vehicles/35_ac_bhartbanz/35_ac_bharatbenz.jpg";
import img7 from "../../assests/vehicles/innova_crysta/innova_cryst.jpg";
import img8 from "../../assests/vehicles/innova_crysta/innova_4.webp";
import img9 from "../../assests/vehicles/kia_carnes/kia_car_2.webp";
import img10 from "../../assests/vehicles/luxary_urbania/luxary_urbania.jpg";
import img11 from "../../assests/vehicles/vovlo/image_5.jpg";
import img12 from "../../assests/vehicles/kia_carnes/kia_carnes_suv.jpg";


const Testimonial = () => {
  const swiperRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const images = [
    {
      id: 1,
      leftTop: img1,
      leftBottom: img2,
      middleTop: img3,
      middleBottom: img4,
      rightTop: img5,
      rightBottom: img6,
    },
    {
      id: 2,
      leftTop: img7,
      leftBottom: img8,
      middleTop: img9,
      middleBottom: img10,
      rightTop: img11,
      rightBottom: img12,
    },
    
  ];

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  return (
    <div
      className="testimonial-parent parent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="testimonial-cont cont">
        <Swiper
          ref={swiperRef}
          navigation={true} // Enable navigation
          loop={true}
          modules={[Navigation, Autoplay]} // Ensure Navigation module is included
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="card-main-box">
                <div className="left-card">
                  <div
                    className="top bg-img-cover"
                    style={{ backgroundImage: `url(${image.leftTop})` }}
                    onClick={() => openLightbox(image.leftTop)}
                  ></div>
                  <div
                    className="bottom bg-img-cover"
                    style={{ backgroundImage: `url(${image.leftBottom})` }}
                    onClick={() => openLightbox(image.leftBottom)}
                  ></div>
                </div>
                <div className="middle-card">
                  <div
                    className="top bg-img-cover"
                    style={{ backgroundImage: `url(${image.middleTop})` }}
                    onClick={() => openLightbox(image.middleTop)}
                  ></div>
                  <div
                    className="bottom bg-img-cover"
                    style={{ backgroundImage: `url(${image.middleBottom})` }}
                    onClick={() => openLightbox(image.middleBottom)}
                  ></div>
                </div>
                <div className="right-card">
                  <div
                    className="top bg-img-cover"
                    style={{ backgroundImage: `url(${image.rightTop})` }}
                    onClick={() => openLightbox(image.rightTop)}
                  ></div>
                  <div
                    className="bottom bg-img-cover"
                    style={{ backgroundImage: `url(${image.rightBottom})` }}
                    onClick={() => openLightbox(image.rightBottom)}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={lightboxImage} alt="Preview" />
            <span className="close-button" onClick={closeLightbox}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
