import React, { useState } from "react";
import "./vehicel.scss";
import Pagetop from "../../comp/pagetop/Pagetop";

// vehicels images

import bus_icon from "../../assests/icons/bus_icon.webp";
import bus_icon_fill from "../../assests/icons/bus_icon_fill.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "17 seater ac pushback bus",
    },
  ];

  const [data, setData] = useState([]);
  const vehicledesc = [
    {
      vehicle_image: bus_icon,
      vehicle_name: "17 seater ac pushback bus",
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: bus_icon,
      vehicle_name: "17 seater ac pushback bus",
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: bus_icon,
      vehicle_name: "17 seater ac pushback bus",
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: bus_icon,
      vehicle_name: "17 seater ac pushback bus",
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
  ];

  const dataMapping = (index) => {
    setData(vehicledesc[index]);
  };

  console.log(data, "....");
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
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {vehicelsHeading.map((item, index) => (
                <SwiperSlide
                  className="swiperslide"
                  onClick={() => dataMapping(index)}
                >
                  <div class="vehicle" key={index}>
                    <img src={item.image1} alt="" />
                    <p>{item.vehicle_name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {data
            .filter((item) => item.vehicle_name)
            .map((item, index) => (
              <div class="vehi-description" key={index}>
                <div class="image"></div>
                <div class="right-side">
                  <h1>{item.vehicle_name}</h1>
                  <p>{item.vehicle_desc}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Vehicels;
