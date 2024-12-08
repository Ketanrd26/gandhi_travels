import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./testimonial.scss";
//Bus Images 
import img1 from "../../assests/testimoneal/test_1.jpeg";
import img2 from "../../assests/testimoneal/test_2.jpeg";
import img3 from "../../assests/testimoneal/test_3.jpeg";
import img4 from "../../assests/testimoneal/test_4.jpeg";
import img5 from "../../assests/testimoneal/test_5.jpeg";
import img6 from "../../assests/testimoneal/test_6.jpeg";
import img7 from "../../assests/testimoneal/test_7.jpeg";
import img8 from "../../assests/testimoneal/test_8.jpeg";
import img9 from "../../assests/testimoneal/test_9.jpeg";
import img10 from "../../assests/testimoneal/test_10.jpeg";
import img11 from "../../assests/testimoneal/test_11.jpeg";
import img12 from "../../assests/testimoneal/test_12.jpeg";


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
          spaceBetween={10}
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
                
                    onClick={() => openLightbox(image.leftTop)}
                  >
                    <img src={image.leftTop} alt=""/>
                  </div>
                  <div
                    className="bottom bg-img-cover"
                 
                 
                  >
                      <img src={image.leftBottom} alt=""/>
                  </div>
                </div>
                <div className="middle-card">
                  <div
                    className="top bg-img-cover"
             
                    onClick={() => openLightbox(image.middleTop)}
                  >
                     <img src={image.middleTop} alt=""/>
                  </div>
                  <div
                    className="bottom bg-img-cover"
                    
                    onClick={() => openLightbox(image.middleBottom)}
                  >
                     <img src={image.middleBottom} alt=""/>
                  </div>
                </div>
                <div className="right-card">
                  <div
                    className="top bg-img-cover"
                 
                    onClick={() => openLightbox(image.rightTop)}
                  >
                     <img src={image.rightTop} alt=""/>
                  </div>
                  <div
                    className="bottom bg-img-cover"
   
                    onClick={() => openLightbox(image.rightBottom)}
                  >
                     <img src={image.rightBottom} alt=""/>
                  </div>
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
