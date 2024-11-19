import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./testimonial.scss";

const Testimonial = () => {
  const swiperRef = useRef(null);

  // Sample image data array (replace with your actual data)
  const images = [
    {
      id: 1,
      leftTop: "https://as1.ftcdn.net/v2/jpg/03/89/37/68/1000_F_389376832_DzMVS7vo8kI7oKRA0NTfvfNRBCrlCa2G.jpg",
      leftBottom: "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
      middleTop: "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
      middleBottom: "https://as1.ftcdn.net/v2/jpg/03/89/37/68/1000_F_389376832_DzMVS7vo8kI7oKRA0NTfvfNRBCrlCa2G.jpg",
      rightTop: "https://as1.ftcdn.net/v2/jpg/03/89/37/68/1000_F_389376832_DzMVS7vo8kI7oKRA0NTfvfNRBCrlCa2G.jpg",
      rightBottom: "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
    },
    {
      id: 2,
      leftTop: "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
      leftBottom: "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
      middleTop: "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
      middleBottom: "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
      rightTop: "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
      rightBottom: "https://t3.ftcdn.net/jpg/02/98/35/82/240_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
    },
    {
      id: 3,
      leftTop: "https://t4.ftcdn.net/jpg/01/29/68/29/240_F_129682911_QPLvhcTpuxXR1Ih5HG5U56ilELjAQH2g.jpg",
      leftBottom: "https://t4.ftcdn.net/jpg/01/29/68/29/240_F_129682911_QPLvhcTpuxXR1Ih5HG5U56ilELjAQH2g.jpg",
      middleTop: "https://t4.ftcdn.net/jpg/01/29/68/29/240_F_129682911_QPLvhcTpuxXR1Ih5HG5U56ilELjAQH2g.jpg",
      middleBottom: "https://t4.ftcdn.net/jpg/01/29/68/29/240_F_129682911_QPLvhcTpuxXR1Ih5HG5U56ilELjAQH2g.jpg",
      rightTop: "https://t4.ftcdn.net/jpg/01/29/68/29/240_F_129682911_QPLvhcTpuxXR1Ih5HG5U56ilELjAQH2g.jpg",
      rightBottom: "https://t4.ftcdn.net/jpg/01/29/68/29/240_F_129682911_QPLvhcTpuxXR1Ih5HG5U56ilELjAQH2g.jpg",
    },
  ];

  // Handle mouse enter to stop autoplay
  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  // Handle mouse leave to start autoplay
  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div
      className="testimonial-parent parent"
      onMouseEnter={handleMouseEnter} // Add mouse enter to stop autoplay
      onMouseLeave={handleMouseLeave} // Add mouse leave to start autoplay
    >
      <div className="testimonial-cont cont">
        <Swiper
          ref={swiperRef} // Reference for controlling autoplay
          navigation={true}
          loop={true} 
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500, // Delay between slides in milliseconds
            disableOnInteraction: false, // Prevent disabling autoplay after user interaction
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
                  ></div>
                  <div
                    className="bottom bg-img-cover"
                    style={{ backgroundImage: `url(${image.leftBottom})` }}
                  ></div>
                </div>
                <div className="middle-card">
                  <div
                    className="top bg-img-cover"
                    style={{ backgroundImage: `url(${image.middleTop})` }}
                  ></div>
                  <div
                    className="bottom bg-img-cover"
                    style={{ backgroundImage: `url(${image.middleBottom})` }}
                  ></div>
                </div>
                <div className="right-card">
                  <div
                    className="top bg-img-cover"
                    style={{ backgroundImage: `url(${image.rightTop})` }}
                  ></div>
                  <div
                    className="bottom bg-img-cover"
                    style={{ backgroundImage: `url(${image.rightBottom})` }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
