// DEPENDECIES AND HOOKS
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Components
import { Home, About, Services, OurWorks, Contact } from "./pages";

// STYLES

import "./pages/Home/Home.css";
import "./pages/About/About.css";
import "./components/Hero/Hero.css";
import "./pages/Services/Services.css";
import "./pages/OurWorks/OurWorks.css";
import "./pages/Contact/Contact.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
