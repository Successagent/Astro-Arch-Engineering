// Hooks and Dependencies
import React, { useState } from "react";

// Utils
import { products } from "../../utils/products";

const Product = () => {
  const [active, setActive] = useState("");
  const office = products.filter((item) => item.category === "office");
  const green = products.filter((item) => item.category === "green");
  const health_care = products.filter(
    (item) => item.category === "health_care"
  );
  const education = products.filter((item) => item.category === "education");
  const interior = products.filter((item) => item.category === "interior");

  const toggleActive = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "Office") {
      setActive(e.target.textContent);
    } else if (e.target.textContent === "Interior-Design") {
      setActive(e.target.textContent);
    } else if (e.target.textContent === "Education") {
      setActive(e.target.textContent);
    } else if (e.target.textContent === "Green-Building") {
      setActive(e.target.textContent);
    } else if (e.target.textContent === "Health-Care") {
      setActive(e.target.textContent);
    } else {
      setActive("");
    }
    console.log(active);
  };

  return (
    <section className="home_featured_sect">
      <h2>Featured Works</h2>
      <div className="flex">
        <p
          onClick={toggleActive}
          className={active === "" ? "active_filter" : ""}
        >
          Filter-All
        </p>
        <p
          className={active === "Office" ? "active_filter" : ""}
          onClick={toggleActive}
        >
          Office
        </p>
        <p
          className={active === "Interior-Design" ? "active_filter" : ""}
          onClick={toggleActive}
        >
          Interior-Design
        </p>
        <p
          className={active === "Education" ? "active_filter" : ""}
          onClick={toggleActive}
        >
          Education
        </p>
        <p
          className={active === "Green-Building" ? "active_filter" : ""}
          onClick={toggleActive}
        >
          Green-Building
        </p>
        <p
          className={active === "Health-Care" ? "active_filter" : ""}
          onClick={toggleActive}
        >
          Health-Care
        </p>
      </div>
      <div className="featured_grid">
        {(active === "Office"
          ? office
          : active === "Interior-Design"
          ? interior
          : active === "Education"
          ? education
          : active === "Green-Building"
          ? green
          : active === "Health-Care"
          ? health_care
          : products
        ).map((item, id) => (
          <div
            key={id}
            className="flex"
            style={{
              backgroundImage: `url(${item.src})`,
              height: "260px",
              width: "100%",
            }}
          >
            <h3>{item.location}</h3>
            <button className="btn">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
