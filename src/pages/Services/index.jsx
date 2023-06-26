// Hooks and Dependencies
import React from "react";
import { useLocation } from "react-router-dom";

// Components
import { Footer, Header, Hero, WorkCarousel } from "../../components";

const Services = () => {
  const { pathname } = useLocation();
  return (
    <section className="service_page">
      <Header />
      <Hero page_title={"Our Services"} />
      <section className="services_hero_sect">
        <WorkCarousel pathname={pathname} />
      </section>
      <Footer />
    </section>
  );
};

export default Services;
