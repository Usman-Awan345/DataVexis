import { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";
import ScrollReveal from "scrollreveal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Scroll aur section‑based active link
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    function activeMenu() {
      const currentScroll = window.scrollY + window.innerHeight / 2;
      sections.forEach((sec) => {
        if (
          currentScroll >= sec.offsetTop &&
          currentScroll <= sec.offsetTop + sec.offsetHeight
        ) {
          setActiveLink(`#${sec.id}`);
        }
      });
    }

    activeMenu();
    window.addEventListener("scroll", activeMenu);
    return () => window.removeEventListener("scroll", activeMenu);
  }, []);

  // ScrollReveal animations
  useEffect(() => {
    ScrollReveal().reveal(
      ".hero-info,.main-text,.proposal,.heading",
      { origin: "top", distance: "90px", duration: 2000, delay: 200 }
    );
    ScrollReveal().reveal(
      ".about-img,.fillter-buttons,.contact-info",
      { origin: "left" }
    );
    ScrollReveal().reveal(
      ".about-content,.skills",
      { origin: "right" }
    );
    ScrollReveal().reveal(
      ".allServices,.portfolio-gallery,.blog-box,footer,.img-hero",
      { origin: "bottom" }
    );
  }, []);

  const handleLogoClick = () => {
    setActiveLink("#home");
    setMenuOpen(false);
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (targetId) => {
    setActiveLink(targetId);
    setMenuOpen(false);
  };

  return (
    <header>
      <a
        className="logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <span>U</span>sman
      </a>

      {/* Hamburger icon (sirf ek instance) */}
      <div
        className={`menu-icon ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 100,
          cursor: "pointer",
        }}
      >
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <ul className={`navlist ${menuOpen ? "active" : ""}`}>
        {["home", "about", "services", "portfolio", "blog", "contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => handleNavClick(`#${item}`)}
                className={activeLink === `#${item}` ? "active" : ""}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Right header button */}
      <div className="right-header">
        <a href="mailto:usmanawam2124@gmail.com" className="btn">
          Let's chat <i className="bx bx-message-dots"></i>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
