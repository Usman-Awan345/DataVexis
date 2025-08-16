import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceDetail from "./page/ServicesDetail/ServiceDetail";
import "boxicons/css/boxicons.min.css";
import "swiper/css";
import "swiper/css/bundle";
import Home from "./page/Home";
import Navbar from "./components/Navbar/navbar";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import ProjectDetail from "./page/ProjectDetail/ProjectDetail";
import PricingSection from "./components/PriceSection/PriceSection";
import TestimonialSection from "./components/Testimonials/TestimonialSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FaqSection from "./components/FAQ's/FaqSection";
import BlogSection from "./components/BlogSection/BlogSection";

function App() {
  let heroData = [
    {
      text1: "Welcome to world best Software House",
      text2: "Your All-in-One Digital Growth Partner",
      text3: "DATAVEXIS",
      text4:
        "We specialize in crafting modern websites, scalable mobile applications, AI-powered solutions, creative graphic designs, and professional video editing services – everything your business needs to grow and stay ahead of the competition.",
    },
    {
      text1: "Welcome to world best Software House",
      text2: "Web Development",
      text3: "DataVexis",
      text4:
        "We craft lightning-fast, visually stunning, and fully responsive websites designed to convert visitors into loyal customers.",
    },
    {
      text1: "Welcome to world best Software House",
      text2: "AI Solutions",
      text3: "DataVexis",
      text4:
        "Empowering your business with intelligent AI tools that automate workflows, deliver insights, and work smarter — so you can too.",
    },
    {
      text1: "Welcome to world best Software House",
      text2: "Application Development",
      text3: "DataVexis",
      text4:
        "We build powerful, scalable, and user-friendly applications tailored to your business needs — from concept to launch.",
    },
    {
      text1: "Welcome to world best Software House",
      text2: "Graphic Design",
      text3: "DataVexis",
      text4:
        "Bold, creative, and on-brand designs that captivate your audience and communicate your story at a glance",
    },
    {
      text1: "Welcome to world best Software House",
      text2: "Digital Marketing",
      text3: "DataVexis",
      text4:
        "Strategic campaigns that boost visibility, drive engagement, and turn clicks into loyal customers.",
    },
    {
      text1: "Welcome to world best Software House",
      text2: "Video Editing",
      text3: "DataVexis",
      text4:
        "From cinematic visuals to high-energy reels, we create videos that spark emotion and inspire action.",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* ✅ Home Section with id="home" */}
              <section id="home">
                <Background playStatus={playStatus} heroCount={heroCount} />
                <Hero
                  setPlayStatus={setPlayStatus}
                  heroData={heroData[heroCount]}
                  heroCount={heroCount}
                  setHeroCount={setHeroCount}
                  playStatus={playStatus}
                  totalSlides={heroData.length}
                />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="services">
                <Services />
              </section>

              <section id="portfolio">
                <PortfolioSection />
              </section>

              <section id="pricing">
                <PricingSection />
              </section>

              <section id="testimonials">
                <TestimonialSection />
              </section>

              <section id="faq">
                <FaqSection />
              </section>

              <section id="blog">
                <BlogSection />
              </section>

              <section id="contact">
                <ContactSection />
              </section>
            </>
          }
        />

        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
