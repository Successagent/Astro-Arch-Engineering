// Dependencies and Hooks
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Images
import home1 from "../../assets/grid_8.jpg";
import home2 from "../../assets/grid_2.jpg";
import home3 from "../../assets/grid_3.jpg";
import home4 from "../../assets/grid_6.jpg";
import home5 from "../../assets/grid_7.jpg";
import home6 from "../../assets/grid_5.jpg";

const WorkCarousel = ({ pathname }) => {
  console.log(pathname);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return pathname === "/services" ? (
    <Carousel responsive={responsive} className="home_what_we_do_sect_body">
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home2} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Green Building</h3>
          <p>
            Astro Arch Engineering pioneers a new era of home construction,
            seamlessly blending advanced technology and celestial design to
            create houses that feel like they were plucked from the stars
            themselves. With Astro Arch Engineering visionary approach, each
            residence becomes a harmonious sanctuary where technology and cosmic
            elegance coexist.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home3} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Office</h3>
          <p>
            As beacons of visionary design and expertise, Astro Arch Engineering
            Offices offer a celestial gateway for clients, guiding them towards
            extraordinary architectural marvels that transcend the ordinary and
            embrace the extraordinary.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home1} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Hospital</h3>
          <p>
            Through meticulous attention to detail, Astro Arch Engineering
            constructs homes that not only prioritize sustainability and energy
            efficiency but also harness the power of renewable energy sources,
            propelling residents towards a greener future.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home4} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Interiror</h3>
          <p>
            Astro Arch Engineering leverages cutting-edge materials and
            innovative construction techniques to craft homes that defy
            traditional boundaries, offering residents an otherworldly living
            experience like no other.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home5} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Office</h3>
          <p>
            Astro Arch Engineering and Construction Offices serve as celestial
            hubs of innovation, where groundbreaking architectural concepts and
            cutting-edge technologies intertwine to redefine the very essence of
            urban living.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home6} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Schools</h3>
          <p>
            Astro Arch Engineering inspire the next generation of celestial
            architects, nurturing their passion for innovative design and
            equipping them with the skills to create celestial-inspired homes
            that push the boundaries of imagination.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
    </Carousel>
  ) : (
    <Carousel responsive={responsive} className="home_what_we_do_sect_body">
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home2} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Green Building</h3>
          <p>
            Astro Arch Engineering pioneers a new era of home construction,
            seamlessly blending advanced technology and celestial design to
            create houses that feel like they were plucked from the stars
            themselves. With Astro Arch Engineering visionary approach, each
            residence becomes a harmonious sanctuary where technology and cosmic
            elegance coexist.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home3} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Office</h3>
          <p>
            With a focus on holistic well-being, Astro Arch Engineering
            incorporates celestial-inspired elements such as natural light
            optimization, soothing color palettes, and serene indoor gardens,
            fostering an atmosphere of tranquility and harmony within each home.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home1} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Hospital</h3>
          <p>
            Through meticulous attention to detail, Astro Arch Engineering
            constructs homes that not only prioritize sustainability and energy
            efficiency but also harness the power of renewable energy sources,
            propelling residents towards a greener future.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home4} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Interiror</h3>
          <p>
            Astro Arch Engineering leverages cutting-edge materials and
            innovative construction techniques to craft homes that defy
            traditional boundaries, offering residents an otherworldly living
            experience like no other.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
      <div className="carousel_items">
        <div className="home_what_we_do_sect_body_image_con">
          <img src={home5} alt="" />
        </div>
        <div className="home_what_we_do_sect_body_text_con">
          <h3>Interiror</h3>
          <p>
            Drawing inspiration from the cosmos, Astro Arch Engineering employs
            breathtaking architectural designs that blur the line between indoor
            and outdoor spaces, creating a seamless connection with the
            celestial wonders beyond.
          </p>
          <a href="#">SERVICE DETAILS</a>
        </div>
      </div>
    </Carousel>
  );
};

export default WorkCarousel;
