import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import ProjectList from "./ProjectList";
import ProjectBlogs from "./ProjectBlogs";
import "../styles/Projects.css";

const projectsData = ProjectList;

const ProjectsList = () => {
  const [value, setValue] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 600);

  // Create keys array with Project Blogs and new sections
  const sectionKeys = Object.keys(projectsData);
  const keys = [
    "Project Blogs",
    "Data Metrics",
    "Data Stories",
    ...sectionKeys,
  ];

  const contentRef = useRef(null);
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
    setValue(index);
  };

  const animateProjectDetails = () => {
    // Simplified - no GSAP animations that might interfere with other sections
    return;
  };

  useEffect(() => {
    animateProjectDetails();
  }, []);

  const renderProjectContent = (key, index) => {
    if (key === "Project Blogs") {
      return (
        <>
          <span className="projectlist-section-title">Project Blogs</span>
          <div className="projectlist-duration">Coming Soon</div>
          <div className="coming-soon-content">
            <div className="coming-soon-message">
              <h3>📝 Blog Posts in Development</h3>
              <p>
                I'm preparing to share my learning journey, insights, and data
                science discoveries through engaging blog posts and case
                studies.
              </p>
              <div className="learning-status">
                <span className="status-badge">✍️ Writing Content</span>
              </div>
            </div>
          </div>
        </>
      );
    }

    if (key === "Data Metrics") {
      return (
        <>
          <span className="projectlist-section-title">
            Data Metrics Dashboard
          </span>
          <div className="projectlist-duration">Coming Soon</div>
          <div className="coming-soon-content">
            <div className="coming-soon-message">
              <h3>📊 Analytics Dashboard in Development</h3>
              <p>
                I'm working on building comprehensive data metrics and
                visualizations to showcase my analytical capabilities and real
                project outcomes.
              </p>
              <div className="learning-status">
                <span className="status-badge">🔧 Building Dashboard</span>
              </div>
            </div>
          </div>
        </>
      );
    }

    if (key === "Data Stories") {
      return (
        <>
          <span className="projectlist-section-title">Data Stories & Blog</span>
          <div className="projectlist-duration">Coming Soon</div>
          <div className="coming-soon-content">
            <div className="coming-soon-message">
              <h3>📚 Data Stories in Development</h3>
              <p>
                I'm working on creating authentic content about my data science
                learning journey. Expect posts about SQL discoveries, Python
                challenges, and real-world project insights.
              </p>
              <div className="learning-status">
                <span className="status-badge">📖 Crafting Stories</span>
              </div>
            </div>
          </div>
        </>
      );
    }

    // Handle project sections (SQL, Python, Tableau)
    const projects = projectsData[key];

    if (!projects || projects.length === 0) {
      return (
        <>
          <span className="projectlist-section-title">{key} Projects</span>
          <div className="projectlist-duration">Coming Soon</div>
          <div className="coming-soon-content">
            <div className="coming-soon-message">
              <h3>🚀 Projects in Development</h3>
              <p>
                Jessica is currently learning {key.toLowerCase()} and building
                projects in this category. Check back soon to see her latest
                work!
              </p>
              <div className="learning-status">
                <span className="status-badge">📚 Learning {key}</span>
              </div>
            </div>
          </div>
        </>
      );
    }

    // If projects exist, show them (for future when Jessica adds projects)
    return (
      <>
        <span className="projectlist-section-title">{key} Projects</span>
        <div className="projectlist-duration">
          {projects.length} Project{projects.length !== 1 ? "s" : ""}
        </div>
        <ul className="project-description">
          {projects.map((project, i) => (
            <li key={i}>
              <strong>{project.name}</strong> - {project.tags.join(", ")}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div
      className={`projectlist-root ${isHorizontal ? "horizontal" : "vertical"}`}
    >
      <div
        className={`projectlist-tabs ${isHorizontal ? "horizontal" : "vertical"}`}
      >
        {keys.map((key, i) => (
          <button
            key={key}
            className={`projectlist-tab${value === i ? " active" : ""}`}
            onClick={() => handleTabChange(i)}
          >
            {isHorizontal ? `0${i + 1}.` : key}
          </button>
        ))}
      </div>

      <div className="projectlist-content" ref={contentRef}>
        {keys.map((key, i) => (
          <div
            key={i}
            className={`projectlist-panel${value === i ? " active" : " inactive"}`}
            style={{
              display: value === i ? "block" : "none",
            }}
          >
            {renderProjectContent(key, i)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
