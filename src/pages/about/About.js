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
const About = () => {
  const vismis_data = [
    {
      image: mission_img,
      title: "Mission",
      icon: <GoGoal />,
      desc: "To deliver reliable, comfortable, and safe travel solutions with a diverse fleet, ensuring exceptional customer satisfaction. We aim to make every journey memorable by blending quality service, affordability, and personalized experiences for all our clients.",
    },
    {
      image: vision_img,
      title: "Vision",
      icon: <PiEyesBold />,
      desc: "To be a trusted leader in travel services, offering innovative and sustainable solutions. We strive to expand our reach, enhance customer experiences, and inspire confident, seamless exploration for travelers, contributing to the growth of global tourism.",
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
    <>
       <Pagetop pagetop_text="About Gandhi's Travels" />

      <div class="about-parent parent">
        <div class="about-cont cont">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            ratione nemo pariatur placeat blanditiis perspiciatis voluptas ipsam
            magnam hic facilis explicabo sit, earum impedit. Corrupti dolor
            commodi delectus sed ex. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi ratione nemo pariatur placeat blanditiis
            perspiciatis voluptas ipsam magnam hic facilis explicabo sit, earum
            impedit. Corrupti dolor commodi delectus sed ex.
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
