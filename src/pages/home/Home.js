import React from "react";

import "./home.scss";

import { GoPackage } from "react-icons/go";

import Cardswiper from "../../comp/Home/Cardswiper";
import Testimonial from "../../comp/Home/Testimonial";
import Gallerycard from "../../comp/Home/Gallerycard";
import Hero from "../../comp/Home/Hero";
const Home = () => {
  return (
    <>
      {/* First Section */}
      <div className="home-parent parent">
      <Hero/>
      </div>
      

      {/* Second Section */}
      <div className="home-about-parent parent">
        <div className="home-about-cont cont">
          <h2>About Us</h2>
          <div className="main-section">
            <div className="left-box"></div>
            <div className="right-box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                ducimus consequatur libero illo magni est temporibus eveniet
                harum exercitationem accusantium laborum itaque id ullam
                inventore a nulla debitis, aliquam quisquam explicabo ipsum
                quibusdam incidunt! Sapiente tempora magnam necessitatibus vero
                ab deserunt nisi, aut quaerat voluptatum nobis, ex molestias
                vel! Maxime!
              </p>
              <div className="btn">Read More</div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="home-fac-parent parent">
        <div className="home-fact-cont cont">
          <h2>Facilities</h2>
          <div className="fac-box">
            <div className="left-fac">
              <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam id
                labore dolore delectus reiciendis! Adipisci animi odio
                cupiditate minus laborum?
              </p>
            </div>

            <div className="right-fac">
              <div className="left-box">
                <div className="box1">
                  <div className="card-head">
                    <div className="number">1</div>
                    <div className="icon">
                      <GoPackage />
                    </div>
                  </div>
                  <h5>Lorem, ipsum dolor.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, sed.
                  </p>
                </div>
                <div className="box2">
                  <div className="card-head">
                    <div className="number">1</div>
                    <div className="icon">
                      <GoPackage />
                    </div>
                  </div>
                  <h5>Lorem, ipsum dolor.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, sed.
                  </p>
                </div>
              </div>
              <div className="right-box">
                <div className="box3">
                  <div className="card-head">
                    <div className="number">1</div>
                    <div className="icon">
                      <GoPackage />
                    </div>
                  </div>
                  <h5>Lorem, ipsum dolor.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, sed.
                  </p>
                </div>
                <div className="box4">
                  <div className="card-head">
                    <div className="number">1</div>
                    <div className="icon">
                      <GoPackage />
                    </div>
                  </div>
                  <h5>Lorem, ipsum dolor.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Forth Section */}
      <div className="forth-sec-parent bg-img-cover parent">
        <div className="overlay"></div>
        <h2>Lorem, ipsum dolor.</h2>
        <div className="forth-sec-cont cont">
          <Cardswiper />
        </div>
      </div>

      {/* Fifth Section */}
      <div className="fifth-section-parent  parent">
        <div className="fifth-section-cont cont">
          <h2>Lorem ipsum dolor sit amet<span> consectetur.</span> </h2>
          <div className="test">
          <Testimonial />
          </div>
         
        </div>
      </div>

      {/* Sixth Section  */}
      <div class="six-section-parent parent">
        <div class="six-section-cont cont">
          <Gallerycard/>
        </div>
      </div>
    </>
  );
};

export default Home;
