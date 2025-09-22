import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/DataMetrics.css";

gsap.registerPlugin(ScrollTrigger);

const metricsData = [
  {
    number: "8+",
    label: "Data Projects",
    description: "Completed across SQL, Python, and Tableau",
    icon: "📊",
  },
  {
    number: "1M+",
    label: "Data Points",
    description: "Analyzed in real-world business contexts",
    icon: "🔍",
  },
  {
    number: "3",
    label: "Tech Stacks",
    description: "SQL, Python, Tableau proficiency",
    icon: "⚡",
  },
  {
    number: "100%",
    label: "Project Success",
    description: "All projects delivered actionable insights",
    icon: "🎯",
  },
];

const DataMetrics = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const metricsRef = useRef([]);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    // Animate title
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate metrics with stagger
    gsap.fromTo(
      metricsRef.current,
      { y: 60, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Counter animation for numbers
    metricsRef.current.forEach((metric, index) => {
      const numberElement = metric?.querySelector(".metric-number");
      if (numberElement) {
        const finalNumber = metricsData[index].number;

        ScrollTrigger.create({
          trigger: metric,
          start: "top 80%",
          onEnter: () => {
            if (finalNumber.includes("+")) {
              const num = parseInt(finalNumber);
              gsap.to(numberElement, {
                textContent: num,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function () {
                  numberElement.textContent =
                    Math.ceil(this.targets()[0].textContent) + "+";
                },
              });
            } else if (finalNumber.includes("%")) {
              const num = parseInt(finalNumber);
              gsap.to(numberElement, {
                textContent: num,
                duration: 1.5,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function () {
                  numberElement.textContent =
                    Math.ceil(this.targets()[0].textContent) + "%";
                },
              });
            }
          },
        });
      }
    });
  }, []);

  return (
    <section
      id="data-metrics"
      ref={sectionRef}
      className="data-metrics-section"
    >
      <div className="container">
        <h2 ref={titleRef} className="section-title">
          <span className="gradient-text">Data-Driven</span> Impact
        </h2>

        <div className="metrics-grid">
          {metricsData.map((metric, index) => (
            <div
              key={index}
              ref={(el) => (metricsRef.current[index] = el)}
              className="metric-card"
            >
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-number">{metric.number}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-description">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="metrics-footer">
          <p className="metrics-note">
            *Metrics reflect completed projects and learning achievements in
            data science journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataMetrics;
