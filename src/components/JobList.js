import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Experience.css";

const experienceItems = {
  "Data Analytics Intern": {
    jobTitle: "Data Analytics Intern",
    duration: "2024 - Present",
    desc: [
      "Currently learning to work with real business data to support decision-making processes",
      "Developing skills in data cleaning, analysis, and visualization using Excel and basic Python",
      "Learning to understand business requirements and translate them into simple data tasks",
      "Building foundation in data storytelling by creating basic reports and presentations",
    ],
  },
  "WorldQuant University": {
    jobTitle: "Data Science Lab Student",
    duration: "Jan 2025 - Dec 2025 (Enrolled)",
    desc: [
      "Enrolled in WorldQuant University's Applied Data Science Lab program",
      "Learning foundational data science methodologies and statistical concepts",
      "Working through practical exercises to understand real-world data science applications",
      "Building understanding of machine learning concepts and data science workflows",
    ],
  },
  DataCamp: {
    jobTitle: "Active Learner",
    duration: "2024 - Present",
    desc: [
      "Actively pursuing data science fundamentals through structured learning paths",
      "Building basic proficiency in Python programming for data analysis",
      "Learning Excel for data manipulation and basic analysis",
      "Working toward learning SQL and data visualization skills",
    ],
  },
  "Computer Science Studies": {
    jobTitle: "Computer Science Student",
    duration: "2023 - 2026 (Ongoing)",
    desc: [
      "Pursuing Computer Science degree to build technical foundation for data science",
      "Learning programming fundamentals, starting with basic concepts",
      "Developing problem-solving skills through coding exercises and projects",
      "Building understanding of computer systems and software development basics",
    ],
  },
  "Biochemistry Background": {
    jobTitle: "Biochemistry & Molecular Biology Graduate",
    duration: "2021 - 2024",
    desc: [
      "Graduated from University of Health and Allied Sciences with strong analytical skills",
      "Gained experience working with scientific data and research methodology",
      "Developed critical thinking skills through laboratory research and data interpretation",
      "Built foundation in scientific problem-solving that I'm now applying to data science",
    ],
  },
};

const JobList = () => {
  const [value, setValue] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 600);
  const keys = Object.keys(experienceItems);

  const contentRef = useRef(null);
  const listsRef = useRef({});
  const oldValueRef = useRef(value);

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (index) => {
    const oldIndex = oldValueRef.current;

    if (oldIndex === index) return;

    oldValueRef.current = index;

    const currentPanel = document.querySelector(".joblist-panel");

    if (currentPanel) {
      gsap.to(currentPanel, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setValue(index);
          animateJobDetails();

          const newPanel = contentRef.current.querySelector(
            `.joblist-panel:nth-child(${index + 1})`
          );
          if (newPanel) {
            gsap.fromTo(
              newPanel,
              { opacity: 0 },
              { opacity: 1, duration: 0.3 }
            );
          }
        },
      });
    } else {
      setValue(index);
      animateJobDetails();
    }
  };

  const animateJobDetails = () => {
    const listItems = contentRef.current?.querySelectorAll(
      ".job-description li"
    );

    if (listItems?.length) {
      gsap.set(listItems, { opacity: 0, x: 20 });

      gsap.to(listItems, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    animateJobDetails();
  }, []);

  return (
    <div className={`joblist-root ${isHorizontal ? "horizontal" : "vertical"}`}>
      <div
        className={`joblist-tabs ${isHorizontal ? "horizontal" : "vertical"}`}
      >
        {keys.map((key, i) => (
          <button
            key={key}
            className={`joblist-tab${value === i ? " active" : ""}`}
            onClick={() => handleTabChange(i)}
          >
            {isHorizontal ? `0${i + 1}.` : key}
          </button>
        ))}
      </div>

      <div className="joblist-content" ref={contentRef}>
        {keys.map((key, i) =>
          value === i ?
            <div key={key} className="joblist-panel">
              <span className="joblist-job-title">
                {experienceItems[key]["jobTitle"] + " "}
              </span>
              <span className="joblist-job-company">{key}</span>
              <div className="joblist-duration">
                {experienceItems[key]["duration"]}
              </div>
              <ul className="job-description">
                {experienceItems[key]["desc"].map((descItem, j) => (
                  <li key={j}>{descItem}</li>
                ))}
              </ul>
            </div>
          : null
        )}
      </div>
    </div>
  );
};

export default JobList;
