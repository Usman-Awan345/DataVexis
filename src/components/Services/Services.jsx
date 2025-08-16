import React, { useContext, useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";

const Services = () => {
  const { services } = useContext(ShopContext);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleToggle = () => {
    if (visibleCount === 4) {
      setVisibleCount(services.length); // Show all services
    } else {
      setVisibleCount(4); // Show only 4 services
    }
  };

  useEffect(() => {
    // Future animations or effects
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-heading">
        <h2>
          Our <span>Services</span>
        </h2>
        <p>
          Delivering innovative digital solutions to help your business grow.
        </p>
      </div>

      <div className="services-container">
        {services && services.length > 0 ? (
          services.slice(0, visibleCount).map((service) => (
            <div key={service.id} className="service-card fade-in">
              <div className="service-icon bounce">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service.id}`} className="learn-btn">
                Learn More
              </Link>
            </div>
          ))
        ) : (
          <p>No services available</p>
        )}
      </div>

      {services && services.length > 4 && (
        <div className="see-more-container">
          <button className="see-more-btn" onClick={handleToggle}>
            {visibleCount === 4 ? "See More" : "See Less"}
          </button>
        </div>
      )}

      {/* Proposal Section */}
      <div className="proposal">
        <div className="text-box">
          <span>Get in Touch</span>
          <h3>Have a project on Your Mind</h3>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
        <img src="images/support.png" alt="Support" />
      </div>
    </section>
  );
};

export default Services;
