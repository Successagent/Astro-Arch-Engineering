// Hooks and Dependencies
import React from "react";
import { useLocation } from "react-router-dom";

// Components
import { Footer, Header } from "../../components";

const Contact = () => {
  const { pathname } = useLocation();
  return (
    <section className="contact_page">
      <Header pathname={pathname} />
      <section className="contact_hero flex">
        <h1>GET IN TOUCH WITH US.</h1>
        <p>Contact AstroArch and Engineering</p>
      </section>
      <section className="contact_form_sect flex">
        <div className="contact_form">
          <h2 className="hr_text">Contact Us</h2>
          <p>
            Call or submit our online form to request an estimate or for general
            questions about how we work and our services. We look forward to
            serving you!
          </p>
          <form className="">
            <input className="header" type="text" placeholder="First Name *" />
            <input className="header1" type="text" placeholder="Last Name *" />
            <input className="main" type="text" placeholder="Email *" />
            <input
              className="main1"
              type="text"
              placeholder="Your Phone Number *"
            />
            <input className="footer2" type="text" placeholder="Your Subject" />
            <textarea className="footer1" placeholder="Message *"></textarea>
            <button className="btn">SEND MESSAGE</button>
          </form>
        </div>
        <div className="contact_map">
          <div className="contact_map_header flex">
            <div>
              <h3>Mailing Address</h3>
              <p>Kares plaza, Greenvilla express Rd, Yenagoa, Bayelsa State</p>
            </div>
            <div>
              <h3>Contact Info</h3>
              <p>07041620712</p>
              <p>support@astroarch.com</p>
            </div>
          </div>
          <div className="map_con">
            <iframe
              className="map"
              width="520"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Astrosoft%20Group%20Yenagoa+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
