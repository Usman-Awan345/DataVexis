import React, { useEffect, useContext } from "react";
import mixitup from "mixitup";
import Navbar from "../components/navbar";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { products } = useContext(ShopContext); // 👈 useContext hook

  useEffect(() => {
    mixitup(".portfolio-gallery", {
      selectors: {
        target: ".portfolio-box",
      },
      animation: {
        duration: 500,
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="portfolio" id="portfolio">
        <div className="main-text">
          <h2 className="heading">My Services</h2>
          <span>What I will do for you</span>
        </div>

        {/* Filter Buttons */}
        <div className="fillter-buttons">
          <button className="button mixitup-control-active" data-filter="all">
            All Work
          </button>
          <button className="button" data-filter=".frontend">
            Frontend with React & Tailwind CSS
          </button>
          <button className="button" data-filter=".mern">
            MERN STACK
          </button>
          {/* <button className="button" data-filter=".branding">
            Website Optimization
          </button> */}
        </div>

        {/* Portfolio Gallery */}
        <div className="portfolio-gallery">
          {products.map((item) => (
            <div key={item._id} className={`portfolio-box mix ${item.category}`}>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description.split(" ").slice(0, 20).join(" ")}...</p>

                {/* Price and Duration with same color and spacing */}
                <div
                  className="portfolio-meta"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    fontSize: "1.1rem",
                    color: "#555", // Keeping the original color
                  }}
                >
                  <span
                    className="price"
                    style={{
                      fontWeight: "700",
                    }}
                  >
                   Price: ${item.price}
                  </span>
                  <span
                    className="duration"
                    style={{
                      fontWeight: "700",
                    }}
                  >
                   Duaration: {item.duration}
                  </span>
                </div>

                <Link to={`/postproject/${item._id}`} className="readMore">
                  Explore More
                </Link>
              </div>
              <div className="portfolio-img">
                <img src={item.image[0]} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
