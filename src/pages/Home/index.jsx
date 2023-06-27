// Dependencies and Hooks
import React from "react";

// Components
import {
  Footer,
  Header,
  Product,
  Testimonial,
  WorkCarousel,
} from "../../components";

// Icons
import { AiOutlineArrowRight } from "react-icons/ai";

// Images
import client1 from "../../assets/astrostudiozlogo.jpg";
import client2 from "../../assets/orbitalLogo.png";
import client3 from "../../assets/noseason.png";

const Home = () => {
  return (
    <section>
      <Header />
      <section className="home_hero">
        <h1>Your Dream House</h1>
        <p>
          If you Dream on designing a new home that take full advantage of the
          unique geography and views of land that you love
        </p>
        <div className="flex">
          <button className="btn flex">
            <span>Our Services</span>
            <AiOutlineArrowRight />
          </button>
          <button className="btn flex bordered">
            <span> Contact Us </span>
            <AiOutlineArrowRight />
          </button>
        </div>
      </section>
      <Product />
      <section className="home_what_we_do_sect">
        <div className="home_what_we_do_sect_header flex">
          <h3 className="hr_text">What We Do</h3>
        </div>
        <WorkCarousel />
      </section>
      <section className="carousel_container">
        <p>WORKING WITH US</p>
        <h1>CONTRACTORS & CONSTRUCTION MANAGERS SINCE 1989</h1>
        <button className="bordered btn">Contact Us</button>
      </section>
      <Testimonial />
      <section className="home_client_sect">
        <h2 className="hr_text">Our Clients</h2>
        <div className="client_logo_container">
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
