import React, { useEffect } from "react";
import Navbar from "../components/navbar.jsx";

import "boxicons/css/boxicons.min.css";
import Footer from "../components/Footer.jsx";
import Portfolio from "../components/Portfolio.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Blog from "../components/Blog.jsx";
import ContactSkills from "../components/ContactSkills.jsx";

function Home() {
  useEffect(() => {
    const text = document.querySelector(".text p");
    if (text) {
      text.innerHTML = text.textContent
        .split("")
        .map(
          (char, i) =>
            `<b style="transform:rotate(${
              i * 10
            }deg) translateY(-100px)">${char}</b>`
        )
        .join("");
    }
  }, []);

  useEffect(() => {
    const calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let ScrollValue = Math.round((pos * 100) / calcHeight);

      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }

      scrollProgress.style.background = `conic-gradient(#fff ${ScrollValue}%,#e6006d ${ScrollValue}%)`;
    };

    window.addEventListener("scroll", calcScrollValue);
    window.addEventListener("load", calcScrollValue);

    return () => {
      window.removeEventListener("scroll", calcScrollValue);
      window.removeEventListener("load", calcScrollValue);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="home" id="home">
        <div className="hero-info">
          <h3>Welcome To my World</h3>
          <h1>Hi I'm Usman</h1>
          <div className="text-animation">
            <h2>Software Engineer || MERN STACK DEVELOPER</h2>
          </div>
          <p>
            I am a skilled MERN stack developer specializing in building modern,
            scalable, and responsive web applications using MongoDB, Express.js,
            React.js, and Node.js. I also have strong frontend expertise with
            HTML, CSS, SCSS, and JavaScript. My notable projects include a
            Travel and Tours website, a custom slider, and dynamic e-commerce
            features like filtering and pagination. Clean code, seamless UI/UX,
            and performance optimization are my top priorities. Let’s connect to
            bring your ideas to life with full-stack solutions!
          </p>
          <div className="btn-box">
            <a href="mailto:usmanawan2124@gmail.com" className="btn">
              Hire me Now! <i className="bx bx-right-arrow-alt"></i>
            </a>
            <a href="/images/resume.pdf" target="_blank" className="btn d-CV">
              Download CV <i className="bx bx-download"></i>
            </a>
          </div>
          <div className="social-media">
            <div className="bg-icon">
              <a href="#">
                <i className="bx bxl-instagram"></i>
              </a>
              <span></span>
            </div>
            <div className="bg-icon">
              <a href="https://www.facebook.com/profile.php?id=61557742419807">
                <i className="bx bxl-facebook"></i>
              </a>
              <span></span>
            </div>
            <div className="bg-icon">
              <a href="https://github.com/Usman-Awan345">
                <i className="bx bxl-github"></i>
              </a>
              <span></span>
            </div>
            <div className="bg-icon">
              <a href="https://www.linkedin.com/in/usman-akhtar-1b3855291">
                <i className="bx bxl-linkedin"></i>
              </a>
              <span></span>
            </div>
          </div>
        </div>
        <div className="img-hero">
          <img src="/images/hero.png" alt="Hero" />
          <div className="rotate-text">
            <div className="text">{/* <p>I'm Frontend Developer</p> */}</div>
            <span>
              <i></i>
            </span>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Portfolio />
      <Blog />
      <ContactSkills />

      <div id="progress">
        <span id="progress-value">
          <i className="bx bxs-chevrons-up"></i>
        </span>
      </div>
      <Footer />
    </>
  );
}

export default Home;
