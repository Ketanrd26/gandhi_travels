import React, { useState, useEffect } from "react";
import "./about.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import founder_img from "../../assests/owner.webp";
import mission_img from "../../assests/mission.webp";
import vision_img from "../../assests/vison.webp";
import { PiEyesBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import faq_image from "../../assests/faq_image.webp";
import { GoGoal } from "react-icons/go";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const vismis_data = [
    {
      image: mission_img,
      title: "Mission",
      icon: <GoGoal />,
      desc: "To offer a diverse range of vehicles catering to every travel need, ensuring safety, affordability, and comfort. By leveraging innovation and maintaining high service standards, we aim to be the preferred travel partner for individuals, families, and businesses.",
    },
    {
      image: vision_img,
      title: "Vision",
      icon: <PiEyesBold />,
      desc: "To revolutionize the travel experience by providing reliable, comfortable, and luxury transportation solutions that connect people and places seamlessly. We strive to set new benchmarks in customer satisfaction and operational excellence.",
    },
  ];

  const [faq, setFaq] = useState(null);

  const faqContent = [
    {
      title: "What types of vehicles are available for rental?",
      content:
        "We offer a wide range of vehicles, including cars (e.g., Toyota Glanza, Kia Sonnet, Innova Crysta), travelers (e.g., Luxury Urbania, 17-seater AC pushback buses), and coaches (e.g., 45-seater AC Volvo, 35-seater AC BharatBenz) to suit your travel needs.",
    },
    {
      title: "Do you provide chauffeurs with your vehicles?",
      content:
        "Yes, all our vehicles come with professional and experienced chauffeurs to ensure a safe and comfortable journey for our clients.",
    },
    {
      title: "Can your services cater to corporate events?",
      content:
        "Absolutely! We serve over 150 corporate clients and provide vehicles for business trips, events, and employee transportation needs.",
    },
    {
      title: "Are your vehicles available for family trips and tourism?",
      content:
        "Yes, we cater to family trips, weddings, and tourism, ensuring a memorable and hassle-free travel experience with our range of comfortable and well-maintained vehicles.",
    },
    {
      title: "How do I book a vehicle with Gandhi Travels?",
      content:
        "You can book by contacting us directly at our office in Viman Nagar, Pune, or through our online portal. We recommend booking in advance, especially during peak seasons, to secure your preferred vehicle.",
    },
  ];

  const handleToggle = (index) => {
    setFaq(faq === index ? null : index);
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>About Gandhi Travels | Leading Car Rental Agency in Pune</title>
        <meta
          name="description"
          content="Discover Gandhi Travels, Pune's top car rental agency. Offering luxury cars, tempo travellers, and one-way taxi services for all travel needs. Book your ride today!"
        />
        <meta
          name="keywords"
          content="car rental Pune, Pune to Shirdi cab, one-way taxi Pune to Mumbai, Pune airport drop, tempo traveller rental Pune, luxury car rental, Innova on rent Pune, Honda City rental, group travel Pune, corporate car rental Pune"
        />
        <link rel="canonical" href="https://gandhitravels.co.in/about" />
      </Helmet>
      <Pagetop pagetop_text="About Gandhi's Travels" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" />

      <div className="about-parent parent">
        <div className="about-cont cont">
          <p data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Gandhi Travels was started by Mr.Amar Anant Gandhi in the year 1999,
            We first started initially with one matedor driving by himself then
            slowly added vehicles such as Trax, Sumo and Tavera. Gradually hired
            more chauffers and progressed. in 2007 we had around 9 vehicle and
            10 chauffers included in our Team. Till here everything was managed
            by Amar Gandhi single handedly, then we started to hire office staff
            and here we are today with over 27+ Vehicles diversified in all
            segments such as cars, travellers and coaches on rental basis to more
            than 150+ corporate clients as well as infinite happy families who
            travelled through our cars and buses.
          </p>
        </div>
      </div>

      <div className="founder-parent parent">
        <div className="founder-cont cont " data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
          <div className="founder-image">
            <img src={founder_img} alt="" />
          </div>

          <div className="founder-desc">
            <h2>Mr.Amar Anant Gandhi</h2>

            <p>
              Mr. Amar Anant Gandhi is the visionary founder of Gandhi Travels,
              established in 1999. With a humble beginning of driving a single
              matador, he has grown the business into a trusted brand with a
              fleet of 27+ vehicles, serving over 150 corporate clients and
              countless families.
            </p>

            <a className="btn-active" href="https://wa.me/+918308988188" target="blank">
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      <div className="mission-vision parent">
        <div className="misvis-cont cont">
          {vismis_data.map((item, index) => (
            <div className="vismis_card" key={index} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div
                className="image bg-img-cover"
                style={{ background: `url(${item.image})` }}
              >
                <div className="overlay">
                  <h1>{item.title}</h1>
                </div>
              </div>
              <div className="vis_mis_desc">
                <div className="icon">{item.icon}</div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-parent parent">
        <div
          className="faq-cont cont"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          <div className="left "></div>

          <div className="right">
            <h5>Faq</h5>
            <p>Frequently Asked Questions</p>

            <div className="faq-list">
              {faqContent.map((item, index) => (
                <div className="faq" key={index}>
                  <div
                    className={faq === index ? "heading active" : "heading"}
                    onClick={() => handleToggle(index)}
                  >
                    <p>{item.title}</p>
                    <div className={faq === index ? "icon active" : "icon"}>
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className={faq === index ? "content active" : "content"}>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
