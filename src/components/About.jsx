import React, { useState } from "react";
import Navbar from "../components/navbar";


const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
    <section className="about" id="about">
      <div className="about-img">
        <img src="/images/hero.png" alt="" className="aboutHero" />
        <div className="showcase-ring">
          <img src="/shapes/ring.png" className="ring" alt="Ring" />
          <img src="/shapes/circle.png" className="circle" alt="Circle" />
        </div>
      </div>

      <div className="about-content">
        <h2 className="heading">About Me</h2>
        <h3>I am Software Engineer || MERN STACK DEVELOPER</h3>
        <p>
  I am a passionate MERN stack developer with expertise in building full-stack, responsive, and user-friendly web applications. My core technologies include MongoDB, Express.js, React.js, and Node.js, along with HTML, CSS, SCSS, and JavaScript for crafting seamless user interfaces.
</p>
<p>
  I love transforming ideas into visually appealing, high-performing, and scalable digital solutions. With a strong focus on clean code, performance, and user experience, I ensure every project is built with precision and efficiency.
</p>
<p>
  I am always eager to learn new technologies and take on meaningful challenges that help me grow as a developer. Let’s collaborate to bring innovative ideas to life!
</p>


        <div className="about-btn">
          <button className={activeTab === 0 ? "active" : ""} onClick={() => handleTabClick(0)}>Main-skills</button>
          <button className={activeTab === 1 ? "active" : ""} onClick={() => handleTabClick(1)}>Education</button>
          <button className={activeTab === 2 ? "active" : ""} onClick={() => handleTabClick(2)}>Certification</button>
        </div>

        {/* Main Skills Content */}
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

        {/* Education Content */}
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

        {/* Certification */}
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

        {/* CV Download Button */}
        <div className="cvContent">
          <a href="/images/resume.pdf" target="_blank" className="btn d-CV">
            Download CV<i className='bx bx-download'></i>
          </a>
        </div>
      </div>
    </section>
</>
  );
};

export default About;
