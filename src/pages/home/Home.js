import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./home.scss";
import { GoPackage } from "react-icons/go";

import Cardswiper from "../../comp/Home/Cardswiper";
import Testimonial from "../../comp/Home/Testimonial";
import Gallerycard from "../../comp/Home/Gallerycard";
import Hero from "../../comp/Home/Hero";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css";

const Home = ({ setVehicleDataTransfer }) => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      offset: 100, // Offset from the element
    });
    AOS.refresh(); // Refresh AOS for dynamically loaded content
  }, []);

  return (
    <>
      {/* React Helmet for Meta Tags */}
      <Helmet>
        <title>Gandhi Travels - Premium Car Rentals in Pune</title>
        <meta
          name="description"
          content="Explore Gandhi Travels for top-notch car rental services in Pune. Offering luxury cars, tempo travellers, and one-way cabs for a comfortable journey."
        />
        <meta
          name="keywords"
          content="car rental Pune, luxury car rental Pune, Pune to Shirdi cab, Pune airport drop, tempo traveller rental, corporate travel Pune, one-way taxi Mumbai, Lonavala trip, Goa cab service, Pune local travel, safe travel services"
        />
        <link rel="canonical" href="https://gandhitravels.co.in/" />
      </Helmet>

      {/* First Section */}
      <div className="home-parent parent" data-aos="fade-up">
        <Hero />
      </div>

      {/* Second Section */}
      <div className="home-about-parent parent" data-aos="fade-down">
        <div className="home-about-cont cont">
          <h2>About Us</h2>
          <div className="main-section">
            <div className="left-box bg-img-contain" data-aos="fade-up"></div>
            <div className="right-box" data-aos="fade-up">
              <p>
                Gandhi Travels offers top-notch car rental services across Pune and beyond. From Pune to Shirdi Cabs and Mumbai One-Way Taxis to Airport Drops and Luxury Rentals, we cater to all your travel needs. With a diverse fleet, including Honda City, Innova with Driver, and Tempo Travellers, we ensure every journey is comfortable and reliable. Whether it's a trip to Lonavala, Goa, or corporate travel within Pune, Gandhi Travels is your trusted partner for safe and seamless travel.
              </p>
              <a href="/about" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="home-fac-parent parent" data-aos="fade-up">
        <div className="home-fact-cont cont">
          <h2>Facilities</h2>
          <div className="fac-box" data-aos="fade-up">
            <div className="left-fac" data-aos="fade-up">
              <h4>Our Premium Travel Facilities</h4>
              <p>
                At Gandhi Travels, we prioritize your comfort with top-notch facilities. From well-maintained vehicles to professional drivers, we ensure a smooth, safe, and enjoyable journey. Enjoy flexible booking options, luxury amenities, and reliable services for every trip.
              </p>
            </div>
            <div className="right-fac">
              <div className="left-box">
                <div className="box1" data-aos="fade-up" data-aos-delay="100">
                  <div className="card-head">
                    <div className="number">1</div>
                    <div className="icon">
                      <GoPackage />
                    </div>
                  </div>
                  <h5>Reliable Service</h5>
                  <p>
                    Professional drivers and timely pickups for a hassle-free travel experience.
                  </p>
                </div>
                <div className="box2" data-aos="fade-up" data-aos-delay="200">
                  <div className="card-head">
                    <div className="number">2</div>
                    <div className="icon">
                      <GoPackage />
                    </div>
                  </div>
                  <h5>Luxury Comfort</h5>
                  <p>
                    Modern amenities and spacious vehicles for maximum comfort.
                  </p>
                </div>
              </div>
              <div className="right-box">
                <div className="box3" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-head">
                    <div className="number">3</div>
                    <div className="icon">
                      <GoPackage />
                    </div>
                  </div>
                  <h5>Affordable Pricing</h5>
                  <p>
                    Competitive rates for high-quality travel services.
                  </p>
                </div>
                <div className="box4" data-aos="fade-up" data-aos-delay="400">
                  <div className="card-head">
                    <div className="number">4</div>
                    <div className="icon">
                      <GoPackage />
                    </div>
                  </div>
                  <h5>Wide Range of Vehicles</h5>
                  <p>
                    Choose from luxury cars, SUVs, and tempo travellers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="forth-sec-parent bg-img-cover parent" data-aos="fade-up">
        <div className="overlay"></div>
        <h2>Luxury, Comfort, and Versatility – Our Vehicles</h2>
        <div className="forth-sec-cont cont">
          <Cardswiper setVehicleDataTransfer={setVehicleDataTransfer} />
        </div>
      </div>

      {/* Fifth Section */}
      <div className="fifth-section-parent parent" data-aos="fade-up">
        <div className="fifth-section-cont cont">
          <h2>
            Our <span>Customer Reviews</span>
          </h2>
          <div className="test">
            <Testimonial />
          </div>
        </div>
      </div>

      {/* Sixth Section */}
      <div className="six-section-parent parent" data-aos="fade-up">
        <div className="six-section-cont cont">
          <Gallerycard />
        </div>
      </div>
    </>
  );
};

export default Home;
