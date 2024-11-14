import React, { useState } from "react";
import "./vehicel.scss";
import Pagetop from "../../comp/pagetop/Pagetop";

// vehicels images
import bus from "../../assests/bus.jpg";

// icons
import bus_icon from "../../assests/icons/bus_icon.webp";
import bus_icon_fill from "../../assests/icons/bus_icon_fill.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// 45 ac volo eicher
import volvo1 from "../../assests/vehicles/vovlo/image_1.jpg";
import volvo2 from "../../assests/vehicles/vovlo/image_2.jpg";
import volvo3 from "../../assests/vehicles/vovlo/image_3.jpg";
import volvo4 from "../../assests/vehicles/vovlo/image_4.jpg";
import volvo5 from "../../assests/vehicles/vovlo/image_5.jpg";

const Vehicels = () => {
  const vehicelsHeading = [
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "17 seater ac pushback bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "20 seater ac pushback bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "26 seater ac pushback bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "45 Ac Volvo Eicher Bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "17 seater ac pushback bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "17 seater ac pushback bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "17 seater ac pushback bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "17 seater ac pushback bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "17 seater ac pushback bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "17 seater ac pushback bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "17 seater ac pushback bus",
    },
  ];

  const vehicledesc = [
    {
      vehicle_image: bus,
      vehicle_name: "17 seater ac pushback bus",
      image: [volvo1, volvo1, volvo1, volvo1, volvo1],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: bus,
      vehicle_name: "20 seater ac pushback bus",
      image: [volvo1, volvo1, volvo1, volvo1, volvo1],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: bus,
      vehicle_name: "26 seater ac pushback bus",
      image: [volvo1, volvo1, volvo1, volvo1, volvo1],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: bus,
      vehicle_name: "45 Ac Volvo Eicher Bus",
      image: [volvo1, volvo2, volvo3, volvo4, volvo5],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
  ];
  const [data, setData] = useState(0);
  const dataMapping = (index) => {
    setData(index);
  };

  return (
    <>
      <Pagetop />

      <div class="vehicle-desc-parent parent">
        <div class="vehicle-desc-cont cont">
          <div class="top-nav">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={false}
              autoplay={{
                delay: 25000000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                300:{
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {vehicelsHeading.map((item, index) => (
                <SwiperSlide
                  className={
                    data === index ? "swiperslide active" : "swiperslide"
                  }
                  onClick={() => dataMapping(index)}
                >
                  <div class="vehicle" key={index}>
                    <img
                      src={data === index ? item.image2 : item.image1}
                      alt=""
                    />

                    <p>{item.vehicle_name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div class="vehi-description">
            <div class="image bg-img-cover">
              <div
                class="vehicle_image bg-img-cover"
                style={{
                  backgroundImage: `url(${vehicledesc[data].vehicle_image})`,
                }}
              ></div>
            </div>
            <div class="right-side">
              <h1>{vehicledesc[data].vehicle_name}</h1>
              <p>{vehicledesc[data].vehicle_desc}</p>
            </div>
          </div>

          <div className="vehicle_images">
              {vehicledesc[data].image.map((item, index) => (
              <div
                className="vehi_image bg-img-cover"
                style={{ backgroundImage: `url(${item})` }}
                key={index}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicels;
