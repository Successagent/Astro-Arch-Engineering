// Dependecies and Hooks
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Images
import headerLogo from "../../assets/astrosoft.svg";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ pathname }) => {
  // States
  const [nav, setNav] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("transparent");

  // Variables

  // Functions
  const toggleNavigation = () => {
    setNav(!nav);
  };

  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      return setHeaderStyle("transparent");
    } else if (window.scrollY > 70) {
      return setHeaderStyle("transparent_2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <header className={`flex ${pathname === "/contact-us" ? headerStyle : ""}`}>
      <div className="header_logo_container">
        <img src={headerLogo} alt="header logo" />
      </div>
      <nav
        className={`flex ${nav ? "open_nav" : "close_nav"}`}
        onClick={toggleNavigation}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/about-us"}>What We Do</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/our-works"}>Our Works</Link>
        <Link to={"/contact-us"}>Contact Us</Link>
      </nav>
      <RxHamburgerMenu onClick={toggleNavigation} />
    </header>
  );
};

export default Header;
