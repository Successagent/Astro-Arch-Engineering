// Hooks and Dependencies
import React from "react";
import { useNavigate } from "react-router-dom";

// Icons

// Images

const Hero = ({ page_title }) => {
  const navigate = useNavigate();
  return (
    <section className="page_heros flex">
      <h1>{page_title}</h1>
      <button className="btn" onClick={() => navigate("/contact-us")}>
        Get In Touch
      </button>
    </section>
  );
};

export default Hero;
