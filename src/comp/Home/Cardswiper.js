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
import { useNavigate } from 'react-router-dom';

const Cardswiper = ({setVehicleDataTransfer}) => {
  const navigate = useNavigate();

  const vehicleData = (index)=>{
    setVehicleDataTransfer(index);
    navigate("/vehicels")
  }

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

  return (
    <>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000, // Time in milliseconds (3 seconds)
          disableOnInteraction: false,
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
        {vehicledesc.map((card, index) => (
          <SwiperSlide key={card.id} className="nsbox"  onClick={()=>vehicleData(index)} >
            
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
      </Swiper> */}


      {/* //new code  */}
      <div className="about-section-parent parent ">
            <div className="about-section-cont cont">
        
                <div className="card-box" >
                {vehicledesc.map((card, index) => (
                   <a href={card.link} key={card.id} onClick={()=>vehicleData(index)} className="card-link" >
                  
                    <div className="card" >
                        <div className="card-img bg-img-cover" style={{ backgroundImage: `url(${card.vehicle_image})` }}></div>
                        <h4>{card.vehicle_name}</h4>
                    </div>
                   
                    </a>
                     ))}

                </div>
                 
            </div>
         </div>
    </>
  );
};

export default Cardswiper;
