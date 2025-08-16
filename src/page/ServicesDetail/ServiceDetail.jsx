import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../../assets/servicesData";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./ServicesDetail.css";
// import Footer from "../../components/Footer/Footer";

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);
  const [activeIndex, setActiveIndex] = useState(null);

  if (!service) {
    return <h2 className="not-found">Service Not Found</h2>;
  }

  // Toggle FAQ function
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="service-detail-container">
      {/* ---------- Title ---------- */}
      <h1 className="service-title">{service.title}</h1>
      <p className="service-description">{service.description}</p>

      {/* ---------- Top Section (Image + Description) ---------- */}
      <div className="service-top-section">
        <div className="service-image-left">
          <Zoom zoomMargin={40}>
            <img src={service.mainImage} alt={service.title} />
          </Zoom>
        </div>
        <div className="service-info-right">
          <h2>{service.detailsHeading}</h2>
          <ul>
            {service.details.map((item, index) => (
              <li key={index}> {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- Sub Image with Details ---------- */}
      <div className="service-sub-section">
        <div className="service-text">
          <h2>Our Expertise in {service.title}</h2>
          <p>
            At Datavexis, we turn complex challenges into smart scalable
            solutions. With deep expertise across Artificial Intelligence,
            Software Development, Data Engineering, and Digital Design, we
            empower businesses to innovate automate and grow faster From
            intelligent web platforms and mobile apps to AI-powered systems and
            OTT experiences, our team blends technology and creativity to
            deliver real-world impact We don’t just build products we build
            future-ready solutions.
          </p>
        </div>
        <div className="service-image-right">
          <Zoom zoomMargin={40}>
            <img src={service.subImage} alt={service.title} />
          </Zoom>
        </div>
      </div>

      {/* ---------- Skills Section ---------- */}
      <div className="skills-section">
        <h2>Technologies & Skills We Use</h2>
        <div className="skills-list">
          {service.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>

      {/* ---------- FAQ Section ---------- */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {service.faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-toggle">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceDetail;
