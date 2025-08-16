import React, { useState } from "react";
import "./FaqSection.css";

const faqs = [
  {
    question: "What services do you provide for Website Development?",
    answer:
      "We offer end-to-end website development services including UI/UX design, responsive layouts, backend development, API integrations, and SEO optimization.",
  },
  {
    question: "Do you provide AI solutions for businesses?",
    answer:
      "Yes, we build AI-powered chatbots, recommendation systems, and data-driven automation tools to scale your business operations efficiently.",
  },
  {
    question: "What is included in your Graphic Designing service?",
    answer:
      "We design stunning brand logos, social media graphics, banners, posters, and UI elements that enhance your brand identity.",
  },
  {
    question: "Can you handle video editing for professional projects?",
    answer:
      "Absolutely! We provide high-quality video editing services including transitions, color grading, motion graphics, and sound design.",
  },
  {
    question: "How long does a website development project usually take?",
    answer:
      "Depending on the complexity, our website projects take between 2 to 8 weeks from planning to final deployment.",
  },
  {
    question: "Do you provide after-project support?",
    answer:
      "Yes, we offer free support for a limited time after project completion and provide long-term maintenance plans if required.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2> FAQs</h2>
        <p>Your questions answered about our services</p>
      </div>

      <div className="faq-container">
        {/* ✅ Left Image */}
        <div className="faq-image">
          <img src="/images/FAQ.jpg" alt="FAQs" />
        </div>

        {/* ✅ FAQs List */}
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-card ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <i
                  className={`bx ${
                    activeIndex === index ? "bx-chevron-up" : "bx-chevron-down"
                  }`}
                ></i>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
