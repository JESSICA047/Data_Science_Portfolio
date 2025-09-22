import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Experience.css";

const experienceItems = {
  "Data Analytics Intern": {
    jobTitle: "Data Analytics Intern @",
    duration: "2024 - Present",
    desc: [
      "Working with real business data to generate insights and support decision-making processes",
      "Learning to clean, analyze, and visualize data using tools like Excel, SQL, and Python",
      "Collaborating with team members to understand business requirements and translate them into data analysis tasks",
      "Developing skills in data storytelling by creating reports and presentations for stakeholders",
    ],
  },
  "WorldQuant University": {
    jobTitle: "Student @",
    duration: "2024 - Present",
    desc: [
      "Enrolled in Applied Data Science Lab program to gain hands-on experience with real-world data science projects",
      "Learning advanced data science methodologies and statistical analysis techniques",
      "Working on practical projects that combine theoretical knowledge with real-world applications",
      "Building foundation in machine learning concepts and data science workflows",
    ],
  },
  DataCamp: {
    jobTitle: "Learner @",
    duration: "2024 - Present",
    desc: [
      "Actively pursuing data science skills through structured learning paths and hands-on exercises",
      "Building proficiency in Python programming for data analysis and manipulation",
      "Learning SQL for database querying and data extraction",
      "Developing skills in data visualization using libraries like Matplotlib and Seaborn",
    ],
  },
  "Computer Science Studies": {
    jobTitle: "Student @",
    duration: "2023 - 2026 (Ongoing)",
    desc: [
      "Pursuing Computer Science degree to build strong technical foundation for data science career",
      "Learning programming fundamentals, data structures, and algorithms",
      "Developing problem-solving skills and logical thinking through coding projects",
      "Building understanding of computer systems and software development principles",
    ],
  },
  "Biochemistry Background": {
    jobTitle: "Graduate @",
    duration: "2021 - 2024",
    desc: [
      "Graduated with Bachelor's degree in Biochemistry, developing strong analytical and research skills",
      "Gained experience working with complex datasets and scientific methodology",
      "Developed critical thinking skills through laboratory research and data interpretation",
      "Built foundation in scientific problem-solving that translates well to data science challenges",
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
