import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollnav = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("scroll", scrollnav);

    return () => {
      document.removeEventListener("scroll", scrollnav);
    };
  }, []);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      <div
        class={
          scrolled ? "header-parent active parent" : "header-parent parent"
        }
      >
        <div class="header-cont cont">
          <div class="logo">
          <Link to="/">
          
          <img src={logo} alt="" /></Link>
          </div>
          <div class="nav-list">
            {NavLinks.map((item, index) => (
              <Link to={item.link_path} className="nav" key={index}>
                {item.link_name}
              </Link>
            ))}
            <Link to="/contact" className="btn">
              Contact us
            </Link>
          </div>
          <div
            class="hamburger"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {!mobileNavOpen ? <RxHamburgerMenu /> : <RxCross1 />}
          </div>
        </div>
      </div>
      {mobileNavOpen && (
        <div class="mobile-nav parent">
          <div class="overlay-nav parent">
            <div class="mobile-nav-cont cont">
              {NavLinks.map((item, index) => (
                <Link to={item.link_path} className="link" key={index}>
                  {item.link_name}
                </Link>
              ))}
              <Link to="/contact" className="btn">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
