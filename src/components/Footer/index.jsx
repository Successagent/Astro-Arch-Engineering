// Hooks And Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Icons
import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const index = () => {
  return (
    <footer className="flex">
      <div className="footer_item_one">
        <h3>About Company</h3>
        <p>
          Atroarch and Engineer redefine the landscape, seamlessly blending
          architectural brilliance and unparalleled craftsmanship for exquisite
          living and commercial spaces.
        </p>
        <p>
          With a commitment to excellence, Atroarch and Engineer epitomize
          quality and reliability, delivering visionary projects that transform
          dreams into reality.
        </p>
      </div>
      <div className="footer_links">
        <h3>Company</h3>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to="/about-us">Who Are We</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/our-works">Works</Link>
        </ul>
      </div>
      <div className="footer_office_con flex">
        <h3>Office</h3>
        <div className="flex">
          <TfiLocationPin style={{ fontSize: "20px" }} />
          <p>Kares plaza, Greenvilla express Rd, Yenagoa, Bayelsa State</p>
        </div>
        <div className="flex">
          <BsTelephone />
          <p>+23449045090434</p>
        </div>
        <div className="flex">
          <AiOutlineMail />
          <p>Astroarch@support.com</p>
        </div>
      </div>
      <div className="footer_business_con">
        <h3>Business Hours</h3>
        <p>
          Our support available to help you 24 hours a day, seven days a week.
        </p>
        <div className="flex">
          <p>Monday-Friday</p>
          <h4>9am to 5pm</h4>
        </div>
        <div className="flex">
          <p>Saturday</p>
          <h4>10am to 2pm</h4>
        </div>
        <div className="flex">
          <p>Sunday</p>
          <h4>Closed</h4>
        </div>
      </div>
      <div className="socials_container flex">
        <p>Follow us</p>
        <div className="flex">
          <a
            target="_blank"
            href="https://www.facebook.com/astrosoftng?mibextid=ZbWKwL"
            style={{ color: "black" }}
          >
            <FaFacebookF />
          </a>
        </div>
        <div className="flex">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/astrosoftng/mycompany/"
            style={{ color: "black" }}
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div className="flex">
          <a
            target="_blank"
            href="https://www.instagram.com/astro_archengr/"
            style={{ color: "black" }}
          >
            <AiOutlineInstagram />
          </a>
        </div>
        <div className="flex">
          <a
            target="_blank"
            href="https://twitter.com/Astrosoftio?s=20"
            style={{ color: "black" }}
          >
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default index;
