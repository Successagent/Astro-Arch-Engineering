// Hooks and Dependencies
import React from "react";

// Components
import { Header, Footer, Hero } from "../../components";

// Icons

// Images
import home1 from "../../assets/grid_2.jpg";
import home3 from "../../assets/grid_3.jpg";

const index = () => {
  return (
    <section className="about_page">
      <Header />
      <Hero page_title={"What We Do"} />
      <section className="about_hero_sect">
        <div className="home_what_we_do_sect_body">
          <div>
            <div className="home_what_we_do_sect_body_image_con">
              <img src={home3} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h2 className="hr_text">INTRO VIDEO ABOUT COMPANY</h2>
              <p>Project Manager</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                numquam vel laborum animi deleniti optio. Dicta quasi fugiat
                aperiam deleniti.
              </p>
            </div>
          </div>
          <div>
            <div className="home_what_we_do_sect_body_image_con">
              <img src={home1} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h2 className="hr_text">WHAT WE DO</h2>
              <p>Project Manager</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                numquam vel laborum animi deleniti optio. Dicta quasi fugiat
                aperiam deleniti.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about_team_sect">
        <h2 className="hr_text">OUR TEAM</h2>
        <div className="home_what_we_do_sect_body">
          <div>
            <div className="home_what_we_do_sect_body_image_con">
              <img src={home3} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h2 className="hr_text">Mellisa</h2>
              <p>Project Manager</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                numquam vel laborum animi deleniti optio. Dicta quasi fugiat
                aperiam deleniti.
              </p>
            </div>
          </div>
          <div>
            <div className="home_what_we_do_sect_body_image_con">
              <img src={home1} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h2 className="hr_text">Austin</h2>
              <p>Project Manager</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                numquam vel laborum animi deleniti optio. Dicta quasi fugiat
                aperiam deleniti.
              </p>
            </div>
          </div>
          <div>
            <div className="home_what_we_do_sect_body_image_con">
              <img src={home1} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h2 className="hr_text">Success</h2>
              <p>Project Manager</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                numquam vel laborum animi deleniti optio. Dicta quasi fugiat
                aperiam deleniti.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default index;
