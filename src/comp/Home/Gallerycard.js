import React from 'react';
import './gallerycard.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import img1 from "../../assests/assets/snap1.jpg";
import img2 from "../../assests/assets/snap2.jpg";
import img3 from "../../assests/assets/snap3.jpg";
import img4 from "../../assests/assets/snap4.jpg";
import img5 from "../../assests/assets/snap5.jpg";
// import img6 from "../../assests/vehicles/kia_carnes/kia_carnes_suv.jpg";
import img7 from "../../assests/vehicles/luxary_urbania/luxary_urbania.jpg";
import img8 from "../../assests/vehicles/vovlo/image_5.jpg";
import img9 from "../../assests/vehicles/kia_carnes/kia_car_2.webp";
import img10 from "../../assests/vehicles/luxary_urbania/luxary_urbania.jpg";
import img11 from "../../assests/vehicles/vovlo/image_5.jpg";
// import img12 from "../../assests/vehicles/kia_carnes/kia_carnes_suv.jpg";
const Gallerycard = () => {
  // Array of image URLs
  const images = [
    img1,img2,img3,img4,img5,img7,img8,img10,img11,img9
  ];

  return (
    <div className="gallerycard-parent parent">
      <div className="gallerycard-cont cont">
        <h2>Our Travel Stories in Pictures</h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
        loop={true}
          slidesPerView="auto"
          initialSlide={1} // Start with the second slide
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true, // Make pagination bullets clickable
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]} // Include Autoplay module
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallerycard;
