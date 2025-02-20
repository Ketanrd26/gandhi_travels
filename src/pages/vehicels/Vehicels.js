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
import urb1 from "../../assests/vehicles/luxary_urbania/urb_1.webp"
import urb2 from "../../assests/vehicles/luxary_urbania/urb_2.webp"
import urb3 from "../../assests/vehicles/luxary_urbania/urb_3.webp"
import urb4 from "../../assests/vehicles/luxary_urbania/urb_4.webp"
import urb5 from "../../assests/vehicles/luxary_urbania/urb_5.webp"

// kia sonnet


// kia carnes
import kia_carnes_icon from "../../assests/icons/kia_carnes_icon.webp";
import kia_carnes_icon_fill from "../../assests/icons/kia_carnes_icon_red.webp";
import kia_carnes_suv_hero from "../../assests/vehicles/kia_carnes/kia_carnes_suv.jpg";
import kia_car_1 from "../../assests/vehicles/kia_carnes/kia_carnes_1.webp"
import kia_car_2 from "../../assests/vehicles/kia_carnes/kia_car_2.webp"
import kia_car_3 from "../../assests/vehicles/kia_carnes/kia_car_3.webp"
import kia_car_4 from "../../assests/vehicles/kia_carnes/kia_car_4.webp"
import kia_car_5 from "../../assests/vehicles/kia_carnes/kia_car_5.webp"

// innova crysta

import innova_crysta_hero from "../../assests/vehicles/innova_crysta/innova_cryst.jpg";
import innova1 from "../../assests/vehicles/innova_crysta/innova_1.webp"
import innova2 from "../../assests/vehicles/innova_crysta/innova_2.webp"
import innova3 from "../../assests/vehicles/innova_crysta/innova_3.webp"
import innova4 from "../../assests/vehicles/innova_crysta/innova_4.webp"

// 35 ac bhartbenz
import bhartbenz_hero from "../../assests/vehicles/35_ac_bhartbanz/35_ac_bharatbenz.jpg";
import bt1 from "../../assests/vehicles/35_ac_bhartbanz/35_ac_1.webp"
import bt2 from "../../assests/vehicles/35_ac_bhartbanz/35_ac_2.webp"
import bt3 from "../../assests/vehicles/35_ac_bhartbanz/35_ac_3.webp"
import bt4 from "../../assests/vehicles/35_ac_bhartbanz/35_ac_4.webp"

// 26 seater pushback
import modified_luxury from "../../assests/vehicles/26_s_modifeid_pushback/26_s_m_pushback.jpg";
import ml1 from "../../assests/vehicles/26_s_modifeid_pushback/26_s_1.webp"
import ml2 from "../../assests/vehicles/26_s_modifeid_pushback/26_s_2.webp"
import ml3 from "../../assests/vehicles/26_s_modifeid_pushback/26_s_3.webp"
import ml4 from "../../assests/vehicles/26_s_modifeid_pushback/26_s_4.webp"
import ml5 from "../../assests/vehicles/26_s_modifeid_pushback/26_s_5.webp"
// 20 seater ac pushback
import seater_ac_hero from "../../assests/vehicles/20_s_pushback/20_s_pushback.jpg";
import sp1 from "../../assests/vehicles/20_s_pushback/20_s_1.webp"
import sp2 from "../../assests/vehicles/20_s_pushback/20_s_2.webp"
import sp3 from "../../assests/vehicles/20_s_pushback/20_s_3.webp"
import sp4 from "../../assests/vehicles/20_s_pushback/20_s_4.webp"
import sp5 from "../../assests/vehicles/20_s_pushback/20_s_5.webp"
// 17 seater ac pushback
import seater_bus_hero from "../../assests/vehicles/17_s_pushback/17_SEATER_pushback.webp";
import sb1 from "../../assests/vehicles/17_s_pushback/17_s_1.webp"
import sb2 from "../../assests/vehicles/17_s_pushback/17_s_2.webp"
import sb3 from "../../assests/vehicles/17_s_pushback/17_s_3.webp"
import sb4 from "../../assests/vehicles/17_s_pushback/17_s_4.webp"
import sb5 from "../../assests/vehicles/17_s_pushback/17_S_5.webp"
import { Helmet } from "react-helmet";



const Vehicels = ({vehicleDataTransfer,setVehicleDataTransfer}) => {

  console.log(vehicleDataTransfer, "sdfsdf")
  const vehicelsHeading = [
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
      vehicle_name: "20 seater Ac Pushback Bus",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "Luxury Urbania",
    },
    {
      image1: kia_carnes_icon,
      image2: kia_carnes_icon_fill,
      vehicle_name: "Kia Carnes SUV",
    },
    {
      image1: bus_icon,
      image2: bus_icon_fill,
      vehicle_name: "26 Seater modifeid luxury",
    },
      
    {
      image1: kia_carnes_icon,
      image2: kia_carnes_icon_fill,
      vehicle_name: "Innova Crysta",
    },
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
      vehicle_name: "KIa Sonnet",
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
      vehicle_name: "45 AC volvo eicher",
      image: [volvo1, volvo2, volvo3, volvo4, volvo5],
      vehicle_desc:
        "The 45-seater AC Volvo Eicher is ideal for large group tours, school trips, or corporate outings. Known for its comfortable seating and smooth suspension, it ensures an enjoyable ride for long journeys.",
    },


    {
      vehicle_image: bhartbenz_hero,
      vehicle_name: "35 AC Bharatbenz",
      image: [bt1, bt2, bt3, bt4, bhartbenz_hero],
      vehicle_desc:
        "The 35-seater AC BharatBenz is perfect for medium-sized group travel. Its modern features and air-conditioned interiors make it a top choice for pilgrimage tours, destination weddings, or corporate events.",
    },

    {
      vehicle_image: seater_ac_hero,
      vehicle_name: "20 seater Ac Pushback Bus",
      image: [sp1, sp2, sp3, sp4, sp5],
      vehicle_desc:
        "The 20-seater AC pushback bus is perfect for small group tours. Its reclining seats and ample legroom make it ideal for intercity travel, family trips, or office outings.",
    },
    {
      vehicle_image: luxury_urbania_hero,
      vehicle_name: "Luxury Urbania",
      image: [urb1, urb2, urb3, urb4, urb5],
      vehicle_desc:
        "The Luxury Urbania redefines premium travel with its modern design and top-notch features. Perfect for corporate travel or VIP tours, this vehicle combines elegance with a luxurious ride experience.",
    },

    {
      vehicle_image: kia_carnes_suv_hero,
      vehicle_name: "Kia Carnes SUV",
      image: [kia_car_1, kia_car_2, kia_car_3, kia_car_4, kia_car_5],
      vehicle_desc:
        "The Kia Carens offers versatility and comfort for family vacations or business trips. Its spacious interiors and high-end features make it a reliable choice for outstation trips or long drives.",
    },

    {
      vehicle_image: modified_luxury,
      vehicle_name: "26 Seater modifeid luxury",
      image: [ml1, ml2, ml3, ml4, ml5],
      vehicle_desc:
        "This 26-seater luxury bus is designed for a premium group travel experience. With its plush seating and modified interiors, it’s ideal for VIP tours, destination weddings, or exclusive group outings.",
    },

    {
      vehicle_image: innova_crysta_hero,
      vehicle_name: "Innova Crysta",
      image: [innova1, innova2, innova3, innova4, innova_crysta_hero],
      vehicle_desc:
        "The Toyota Innova Crysta is a trusted name for luxury family travel or corporate tours. Its spacious seating, powerful engine, and refined interiors make it the best choice for outstation trips or executive travel.",
    },
    {
      vehicle_image: bus,
      vehicle_name: "Toyota glanza",
      image: [volvo1, volvo1, volvo1, volvo1, volvo1],
      vehicle_desc:
        "The Toyota Glanza offers a perfect combination of style, comfort, and fuel efficiency. Ideal for small family trips or business travel, this compact hatchback ensures a smooth journey with premium interiors. A great option for affordable city tours or outstation trips.",
    },
    {
      vehicle_image: bus,
      vehicle_name: "New Ertiga",
      image: [volvo1, volvo1, volvo1, volvo1, volvo1],
      vehicle_desc:
        "The New Ertiga is a spacious 7-seater MPV, ideal for family vacations or group outings. With its advanced safety features and ample luggage space, it ensures a comfortable ride for long journeys or airport transfers.",
    },
   
    {
      vehicle_image: bus,
      vehicle_name: "KIa Sonnet",
      image: [volvo1, volvo2, volvo3, volvo4, volvo5],
      vehicle_desc:
        "A stylish and compact SUV, the Kia Sonet is perfect for couples or small groups exploring city attractions or nearby tourist destinations. Its cutting-edge technology ensures a safe and enjoyable journey for weekend getaways.",
    },
  
  

   
 
    {
      vehicle_image: seater_bus_hero,
      vehicle_name: "17 Seater Ac Pushback Bus",
      image: [sb1, sb2, sb3, sb4, sb5],
      vehicle_desc:
        "Compact yet spacious, the 17-seater AC pushback bus is great for short group trips or city sightseeing tours. Its air-conditioned interiors ensure a comfortable experience for all passengers.",
    },
  ];
  // const [data, setData] = useState(0);


  // const dataMapping = (index) => {
  //   setData(index);
  //   setVehicleDataTransfer(null)
  // };

  return (
    <>
     <Helmet>
        <title>Our Vehicles | Top Car Rental Services in Pune - Gandhi Travels</title>
        <meta
          name="description"
          content="Explore the diverse fleet of vehicles offered by Gandhi Travels. From luxury cars to Tempo Travellers, we provide reliable, comfortable, and affordable transportation solutions."
        />
        <meta
          name="keywords"
           content="vehicle rental Pune, luxury car rental, tempo traveller rental, car rental services Pune, Honda City rental, Innova rental, Tempo Traveller Pune, corporate travel vehicles, Pune vehicle rental, car hire Pune, Pune to Shirdi cab, Pune to Mumbai taxi, airport taxi service, luxury rental cars, Goa travel car hire, Pune to Lonavala taxi, Tempo Traveller for group travel, family travel Pune, corporate transportation Pune, premium vehicle hire, vehicle rental with driver, reliable car rentals Pune, best car hire Pune, travel solutions Pune"
        />
        <link rel="canonical" href="https://gandhitravels.co.in/vehicels" />
      </Helmet>
      <Pagetop pagetop_text="Vehicels" />

      <div class="vehicle-desc-parent parent">
        <div class="vehicle-desc-cont cont">
          <div class="top-nav">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              centeredSlides={false}
              onSlideChange={setVehicleDataTransfer(vehicleDataTransfer)}
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
                    vehicleDataTransfer === index ? "swiperslide active" : "swiperslide"
                  }
                  onClick={() => setVehicleDataTransfer(index)}
                >
                  <a class="vehicle" href="#data" key={index}>
                    <img
                      src={ vehicleDataTransfer === index ? item.image2 : item.image1}
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
              <img src={`${vehicledesc[ vehicleDataTransfer].vehicle_image}`} alt="" />
            </div>
            <div class="right-side">
              <h1>{vehicledesc[ vehicleDataTransfer].vehicle_name}</h1>
              <p>{vehicledesc[ vehicleDataTransfer].vehicle_desc}</p>
            </div>
          </div>

          <div className="vehicle_images">
            {vehicledesc[vehicleDataTransfer].image.map((item, index) => (
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
