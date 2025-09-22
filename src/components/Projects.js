import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsList from "./ProjectsList";
import "../styles/Projects.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const titleAnimation = gsap.fromTo(
      ".projects-title",
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
          trigger: "#projects",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const contentAnimation = gsap.fromTo(
      contentRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      // Only kill the specific ScrollTriggers created in this component
      if (titleAnimation.scrollTrigger) {
        titleAnimation.scrollTrigger.kill();
      }
      if (contentAnimation.scrollTrigger) {
        contentAnimation.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section id="projects" ref={projectsRef}>
      <div className="section-header">
        <span className="section-title projects-title">Projects</span>
      </div>

      <div className="projects-content" ref={contentRef}>
        <div className="projects-bg-elements">
          <div className="projects-circle"></div>
          <div className="projects-square"></div>
        </div>
        <ProjectsList />
      </div>
    </section>
  );
};

export default Projects;
