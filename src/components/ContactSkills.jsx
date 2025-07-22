import React, { useEffect, useRef } from "react";
import Navbar from "../components/navbar";

const skillsData = [
  { name: "HTML", target: 89 },
  { name: "CSS", target: 79 },
  { name: "JavaScript", target: 70 },
  { name: "Tailwind CSS", target: 60 },
  { name: "SCSS", target: 39 },
  { name: "React.js", target: 70 },
  { name: "Express.js", target: 70 },
  { name: "Node.js", target: 70 },
  { name: "MongoDB", target: 65 },
];

const ContactSkills = () => {
  const skillRefs = useRef([]);
  const counterRefs = useRef([]);
  const circleRefs = useRef([]);

  useEffect(() => {
    const hasReached = (el) => {
      let topPosition = el.getBoundingClientRect().top;
      return window.innerHeight >= topPosition + el.offsetHeight / 2;
    };

    const updateCount = (num, maxNum, circle) => {
      let currentNum = +num.innerText;
      if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        const progress = 465 - (465 * (currentNum + 1)) / 100;
        circle.style.strokeDashoffset = progress;
        setTimeout(() => updateCount(num, maxNum, circle), 12);
      }
    };

    const skillsCounter = () => {
      skillRefs.current.forEach((skill, i) => {
        if (!hasReached(skill)) return;

        let target = +counterRefs.current[i].dataset.target;
        let circle = circleRefs.current[i];

        if (counterRefs.current[i].innerText !== "0") return;
        counterRefs.current[i].innerText = "0";

        updateCount(counterRefs.current[i], target, circle);
      });
    };

    window.addEventListener("scroll", skillsCounter);
    return () => window.removeEventListener("scroll", skillsCounter);
  }, []);

  return (
    <>
      <Navbar />
      <section className="down-box" id="contact">
        <div className="contactSkills">
          <div className="contact-info">
            <div className="main-text">
              <h2 className="heading">Contact-Me</h2>
              <span>Get in touch with me</span>
            </div>
            <form
              id="contactForm"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <div className="input-box">
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
              <input
                type="hidden"
                name="access_key"
                value="de541083-83e6-4b77-93eb-38781f11d510"
              />
              <input type="email" name="email" placeholder="Email" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <div className="formBtn">
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="skills">
            <div className="container">
              <div className="skillsBox">
                <div className="main-text">
                  <h2 className="heading">My Skills</h2>
                  <span>Let me help you</span>
                </div>
                <div className="skill-wrap">
                  {skillsData.map((skill, i) => (
                    <div
                      className="skill"
                      key={i}
                      ref={(el) => (skillRefs.current[i] = el)}
                    >
                      <div className="outer-circle">
                        <div className="inner-circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="180px"
                            height="180px"
                          >
                            <defs>
                              <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="rgba(247,1,120,1)" />
                                <stop offset="51%" stopColor="rgba(160,8,156,1)" />
                                <stop offset="100%" stopColor="rgba(99,13,178,1)" />
                              </linearGradient>
                            </defs>
                            <circle
                              ref={(el) => (circleRefs.current[i] = el)}
                              cx="85"
                              cy="85"
                              r="75"
                              strokeLinecap="round"
                              stroke="url(#GradientColor)"
                              strokeWidth="15px"
                              fill="none"
                              strokeDasharray="465"
                              strokeDashoffset="465"
                            />
                          </svg>
                          <h2 className="counter">
                            <span
                              ref={(el) => (counterRefs.current[i] = el)}
                              data-target={skill.target}
                            >
                              0
                            </span>
                            %
                          </h2>
                        </div>
                      </div>
                      <div className="sk-title">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSkills;
