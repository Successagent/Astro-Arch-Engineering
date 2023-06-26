// Hooks and Dependencies
import React from "react";

// Components
import { Header, Footer, Hero } from "../../components";

// Icons

// Images
import home3 from "../../assets/grid_2.jpg";
import home2 from "../../assets/grid_3.jpg";
import team1 from "../../assets/team_1.jpg";
import team3 from "../../assets/team_2.jpg";
import team2 from "../../assets/team_3.jpg";

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
              <img src={home2} alt="" />
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
              <img src={team2} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h2 className="hr_text">Sarah Johnson</h2>
              <p>Civil Engineer</p>
              <p>
                Sarah Johnson is a civil engineer who plays a crucial role in
                the construction field. She focuses on the planning, design, and
                implementation of various construction projects, such as roads,
                highways, airports, and water supply systems. Sarah is adept at
                considering factors like traffic flow, environmental impact, and
                sustainability when designing infrastructure. Her attention to
                detail and ability to collaborate with different stakeholders
                make her an indispensable asset to any construction project.
              </p>
            </div>
          </div>
          <div>
            <div className="home_what_we_do_sect_body_image_con">
              <img src={team1} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h2 className="hr_text">John Smith</h2>
              <p>Structural Engineer</p>
              <p>
                John Smith is a structural engineer with extensive experience in
                the construction industry. He specializes in designing and
                analyzing the structural integrity of buildings and bridges.
                John is known for his expertise in using advanced software and
                techniques to ensure the safety and stability of various
                structures. He has successfully completed several large-scale
                projects, including high-rise buildings and complex
                infrastructure projects.
              </p>
            </div>
          </div>
          <div>
            <div className="home_what_we_do_sect_body_image_con">
              <img src={team3} alt="" />
            </div>
            <div className="home_what_we_do_sect_body_text_con">
              <h2 className="hr_text">Emily Chen</h2>
              <p>Electrical Engineer</p>
              <p>
                Emily Chen is an electrical engineer specializing in the
                construction industry. Her expertise lies in designing
                electrical systems for residential, commercial, and industrial
                buildings. She is responsible for creating electrical layouts,
                selecting appropriate equipment, and ensuring compliance with
                safety regulations and codes. Emily is skilled in designing
                energy-efficient solutions and incorporating emerging
                technologies, such as renewable energy sources and smart
                building systems, into construction projects.
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
