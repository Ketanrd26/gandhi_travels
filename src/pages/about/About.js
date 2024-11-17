import React from "react";
import "./about.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import founder_img from "../../assests/dummy_img.png";
import { GoGoal } from "react-icons/go";
const About = () => {
  const vismis_data = [
    {
      image: founder_img,
      title: "mission",
      icon: <GoGoal />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione nemo pariatur placeat blanditiis perspiciatis voluptas ipsam magnam hic facilis explicabo sit,",
    },
    {
      image: founder_img,
      title: "mission",
      icon: <GoGoal />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione nemo pariatur placeat blanditiis perspiciatis voluptas ipsam magnam hic facilis explicabo sit,",
    },
  ];
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
    </>
  );
};

export default About;
