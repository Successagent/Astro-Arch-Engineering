// Hooks and Dependencies
import React from "react";

// Components
import { Footer, Header, Hero } from "../../components";

// Icons

// Images
import home1 from "../../assets/grid_2.jpg";
import home2 from "../../assets/grid_1.jpg";
import home3 from "../../assets/grid_3.jpg";

const index = () => {
  return (
    <section className="service_page">
      <Header />
      <Hero page_title={"Our Services"} />
      <section className="services_hero_sect">
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
      <Footer />
    </section>
  );
};

export default index;
