import React, { useState } from "react";
import "./PricingSection.css";

const pricingPlans = [

  // ==================Website====================
  {
    category: " Website Development",
    plans: [
      {
        title: "Starter Website",
        price: "$299",
        duration: "One-Time Payment",
        features: [
          "1-Page Responsive Website",
          "Basic SEO Setup",
          "Fast Loading Speed",
          "Contact Form Integration",
          "1 Month Free Support",
        ],
      },
      {
        title: "Business Website",
        price: "$599",
        duration: "One-Time Payment",
        features: [
          "Multi-Page Dynamic Website",
          "Advanced SEO Optimization",
          "Payment Gateway Integration",
          "Admin Dashboard",
          "3 Months Free Support",
        ],
      },
      {
        title: "E-commerce Store",
        price: "$999",
        duration: "One-Time Payment",
        features: [
          "Full E-commerce Website",
          "AI-powered Product Search",
          "Secure Payments (Stripe/PayPal)",
          "Marketing & Analytics Setup",
          "6 Months Premium Support",
        ],
      },
    ],
  },


  // ============AI Solution ========================
  {
    category: " AI Solutions",
    plans: [
      {
        title: "AI Chatbot Setup",
        price: "$250",
        duration: "One-Time Payment",
        features: [
          "Custom Chatbot for Website",
          "Trained on Your Business Data",
          "24/7 Customer Support Automation",
          "Lead Generation AI",
          "1 Month Support",
        ],
      },
      {
        title: "AI Automation",
        price: "$999",
        duration: "One-Time Payment",
        features: [
          "Workflow Automation",
          "AI Tools Integration",
          "Predictive Analytics",
          "Data Processing Automation",
          "3 Months Support",
        ],
      },
    ],
  },
  {
    category: " Graphic Designing",
    plans: [
      {
        title: "Basic Branding Kit",
        price: "$99",
        duration: "One-Time Payment",
        features: [
          "Logo Design (3 Concepts)",
          "Business Card Design",
          "Social Media Kit",
          "Unlimited Revisions",
        ],
      },
      {
        title: "Premium Branding",
        price: "$499",
        duration: "One-Time Payment",
        features: [
          "Full Brand Identity Design",
          "Packaging & Print Materials",
          "Website Graphics",
          "High-Resolution Files",
        ],
      },
    ],
  },
  {
    category: " Video Editing",
    plans: [
      {
        title: "Basic Editing",
        price: "$99",
        duration: "Per Video",
        features: [
          "Up to 5 Min Video",
          "Basic Cuts & Transitions",
          "Color Correction",
          "Background Music",
        ],
      },
      {
        title: "Pro Editing",
        price: "$299",
        duration: "Per Video",
        features: [
          "Up to 15 Min Video",
          "Advanced Transitions & Effects",
          "Subtitles & Motion Graphics",
          "High-Quality Export (4K)",
        ],
      },
    ],
  },
];

const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(pricingPlans[0].category);

  const filteredPlans = pricingPlans.find((cat) => cat.category === selectedCategory);

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <h2> Our <span>Service Pricing</span></h2>
        <p>Premium quality services tailored for your business growth – choose the perfect package for your needs.</p>
      </div>

      {/* ✅ Category Buttons */}
      <div className="pricing-tabs">
        {pricingPlans.map((cat, index) => (
          <button
            key={index}
            className={`tab-btn ${selectedCategory === cat.category ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.category)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* ✅ Selected Plans */}
      <div className="pricing-cards">
        {filteredPlans?.plans.map((plan, i) => (
          <div className="pricing-card" key={i}>
            <h4 className="plan-title">{plan.title}</h4>
            <div className="price">{plan.price}</div>
            <p className="duration">{plan.duration}</p>
            <ul className="plan-features">
              {plan.features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>
            <button className="choose-btn">Get This Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
