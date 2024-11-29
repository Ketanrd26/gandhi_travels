import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './cardswiper.scss';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import bus from "../../assests/bus.jpg";
import luxury_urbania_hero from "../../assests/vehicles/luxary_urbania/luxary_urbania.jpg";
import kia_carnes_suv_hero from "../../assests/vehicles/kia_carnes/kia_carnes_suv.jpg";
import innova_crysta_hero from "../../assests/vehicles/innova_crysta/innova_cryst.jpg";
import bhartbenz_hero from "../../assests/vehicles/35_ac_bhartbanz/35_ac_bharatbenz.jpg";
import seater_ac_hero from "../../assests/vehicles/20_s_pushback/20_s_pushback.jpg";
import seater_bus_hero from "../../assests/vehicles/17_s_pushback/17_SEATER_pushback.webp";
import modified_luxury from "../../assests/vehicles/26_s_modifeid_pushback/26_s_m_pushback.jpg";

const Cardswiper = () => {


  const vehicledesc = [
    {
      vehicle_image: bus,
      vehicle_name: "Toyota glanza",
    },
    {
      vehicle_image: bus,
      vehicle_name: "New Ertiga",
    },
    {
      vehicle_image: luxury_urbania_hero,
      vehicle_name: "Luxury Urbania",
    },
    {
      vehicle_image: bus,
      vehicle_name: "KIa Sonnet",
    },
    {
      vehicle_image: kia_carnes_suv_hero,
      vehicle_name: "Kia Carnes SUV",
    },
    {
      vehicle_image: innova_crysta_hero,
      vehicle_name: "Innova Crysta",
    },
    {
      vehicle_image: bus,
      vehicle_name: "45 AC volvo eicher",
    },
    {
      vehicle_image: bhartbenz_hero,
      vehicle_name: "35 AC Bharatbenz",
    },
    {
      vehicle_image: modified_luxury,
      vehicle_name: "26 Seater modifeid luxury",
    },
    {
      vehicle_image: seater_ac_hero,
      vehicle_name: "20 seater Ac Pushback Bus",
     
    },
    {
      vehicle_image: seater_bus_hero,
      vehicle_name: "17 Seater Ac Pushback Bus",
   
    },
  ];
  // const cardsData = [
  //   {
  //     id: 1,
  //     title: '17 Seater',
  //     image: seventeen,
  //     link: 'https://sunil.com',
  //   },
  //   {
  //     id: 2,
  //     title: '20 Seater',
  //     image: twenty,
  //     link: 'https://sunil.com',
  //   },
  //   {
  //     id: 3,
  //     title: 'Card 3',
  //     image: 'https://img.freepik.com/free-photo/group-buses-driving-along-road-sunset_157027-4307.jpg?t=st=1731837132~exp=1731840732~hmac=2714c352b94f1db6244737bbcde0b99ea91072f67933222e2c06372e48c475a4&w=826',
  //     link: 'https://sunil.com',
  //   },
  //   {
  //     id: 4,
  //     title: 'Card 4',
  //     image: 'https://img.freepik.com/free-photo/one-working-day-modern-automatic-bus-manufacturing-with-unfinished-cars-workers-protective-uniform-automobile-production_645730-240.jpg?t=st=1731837327~exp=1731840927~hmac=0b37f66581a09cd3c32f473702d652fb7c86dd0d762f3b3186ed4a11fd4e2138&w=740',
  //     link: 'https://sunil.com',
  //   },
  //   {
  //     id: 5,
  //     title: 'Card 5',
  //     image: 'https://img.freepik.com/free-photo/group-buses-driving-along-road-sunset_157027-4307.jpg?t=st=1731837132~exp=1731840732~hmac=2714c352b94f1db6244737bbcde0b99ea91072f67933222e2c06372e48c475a4&w=826',
  //     link: 'https://sunil.com',
  //   },
  //   {
  //     id: 6,
  //     title: 'Card 6',
  //     image: 'https://img.freepik.com/free-photo/one-working-day-modern-automatic-bus-manufacturing-with-unfinished-cars-workers-protective-uniform-automobile-production_645730-240.jpg?t=st=1731837327~exp=1731840927~hmac=0b37f66581a09cd3c32f473702d652fb7c86dd0d762f3b3186ed4a11fd4e2138&w=740',
  //     link: 'https://sunil.com',
  //   },
  // ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000, // Time in milliseconds (3 seconds)
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
  
        className="mySwiper"
      >
        {vehicledesc.map((card) => (
          <SwiperSlide key={card.id} className="nsbox">
            
            <a href={card.link} className="card-link">
              <div className="card">
                <div
                  className="card-img bg-img-cover"
                  style={{ backgroundImage: `url(${card.vehicle_image})` }}
                >
                  <div className="overlay"></div>
                  <h4>{card.vehicle_name}</h4>
                </div>
                
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Cardswiper;
