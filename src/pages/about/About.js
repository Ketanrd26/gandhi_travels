import React, { useState } from "react";
import "./about.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import founder_img from "../../assests/dummy_img.png";
import mission_img from "../../assests/mission.webp";
import vision_img from "../../assests/vison.webp";
import { PiEyesBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import faq_image from "../../assests/faq_image.webp"
import { GoGoal } from "react-icons/go";
import { Helmet } from "react-helmet";
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
      title: "How much will it cost?",
      content:
        "Price depends on size, detail, and how long the session takes. Smaller pieces usually start at a set minimum, and larger or more detailed ones can go up from there. We can give you an estimate when you show us the design and placement!",
    },
    {
      title: "How should I prepare for my tattoo appointment?",
      content:
        "Definitely eat a good meal beforehand so you don’t feel lightheaded. Stay hydrated, and wear something comfortable that gives easy access to the area we’re tattooing. Also, bring good vibes – it’ll make the session way more fun!",
    },
    {
      title: "How do I decide on tattoo placement?",
      content:
        "Placement is key! Think about how visible you want it to be and how the design fits with your body. Some spots are more painful, but if you’re unsure, we can suggest areas that work well with your chosen design.",
    },
    {
      title: "How do I choose the right design?",
      content:
        "Choosing a design is all about what feels right to you. If it’s your first tattoo, you might want something meaningful or simple to start with. We can also brainstorm together if you have an idea but aren’t sure. Bringing in reference photos helps too!",
    },
    {
      title: "Can I get a tattoo cover-up, and how does it work?",
      content:
        "Yes, you can! Tattoo cover-ups involve designing a new piece to effectively conceal your old tattoo. We often use darker colors or intricate designs to ensure a seamless blend. Just stop by for a consultation, and we’ll help you create a cover-up that looks fantastic!",
    },
  ];
  const handleToggle = (index) => {
    // If the clicked index is already open, close it; otherwise, open the new one.
    setFaq(faq === index ? null : index);
  };
  return (
    <><Helmet>
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
       <Pagetop pagetop_text="About Gandhi's Travels" />

      <div class="about-parent parent">
        <div class="about-cont cont">
          <p>
          Welcome to Gandhi Travels, the leading car rental agency in Pune, offering seamless travel solutions for all your needs. Whether you're looking for a Pune to Shirdi Cab, a Pune to Mumbai One-Way Taxi, or a comfortable ride from Pune Airport to Lavasa, we’ve got you covered. Our diverse fleet includes everything from luxury cars for corporate travel to spacious Tempo Travellers for group outings. With services like Innova on Rent with Driver, Honda City on Rent, and Tempo Traveller Rentals, we ensure your journey is both stylish and comfortable.

From Pune to Lonavala, Pune to Nashik, or even a long journey like Pune to Goa, our reliable drivers and well-maintained vehicles make every trip memorable. Based in convenient locations like Koregaon Park, Pimple Saudagar, Viman Nagar, and more, we’re always just a call away. At Gandhi Travels, we are committed to providing top-notch service, whether it's a quick Mumbai Airport to Pune Drop or a scenic trip to Kaas Plateau, Ranjangaon, or Tuljapur.

Book your ride today and experience the best in car rental services in Pune!
          </p>
        </div>
      </div>

      <div class="founder-parent parent">
        <div class="founder-cont cont">
          <div class="founder-image">
            <img src={founder_img} alt="" />
          </div>

          <div class="founder-desc">
            <h2>lorem lipsum</h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus fugit ab laborum quibusdam est doloribus
              perspiciatis aut veniam adipisci repellat. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Necessitatibus fugit ab laborum
              quibusdam est doloribus perspiciatis aut veniam adipisci repellat.
            </p>

            <a class="btn-active">Let's Connect</a>
          </div>
        </div>
      </div>

      <div class="mission-vision parent">
        <div class="misvis-cont cont">
          {vismis_data.map((item, index) => (
            <div class="vismis_card" key={index}>
              <div
                class="image bg-img-cover"
                style={{ background: `url(${item.image})` }}
              >
                <div class="overlay"><h1>
                {item.title}
                    </h1></div>
              </div>
              <div class="vis_mis_desc">
                <div class="icon">{item.icon}</div>
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
            <p>
             Frequently Asked Questions
            </p>

            <div className="faq-list">
              {faqContent.map((item, index) => (
                <div className="faq" key={index}>
                  <div className={faq === index ? "heading active" : "heading"} onClick={() => handleToggle(index)}>
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
