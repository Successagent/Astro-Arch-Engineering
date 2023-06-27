// Hooks and Dependencies
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Images
import review1 from "../../assets/grid_4.jpg";
import review2 from "../../assets/grid_2.jpg";

const index = () => {
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

  return (
    <section className="home_testimonials_sect">
      <h2 className="hr_text">Testimonials</h2>
      <Carousel
        responsive={responsive}
        className="home_testimonials_container flex"
      >
        <div className="home_testimonial_items">
          <p>
            I am extremely impressed with Astro Arch and Engineering's
            professionalism and attention to detail. They completed a complex
            engineering project for our company, and their team exceeded our
            expectations at every step.
          </p>
          <div className="flex">
            <img src={review1} alt="" />
            <h3>Sarah Thompson</h3>
          </div>
        </div>
        <div className="home_testimonial_items">
          <p>
            Astro Arch and Engineering transformed our dream into reality. Their
            team of experts guided us through the entire construction process
            with exceptional skill and expertise.
          </p>
          <div className="flex">
            <img src={review2} alt="" />
            <h3>Lisa Anderson</h3>
          </div>
        </div>
        <div className="home_testimonial_items">
          <p>
            We were in search of a reliable construction and engineering company
            for our commercial project, and we found the perfect partner in
            Astro Arch and Engineering.
          </p>
          <div className="flex">
            <img src={review1} alt="" />
            <h3>Michael Roberts</h3>
          </div>
        </div>
        <div className="home_testimonial_items">
          <p>
            Astro Arch and Engineering truly stands out in their field. They
            successfully completed a major infrastructure project for our
            municipality, and their dedication to excellence was evident every
            step of the way.
          </p>
          <div className="flex">
            <img src={review2} alt="" />
            <h3>Emily Johnson</h3>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default index;
