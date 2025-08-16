import React from "react";
import "./ContactSection.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactSection = () => {
  const [result, setResult] = React.useState("");
  const [showNotification, setShowNotification] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("⏳ Sending...");
    setIsError(false);
    setShowNotification(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "45893e0d-a7d3-4f34-8bd0-7003976b6e2e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      setIsError(false);
      event.target.reset();
    } else {
      setResult(`❌ ${data.message}`);
      setIsError(true);
    }

    // Auto hide after 3.5s
    setTimeout(() => {
      setShowNotification(false);
    }, 3500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info animated-left">
          <h2 className="contact-title">📞 Contact Us</h2>
          <h3 className="contact-subtitle">Let's Build Your Digital Solution</h3>
          <p className="contact-desc">
            Share your ideas and requirements with us. We’ll craft a
            professional, high-quality digital solution tailored to your needs.
          </p>

          <div className="contact-details">
            <p><strong>📧 Email:</strong> <span>info@datavexis.com</span></p>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61579258170184" target="_blank" rel="noreferrer" className="facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/datavexis/posts/?feedView=all" target="_blank" rel="noreferrer" className="linkedin">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-container animated-right">
          <h2 className="form-title">Send Us Your Project Details!</h2>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <input type="text" name="first_name" placeholder="First Name" required />
              <input type="text" name="last_name" placeholder="Last Name" required />
            </div>
            <input type="email" name="email" placeholder="Email Address" required />

            <select name="project_type" required>
              <option value="">Select Project Type</option>
              <option value="Website Development">Website Development</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Video Editing">Video Editing</option>
            </select>

            <textarea name="message" placeholder="Project Details..." rows="4" required></textarea>
            <input type="date" name="preferred_date" placeholder="Preferred Date" required />

            <button type="submit" className="submit-btn">Submit Project</button>
          </form>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: isError ? "#dc3545" : "#28a745",
            color: "#fff",
            padding: "14px 20px",
            borderRadius: "8px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            fontSize: "16px",
            fontWeight: "500",
            zIndex: 1000,
            animation: "slideIn 0.4s ease-out, fadeOut 0.5s ease-in 3s forwards",
          }}
        >
          {result}
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes fadeOut {
            to {
              opacity: 0;
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;

