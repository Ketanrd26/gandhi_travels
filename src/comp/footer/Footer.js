import React from "react";
import "./footer.scss";
import logo from "../../assests/logo.png";
import { Link } from "react-router-dom";
import video from "../../assests/footer_video.mp4";
import ReactPlayer from "react-player";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
const Footer = () => {
  const NavLinks = [
    {
      link_name: "Home",
      link_path: "/",
    },
    {
      link_name: "About",
      link_path: "/about",
    },
    {
      link_name: "Vehicels",
      link_path: "/vehicels",
    },
    {
      link_name: "Blogs",
      link_path: "/blogs",
    },
  ];
  return (
    <>
      <div class="before_footer parent">
        <div class="before_footer_cont cont">
          <div class="video-section">
            <ReactPlayer
              url={video}
              playing={true}
              muted={true}
              controls={false}
              width="100%"
             loop={true}
              className="react-player"
              config={{
                file: {
                  attributes: {
                    preload: "metadata",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div class="footer-parent parent">
        <div class="footer-cont cont">
          <div class="gandhi-about">
            <img src={logo} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, 
            </p>
          </div>
          <div class="nav-links">
            {NavLinks.map((item, index) => (
              <Link to={item.link_path} key={index}>
                {item.link_name}
              </Link>
            ))}
          </div>
          <div class="privacy">
            <Link>Privacy Policies</Link>
            <Link>Cookies Policy</Link>
          </div>
          <div class="last">
            <h4>Get in touch</h4>
            <div class="social_icons">
              <div class="icons"></div>
              <div class="icons"></div>
              <div class="icons"></div>
              <div class="icons"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="side-icons">
        <a href="https://wa.me/+918308988188" target="blank" class="wp s-icon">
        <FaWhatsapp />
        </a>
        <a href="tel:+918308988188" target="blank" class="call s-icon">
        <IoCall />
        </a>
      </div>
    </>
  );
};

export default Footer;
