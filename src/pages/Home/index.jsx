// Dependencies and Hooks
import React from "react";

// Components
import { Footer, Header, Product } from "../../components";

// Icons
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

// Images
import home1 from "../../assets/grid_2.jpg";
import home2 from "../../assets/grid_1.jpg";
import home3 from "../../assets/grid_3.jpg";
import review1 from "../../assets/grid_4.jpg";
import review2 from "../../assets/grid_2.jpg";
import client1 from "../../assets/astrostudiozlogo.jpg";
import client2 from "../../assets/orbitalLogo.png";
import client3 from "../../assets/noseason.png";

const index = () => {
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
          <div className="flex">
            <div>
              <MdOutlineArrowBackIos />
            </div>
            <div>
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </div>
        <div className="home_what_we_do_sect_body">
          <div>
            <div className="home_what_we_do_sect_body_image_con">
              <img src={home2} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h3>Laminate Flooring</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                numquam vel laborum animi deleniti optio. Dicta quasi fugiat
                aperiam deleniti.
              </p>
              <a href="#">SERVICE DETAILS</a>
            </div>
          </div>
          <div>
            <div className="home_what_we_do_sect_body_image_con">
              <img src={home3} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h3>Laminate Flooring</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                numquam vel laborum animi deleniti optio. Dicta quasi fugiat
                aperiam deleniti.
              </p>
              <a href="#">SERVICE DETAILS</a>
            </div>
          </div>
          <div>
            <div className="home_what_we_do_sect_body_image_con">
              <img src={home1} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h3>Laminate Flooring</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                numquam vel laborum animi deleniti optio. Dicta quasi fugiat
                aperiam deleniti.
              </p>
              <a href="#">SERVICE DETAILS</a>
            </div>
          </div>
        </div>
      </section>
      <section className="carousel_container">
        <p>WORKING WITH US</p>
        <h1>CONTRACTORS & CONSTRUCTION MANAGERS SINCE 1989</h1>
        <button className="bordered btn">Contact Us</button>
      </section>
      <section className="home_testimonials_sect">
        <h2 className="hr_text">Testimonials</h2>
        <div className="home_testimonials_container flex">
          <div>
            <p>
              Dummy text is text that is used in the publishing industry or by
              web designers to occupy the space which will later be filled with
              ‘real’ content. This is required when, for example, the final text
              is not yet available.
            </p>
            <div className="flex">
              <img src={review1} alt="" />
              <h3>Austin</h3>
            </div>
          </div>
          <div>
            <p>
              Dummy text is text that is used in the publishing industry or by
              web designers to occupy the space which will later be filled with
              ‘real’ content. This is required when, for example, the final text
              is not yet available.
            </p>
            <div className="flex">
              <img src={review2} alt="" />
              <h3>Mellisa</h3>
            </div>
          </div>
        </div>
      </section>
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

export default index;
