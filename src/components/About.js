import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icons";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ".about-title",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.from(textRefs.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <div className="section-header">
        <span className="section-title about-title">About Me</span>
      </div>

      <div className="about-content">
        <div className="about-description">
          <p ref={(el) => (textRefs.current[0] = el)}>
            Hi, I'm Jessica Adzoyi! I'm on an exciting journey to become a data
            scientist. I graduated with a degree in Biochemistry and Molecular
            Biology from the University of Health and Allied Sciences
            (2021-2024), where I developed strong analytical thinking and
            research skills working with complex scientific data.
          </p>

          <p ref={(el) => (textRefs.current[1] = el)}>
            Currently, I'm pursuing a Computer Science degree (2023-2026) to
            build the technical foundation I need for my data science career.
            I'm also enrolled in WorldQuant University's Data Science Lab
            (January-December 2025) and actively learning through DataCamp
            courses to strengthen my skills in{" "}
            <span className="highlight">
              Excel, Python, and data analysis fundamentals.
            </span>
          </p>

          <p ref={(el) => (textRefs.current[2] = el)}>
            Right now, I'm working as a Data Analytics Intern, getting hands-on
            experience with real data problems. My ultimate dream is to become a
            Senior Data Scientist! I know I'm just starting out, but I'm
            passionate about learning and I believe that every expert was once a
            beginner. This portfolio will grow with me as I complete projects
            and gain more skills.
          </p>

          <p ref={(el) => (textRefs.current[3] = el)}>
            When I'm not studying or working with data, I enjoy reading about
            scientific breakthroughs, exploring new learning platforms, and
            planning my next educational adventure. I'm genuinely excited about
            what the future holds in data science, and I can't wait to make my
            mark in this field!
          </p>

          {/* <p ref={(el) => (textRefs.current[4] = el)}>
            Outside of work, I love playing video games. I'm also into aesthetic
            interior designs and I love hoarding cool tech products.
          </p> */}
        </div>
        <p
          className="about-timeline-link"
          ref={(el) => (textRefs.current[5] = el)}
        >
          <a href="#timeline">
            <span role="img" aria-label="timeline">
              ðŸ—ºï¸{" "}
            </span>
            View my{" "}
            <span className="about-timeline-highlight">
              educational journey
            </span>{" "}
            to learn more about my unique journey into data science &rarr;
          </a>
        </p>
        <div className="about-actions" ref={(el) => (textRefs.current[6] = el)}>
          <a href="#contact" className="resume-button btn-effect">
            Get in Touch <Icon name="Mail" className="button-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
