import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './cardswiper.scss';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Cardswiper = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      image: 'https://img.freepik.com/free-photo/group-buses-driving-along-road-sunset_157027-4307.jpg?t=st=1731837132~exp=1731840732~hmac=2714c352b94f1db6244737bbcde0b99ea91072f67933222e2c06372e48c475a4&w=826',
      link: 'https://sunil.com',
    },
    {
      id: 2,
      title: 'Card 2',
      image: 'https://img.freepik.com/free-photo/one-working-day-modern-automatic-bus-manufacturing-with-unfinished-cars-workers-protective-uniform-automobile-production_645730-240.jpg?t=st=1731837327~exp=1731840927~hmac=0b37f66581a09cd3c32f473702d652fb7c86dd0d762f3b3186ed4a11fd4e2138&w=740',
      link: 'https://sunil.com',
    },
    {
      id: 3,
      title: 'Card 3',
      image: 'https://img.freepik.com/free-photo/group-buses-driving-along-road-sunset_157027-4307.jpg?t=st=1731837132~exp=1731840732~hmac=2714c352b94f1db6244737bbcde0b99ea91072f67933222e2c06372e48c475a4&w=826',
      link: 'https://sunil.com',
    },
    {
      id: 4,
      title: 'Card 4',
      image: 'https://img.freepik.com/free-photo/one-working-day-modern-automatic-bus-manufacturing-with-unfinished-cars-workers-protective-uniform-automobile-production_645730-240.jpg?t=st=1731837327~exp=1731840927~hmac=0b37f66581a09cd3c32f473702d652fb7c86dd0d762f3b3186ed4a11fd4e2138&w=740',
      link: 'https://sunil.com',
    },
    {
      id: 5,
      title: 'Card 5',
      image: 'https://img.freepik.com/free-photo/group-buses-driving-along-road-sunset_157027-4307.jpg?t=st=1731837132~exp=1731840732~hmac=2714c352b94f1db6244737bbcde0b99ea91072f67933222e2c06372e48c475a4&w=826',
      link: 'https://sunil.com',
    },
    {
      id: 6,
      title: 'Card 6',
      image: 'https://img.freepik.com/free-photo/one-working-day-modern-automatic-bus-manufacturing-with-unfinished-cars-workers-protective-uniform-automobile-production_645730-240.jpg?t=st=1731837327~exp=1731840927~hmac=0b37f66581a09cd3c32f473702d652fb7c86dd0d762f3b3186ed4a11fd4e2138&w=740',
      link: 'https://sunil.com',
    },
  ];

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
        {cardsData.map((card) => (
          <SwiperSlide key={card.id} className="nsbox">
            
            <a href={card.link} className="card-link">
              <div className="card">
                <div
                  className="card-img bg-img-cover"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className="overlay"></div>
                  <h4>{card.title}</h4>
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
