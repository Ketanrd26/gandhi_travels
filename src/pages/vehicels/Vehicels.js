import React, { useEffect, useState } from "react";
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

// toyota glanza

//  new eritga

// luxury urbania
import luxury_urbania_hero from "../../assests/vehicles/luxary_urbania/luxary_urbania.jpg";

// kia sonnet


// kia carnes

import kia_carnes_suv_hero from "../../assests/vehicles/kia_carnes/kia_carnes_suv.jpg";

// innova crysta

import innova_crysta_hero from "../../assests/vehicles/innova_crysta/innova_cryst.jpg";

// 35 ac bhartbenz
import bhartbenz_hero from "../../assests/vehicles/35_ac_bhartbanz/35_ac_bharatbenz.jpg";

// 26 seater pushback
import modified_luxury from "../../assests/vehicles/26_s_modifeid_pushback/26_s_m_pushback.jpg";

// 20 seater ac pushback
import seater_ac_hero from "../../assests/vehicles/20_s_pushback/20_s_pushback.jpg";

// 17 seater ac pushback
import seater_bus_hero from "../../assests/vehicles/17_s_pushback/17_SEATER_pushback.webp";

const Vehicels = () => {
  const vehicelsHeading = [
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "Toyota glanza",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "New Ertiga",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "Luxury Urbania",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "KIa Sonnet",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "Kia Carnes SUV",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "Innova Crysta",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "45 AC volvo eicher",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "35 AC Bharatbenz",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "26 Seater modifeid luxury",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "20 seater Ac Pushback Bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "17 Seater Ac Pushback Bus",
    },
  ];

  const vehicledesc = [
    {
      vehicle_image: bus,
      vehicle_name: "Toyota glanza",
      image: [volvo1, volvo1, volvo1, volvo1, volvo1],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: bus,
      vehicle_name: "New Ertiga",
      image: [volvo1, volvo1, volvo1, volvo1, volvo1],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: luxury_urbania_hero,
      vehicle_name: "Luxury Urbania",
      image: [volvo1, volvo1, volvo1, volvo1, volvo1],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: bus,
      vehicle_name: "KIa Sonnet",
      image: [volvo1, volvo2, volvo3, volvo4, volvo5],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: kia_carnes_suv_hero,
      vehicle_name: "Kia Carnes SUV",
      image: [volvo1, volvo2, volvo3, volvo4, volvo5],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: innova_crysta_hero,
      vehicle_name: "Innova Crysta",
      image: [volvo1, volvo2, volvo3, volvo4, volvo5],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: bus,
      vehicle_name: "45 AC volvo eicher",
      image: [volvo1, volvo2, volvo3, volvo4, volvo5],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: bhartbenz_hero,
      vehicle_name: "35 AC Bharatbenz",
      image: [volvo1, volvo2, volvo3, volvo4, volvo5],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: modified_luxury,
      vehicle_name: "26 Seater modifeid luxury",
      image: [volvo1, volvo2, volvo3, volvo4, volvo5],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: seater_ac_hero,
      vehicle_name: "20 seater Ac Pushback Bus",
      image: [volvo1, volvo2, volvo3, volvo4, volvo5],
      vehicle_desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    },
    {
      vehicle_image: seater_bus_hero,
      vehicle_name: "17 Seater Ac Pushback Bus",
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
      <Pagetop pagetop_text="Vehicels" />

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
              breakpoints={{
                300: {
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
                  <a class="vehicle" href="#data" key={index}>
                    <img
                      src={data === index ? item.image2 : item.image1}
                      alt=""
                    />

                    <p>{item.vehicle_name}</p>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div class="blank-div" id="data"></div>
          <div class="vehi-description">
            <div class="image bg-img-cover">
              <img src={`${vehicledesc[data].vehicle_image}`} alt="" />
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
