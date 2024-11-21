import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./testimonial.scss";

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const images = [
    {
      id: 1,
      leftTop:
        "https://as1.ftcdn.net/v2/jpg/03/89/37/68/1000_F_389376832_DzMVS7vo8kI7oKRA0NTfvfNRBCrlCa2G.jpg",
      leftBottom:
        "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
      middleTop:
        "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
      middleBottom:
        "https://as1.ftcdn.net/v2/jpg/03/89/37/68/1000_F_389376832_DzMVS7vo8kI7oKRA0NTfvfNRBCrlCa2G.jpg",
      rightTop:
        "https://as1.ftcdn.net/v2/jpg/03/89/37/68/1000_F_389376832_DzMVS7vo8kI7oKRA0NTfvfNRBCrlCa2G.jpg",
      rightBottom:
        "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
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
