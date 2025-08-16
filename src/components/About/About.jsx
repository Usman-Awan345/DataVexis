import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className="about" id="about">
        <div className="about-img">
          <img src="/images/about.jpg" alt="" className="aboutHero" />
          <div className="showcase-ring">
            <img src="/shapes/ring.png" className="ring" alt="Ring" />
            <img src="/shapes/circle.png" className="circle" alt="Circle" />
          </div>
        </div>

        <div className="about-content">
          <h2 className="heading">About Us – DataVexis</h2>
          <h3>Empowering Innovation Through Technology</h3>
          <p>
            At <b>DataVexis</b>, we specialize in delivering top-notch{" "}
            <b>
              AI solutions, Web Development, Graphic Design, and Video Editing
              services
            </b>{" "}
            to help businesses grow in the digital era
          </p>
          <p>
            With over <b>100+ successful projects</b> completed and a{" "}
            <b>100% client satisfaction</b> rate, our team is committed to
            providing innovative, high-quality, and results-driven solutions
            tailored to your needs.
          </p>
          <p>
            We believe in <b>creativity, technology, and excellence</b>,
            ensuring every project we handle brings real value to our clients.
            Whether it’s crafting AI-powered tools, building modern websites,
            designing stunning visuals, or editing impactful videos –
            <b> DataVexis turns your ideas into reality</b>.
          </p>

        

          {/* <div className="about-btn">
            <button
              className={activeTab === 0 ? "active" : ""}
              onClick={() => handleTabClick(0)}
            >
              Main-skills
            </button>
            <button
              className={activeTab === 1 ? "active" : ""}
              onClick={() => handleTabClick(1)}
            >
              Education
            </button>
            <button
              className={activeTab === 2 ? "active" : ""}
              onClick={() => handleTabClick(2)}
            >
              Certification
            </button>
          </div>

          Main Skills Content
          {activeTab === 0 && (
            <div className="content-btn">
              <div className="text-box">
                <p>Frontend Development</p>
                <span>HTML, CSS, JavaScript, React.js, Tailwind CSS</span>
              </div>
              <div className="text-box">
                <p>Backend Development</p>
                <span>Node.js, Express.js</span>
              </div>
              <div className="text-box">
                <p>Database</p>
                <span>MongoDB</span>
              </div>
            </div>
          )}

          Education Content
          {activeTab === 1 && (
            <div className="content-btn">
              <div className="text-box">
                <p>Matriculation</p>
                <span>Completed in 2018 with A+ grade</span>
              </div>
              <div className="text-box">
                <p>Intermediate - FSC (Pre-Engineering)</p>
                <span>Completed in 2021 with B grade</span>
              </div>
              <div className="text-box">
                <p>Bachelor's Degree in Software Engineering</p>
                <span>Started in 2022</span>
              </div>
            </div>
          )}

          Certification
          {activeTab === 2 && (
            <div className="content-btn">
              <div className="text-box">
                <p>Certification</p>
                <span>Freelancing</span>
                <hr />
                <span>Full Stack Development</span>
              </div>
            </div>
          )}

          CV Download Button
          <div className="cvContent">
            <a href="/images/resume.pdf" target="_blank" className="btn d-CV">
              Download CV<i className="bx bx-download"></i>
            </a>
          </div> */}
        </div>

        
      </section>

        <div className="choose-us" id="choose-us">
            <div className="choose-heading">
              <h2>
                Why Choose <span>DataVexis</span>?
              </h2>
              <p>
                We deliver top-notch digital solutions tailored to your business
                needs.
              </p>
            </div>

            <div className="choose-container">
              <div className="choose-card">
                <i className="bx bx-check-shield"></i>
                <h3>100+ Successful Projects</h3>
                <p>
                  We have delivered 100+ high-quality projects across different
                  industries worldwide.
                </p>
              </div>

              <div className="choose-card">
                <i className="bx bx-happy"></i>
                <h3>100% Client Satisfaction</h3>
                <p>
                  We prioritize client success and deliver solutions that exceed
                  expectations.
                </p>
              </div>

              <div className="choose-card">
                <i className="bx bx-brain"></i>
                <h3>AI-Powered Solutions</h3>
                <p>
                  We integrate cutting-edge AI to build smarter, scalable, and
                  future-ready solutions.
                </p>
              </div>

              <div className="choose-card">
                <i className="bx bx-support"></i>
                <h3>24/7 Support</h3>
                <p>
                  Our dedicated team is always available to provide quick
                  support and guidance.
                </p>
              </div>
            </div>
          </div>

          <section className="mission-vision-section">
  <div className="mv-container">
    <div className="mv-card">
      <h2>Our Mission</h2>
      <p>
        At <strong>DataVexis</strong>, our mission is to deliver innovative and
        result-driven digital solutions in AI, Web Development, Graphic Design,
        and Video Editing to help businesses thrive in the digital world.
      </p>
    </div>

    <div className="mv-card">
      <h2>Our Vision</h2>
      <p>
        We aim to become a globally recognized agency, providing cutting-edge
        technology and creative solutions that inspire businesses and ensure
        long-term success for our clients.
      </p>
    </div>
  </div>

  <div className="cta-container">
    <h3>Ready to take your business to the next level?</h3>
    <p>Let DataVexis turn your ideas into powerful digital solutions.</p>
    <a href="#contact" className="cta-btn">Get in Touch</a>
    <a href="#portfolio" className="cta-btn secondary">View Our Projects</a>
  </div>
</section>

    </>
  );
};

export default About;
