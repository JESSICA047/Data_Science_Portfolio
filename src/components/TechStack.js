import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/TechStack.css";
import { RiFileExcel2Fill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import {
  SiMysql,
  SiPostgresql,
  SiTableau,
  SiPython,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGit,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiN8N,
  SiClaude,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const techStackData = [
  // Core Data Science Tools
  {
    name: "Python",
    icon: <SiPython />,
    color: "#3776AB",
    proficiency: 85,
    category: "Programming",
  },
  {
    name: "SQL",
    icon: <SiMysql />,
    color: "#00758F",
    proficiency: 90,
    category: "Database",
  },
  {
    name: "Tableau",
    icon: <SiTableau />,
    color: "#E97627",
    proficiency: 80,
    category: "Visualization",
  },

  // Data Analysis & Processing
  {
    name: "Pandas",
    icon: <SiPandas />,
    color: "#150458",
    proficiency: 85,
    category: "Analysis",
  },
  {
    name: "NumPy",
    icon: <SiNumpy />,
    color: "#013243",
    proficiency: 80,
    category: "Analysis",
  },
  {
    name: "Excel",
    icon: <RiFileExcel2Fill />,
    color: "#217346",
    proficiency: 95,
    category: "Analysis",
  },

  // Development Tools
  {
    name: "Jupyter",
    icon: <SiJupyter />,
    color: "#F37626",
    proficiency: 90,
    category: "Development",
  },
  {
    name: "VS Code",
    icon: <VscVscode />,
    color: "#007ACC",
    proficiency: 85,
    category: "Development",
  },
  {
    name: "Git",
    icon: <SiGit />,
    color: "#F05032",
    proficiency: 75,
    category: "Development",
  },
];

export default function TechStack() {
  const techStackRef = useRef(null);

  useEffect(() => {
    console.log("TechStack component mounted");

    const totalItems = techStackData.length;
    const cols = 2;
    const rows = Math.ceil(totalItems / cols);
    const grid = [rows, cols];

    console.log("TechStack grid dimensions:", grid);

    gsap.set(".tech-icon-container", { opacity: 1, scale: 1 });

    gsap.fromTo(
      ".tech-title",
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
          trigger: "#tech-stack",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".tech-category",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#tech-stack",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const groupedSkills = techStackData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const handleSkillHover = (e, enter, skill) => {
    const target = e.currentTarget;
    const proficiencyBar = target.querySelector(".proficiency-fill");

    if (enter) {
      gsap.to(target, {
        y: -3,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(proficiencyBar, {
        width: `${skill.proficiency}%`,
        duration: 0.8,
        ease: "power2.out",
      });
    } else {
      gsap.to(target, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(proficiencyBar, {
        width: `${skill.proficiency * 0.8}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <section id="tech-stack" ref={techStackRef}>
      <div className="section-header">
        <span className="section-title tech-title">
          <span className="gradient-text">Technical</span> Skills
        </span>
      </div>

      <div className="tech-categories-container">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="tech-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  onMouseEnter={(e) => handleSkillHover(e, true, skill)}
                  onMouseLeave={(e) => handleSkillHover(e, false, skill)}
                >
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="proficiency-bar">
                    <div
                      className="proficiency-fill"
                      style={{
                        backgroundColor: skill.color,
                        width: `${skill.proficiency * 0.8}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
