import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FcGraduationCap,
  FcIdea,
  FcBriefcase,
  FcGoogle,
  FcStatistics,
  FcGlobe,
} from "react-icons/fc";
import { SiOpenai } from "react-icons/si";
import "../styles/Timeline.css";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    title: "Bachelor's in Biochemistry",
    description:
      "Graduated with a Bachelor's degree in Biochemistry, developing strong analytical and research skills. This scientific foundation taught me to approach problems systematically and work with complex data sets.",
    year: "2021 - 2024",
    type: "education",
  },
  {
    title: "Computer Science Studies Begin",
    description:
      "Started pursuing Computer Science studies to complement my scientific background with technical skills. Learning programming fundamentals, data structures, and algorithms.",
    year: "2023 - 2026 (Ongoing)",
    type: "education",
  },
  {
    title: "Discovery of Data Analytics",
    description:
      "First exposure to data analytics through coursework and online resources. Realized the power of combining my scientific background with data analysis techniques to solve real-world problems.",
    year: "Early 2024",
    type: "career",
  },
  {
    title: "WorldQuant University - Applied Data Science Lab",
    description:
      "Enrolled in WorldQuant University's Applied Data Science Lab program to gain hands-on experience with real-world data science projects and methodologies.",
    year: "2024 - Present",
    type: "education",
  },
  {
    title: "DataCamp Learning Journey",
    description:
      "Started comprehensive learning on DataCamp, building skills in Python, SQL, data manipulation, and visualization. Working through structured learning paths for data analysis.",
    year: "2024 - Present",
    type: "project",
  },
  {
    title: "Data Analytics Intern",
    description:
      "Landed my first role as a Data Analytics Intern, applying classroom knowledge to real business problems. Gaining experience with data cleaning, analysis, and reporting.",
    year: "2024 - Present",
    type: "startup",
    learnMoreLink: "#experience",
    learnMoreText: "View Experience",
  },
  {
    title: "Building Data Science Portfolio",
    description:
      "Creating portfolio projects to demonstrate my growing skills in data analysis. Working with datasets, learning SQL, and creating visualizations to tell data stories.",
    year: "2024 - Present",
    type: "project",
    learnMoreLink: "#projects",
    learnMoreText: "View Projects",
  },
  {
    title: "Future Goal: Senior Data Scientist",
    description:
      "Working towards becoming a Senior Data Scientist by continuously learning, building projects, and gaining professional experience. Excited about the journey ahead in data science and analytics.",
    year: "Future Vision",
    type: "ai",
  },
];

export default function Timeline() {
  const timelineWrapRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    timelineItemsRef.current = timelineItemsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#timeline .section-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#timeline .section-title",
            start: "top 90%",
            toggleActions: "restart none none reverse",
          },
        }
      );

      gsap.fromTo(
        "#timeline-progress-line",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineWrapRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      timelineItemsRef.current.forEach((item, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        const content = item.querySelector(".timeline-content");
        const dot = item.querySelector(".timeline-dot");
        const date = item.querySelector(".timeline-date");

        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart none none reverse",
          },
        });

        itemTl
          .fromTo(
            content,
            { x: direction * 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            }
          )
          .fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "back.out(1.7)",
            },
            "-=0.3"
          )
          .fromTo(
            date,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.2"
          );
      });
    });

    return () => ctx.revert();
  }, []);

  const renderIcon = (type) => {
    switch (type) {
      case "education":
        return <FcGraduationCap className="timeline-icon" />;
      case "startup":
        return <FcIdea className="timeline-icon" />;
      case "career":
        return <FcBriefcase className="timeline-icon" />;
      case "google":
        return <FcGoogle className="timeline-icon" />;
      case "project":
        return <FcStatistics className="timeline-icon" />;
      case "website":
        return <FcGlobe className="timeline-icon" />;
      case "ai":
        return <SiOpenai className="timeline-icon" />;
      default:
        return null;
    }
  };

  return (
    <div id="timeline">
      <div className="section-header">
        <span className="section-title">My Journey to Data Science</span>
      </div>

      <div className="timeline-wrapper" ref={timelineWrapRef}>
        <div className="timeline-progress">
          <div id="timeline-progress-line"></div>
        </div>

        <div className="timeline-items">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
              ref={(el) => (timelineItemsRef.current[idx] = el)}
            >
              <div className="timeline-dot">{renderIcon(item.type)}</div>

              <div className="timeline-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <div className="timeline-actions">
                  {item.certificateUrl && (
                    <a
                      href={item.certificateUrl}
                      className="timeline-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  )}

                  {item.learnMoreLink && (
                    <a href={item.learnMoreLink} className="timeline-link">
                      {item.learnMoreText}
                    </a>
                  )}
                </div>
              </div>
              <span className="timeline-date">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
