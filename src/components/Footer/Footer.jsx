import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ✅ Company Info */}
        <div className="footer-column about">
          <h3 className="brand-name"><span>Data</span>Vexis</h3>
          <p>
            We transform your ideas into stunning digital solutions with our expertise in
            Website Development, AI Solutions, Graphic Designing, and Video Editing.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* ✅ Services */}
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li>Website Development</li>
            <li>AI Solutions</li>
            <li>App Development</li>
            <li>Digital Marketing</li>
            <li>Graphic Designing</li>
            <li>Video Editing</li>
          </ul>
        </div>

        {/* ✅ Contact Info */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p><i className="bx bx-envelope"></i> info@datavexis.com</p>
          {/* <p><i className="bx bx-phone"></i> +92 308 8948511</p> */}
        </div>

        {/* ✅ Address */}
        <div className="footer-column">
          <h4>Address</h4>
          <p><i className="bx bx-map"></i> 701 Brazos St, Suite 500 Austin, TX United States</p>

          {/* ✅ Social Media Section */}
          <h4 style={{ marginTop: "15px" }}>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61579258170184" className="fb" title="Facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/" className="ig" title="Instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/company/datavexis/posts/?feedView=all" className="ln" title="LinkedIn"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

      </div>

      {/* ✅ Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DataVexis. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
