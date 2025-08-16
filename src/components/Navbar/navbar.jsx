import { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";
import ScrollReveal from "scrollreveal";
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // ✅ Scroll par active link highlight
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const activeMenu = () => {
      const currentScroll = window.scrollY + window.innerHeight / 3;
      sections.forEach((sec) => {
        if (
          currentScroll >= sec.offsetTop &&
          currentScroll < sec.offsetTop + sec.offsetHeight
        ) {
          setActiveLink(`#${sec.id}`);
        }
      });
    };

    window.addEventListener("scroll", activeMenu);
    return () => window.removeEventListener("scroll", activeMenu);
  }, []);

  // ✅ Scroll animations
  useEffect(() => {
    ScrollReveal().reveal(".hero-info,.main-text,.proposal,.heading", {
      origin: "top",
      distance: "90px",
      duration: 2000,
      delay: 200,
    });
    ScrollReveal().reveal(".about-img,.fillter-buttons,.contact-info", {
      origin: "left",
    });
    ScrollReveal().reveal(".about-content,.skills", { origin: "right" });
    ScrollReveal().reveal(
      ".allServices,.portfolio-gallery,.blog-box,footer,.img-hero",
      { origin: "bottom" }
    );
  }, []);

  // ✅ Smooth scroll function
  const handleNavClick = (targetId) => {
    setActiveLink(targetId);
    setMenuOpen(false);
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <header>
      {/* ✅ Logo */}
      <a
        className="logo"
        onClick={() => handleNavClick("#home")}
        style={{ cursor: "pointer" }}
      >
        <span>Data</span>Vexis
      </a>

      {/* ✅ Hamburger icon */}
      <div
        className={`menu-icon ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
      </div>

      {/* ✅ Navigation Links */}
      <ul className={`navlist ${menuOpen ? "active" : ""}`}>
        {["home", "about", "services", "portfolio", "pricing", "blog", "contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(`#${item}`);
                }}
                className={activeLink === `#${item}` ? "active" : ""}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          )
        )}
      </ul>

      {/* ✅ Right button */}
      <div className="right-header">
        <a href="mailto:info@datavexis.com" className="btn">
          Let's chat <i className="bx bx-message-dots"></i>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
