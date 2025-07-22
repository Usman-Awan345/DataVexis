import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    icon: "bx bx-layer",
    title: "Frontend UI/UX with React.js",
    description:
      "I craft modern, dynamic, and responsive user interfaces using React.js. With a strong grip on component-based architecture and state management, I deliver interactive UIs that enhance user experience.",
  },
  {
    id: 2,
    icon: "bx bx-code-alt",
    title: "Full-Stack Web Application Development",
    description:
      "I build powerful and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). From backend APIs to responsive frontends, I handle the entire development cycle to deliver complete solutions.",
  },
  {
    id: 3,
    icon: "bx bx-desktop",
    title: "Admin Panel Development",
    description:
      "I develop intuitive and secure admin dashboards using React.js and Node.js to help you manage users, products, orders, and data effectively. These panels come with authentication, data analytics, and CRUD features tailored to your business needs.",
  },
  {
    id: 4,
    icon: "bx bxs-party",
    title: "RESTful API Development & Integration",
    description:
      "I design and develop secure, fast, and scalable RESTful APIs using Express.js and Node.js. These APIs can be seamlessly integrated with any frontend or mobile app for smooth data flow and functionality.",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="services" id="services">
        <div className="main-text">
          <h2 className="heading">My Services</h2>
          <span>What I will do for you</span>
        </div>

        <div className="allServices">
          {servicesData.map((service) => (
            <div className="servicesItem" key={service.id}>
              <div className="icon-services">
                <i className={service.icon}></i>
                <span></span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {/* <Link to="/postservices" className="readMore">
                Read More
              </Link> */}
            </div>
          ))}
        </div>

        {/* Proposal Section */}
        <div className="proposal">
          <div className="text-box">
            <span>Get in Touch</span>
            <h3>Have a project on Your Mind</h3>
            <Link to="/contact" className="btn">
               Contact Me
              </Link>
          </div>
          <img src="images/support.png" alt="Support" />
        </div>

        {/* Shapes Showcase */}
        <div className="showcase">
          <img src="shapes/ring.png" className="ring" alt="Ring Shape" />
          <img src="shapes/circle.png" className="circle" alt="Circle Shape" />
          <img src="shapes/circle.png" className="circle2" alt="Circle Shape 2" />
          <img src="shapes/circle.png" className="circle3" alt="Circle Shape 3" />
          <img src="shapes/half-circle.png" className="half-circle" alt="Half Circle" />
        </div>
      </section>
    </>
  );
};

export default Services;

