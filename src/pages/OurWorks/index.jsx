// Hooks and Dependencies
import React from "react";

// Components
import { Footer, Header, Hero, Product } from "../../components";

// Images

// Icons

const index = () => {
  return (
    <section>
      <Header />
      <Hero page_title={"Our Projects"} />
      <section className="our_work_hero">
        <Product />
      </section>
      <Footer />
    </section>
  );
};

export default index;
