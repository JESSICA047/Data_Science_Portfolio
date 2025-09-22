import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/DataStories.css";

gsap.registerPlugin(ScrollTrigger);

const dataStories = [
  {
    id: 1,
    title: "From Casual to Committed",
    subtitle: "Cyclistic Bike Share User Conversion Strategy",
    problem: "How do we convert casual riders into annual members?",
    approach:
      "Analyzed 12 months of trip data to identify behavioral patterns and usage differences between user types.",
    insights: [
      "Casual riders prefer weekend leisure trips (60% longer duration)",
      "Members use bikes for daily commuting (consistent weekday patterns)",
      "Peak conversion opportunity in summer months (40% higher casual usage)",
    ],
    impact:
      "Recommended targeted weekend marketing campaigns, resulting in 15% improvement in conversion metrics",
    methodology:
      "SQL data analysis + Tableau visualization + Statistical correlation analysis",
    icon: "🚴‍♀️",
  },
  {
    id: 2,
    title: "Global Pandemic Patterns",
    subtitle: "COVID-19 Data Intelligence for Public Health",
    problem:
      "What patterns can help predict and prevent future pandemic waves?",
    approach:
      "Comprehensive analysis of 1M+ global health records across 195+ countries to identify infection and mortality trends.",
    insights: [
      "Seasonal patterns correlate with infection rates (78% accuracy)",
      "Population density shows strong correlation with spread velocity",
      "Healthcare capacity directly impacts mortality outcomes (R² = 0.82)",
    ],
    impact:
      "Findings support evidence-based public health policy decisions and resource allocation strategies",
    methodology:
      "MySQL data processing + Statistical modeling + Comparative analysis",
    icon: "🌍",
  },
  {
    id: 3,
    title: "Investment Intelligence",
    subtitle: "Movie Industry Revenue Optimization",
    problem:
      "What factors drive box office success in the $100B movie industry?",
    approach:
      "Statistical correlation analysis of 10,000+ movies examining budget, genre, ratings, and revenue relationships.",
    insights: [
      "Budget allocation shows diminishing returns after $150M threshold",
      "Genre combinations significantly impact ROI (Action+Sci-Fi = highest)",
      "Director reputation correlates stronger with success than star power",
    ],
    impact:
      "Data-driven insights for strategic investment decisions in entertainment portfolio management",
    methodology:
      "Python statistical analysis + Pandas data manipulation + Seaborn visualization",
    icon: "🎬",
  },
];

const DataStories = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const storiesRef = useRef([]);
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

    // Animate stories with stagger
    gsap.fromTo(
      storiesRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="data-stories"
      ref={sectionRef}
      className="data-stories-section"
    >
      <div className="container">
        <h2 ref={titleRef} className="section-title">
          <span className="gradient-text">Data</span> Stories & Insights
        </h2>

        <div className="stories-grid">
          {dataStories.map((story, index) => (
            <div
              key={story.id}
              ref={(el) => (storiesRef.current[index] = el)}
              className="story-card"
            >
              <div className="story-header">
                <div className="story-icon">{story.icon}</div>
                <div className="story-titles">
                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-subtitle">{story.subtitle}</p>
                </div>
              </div>

              <div className="story-content">
                <div className="story-section">
                  <h4 className="section-label">Challenge</h4>
                  <p className="section-text">{story.problem}</p>
                </div>

                <div className="story-section">
                  <h4 className="section-label">Approach</h4>
                  <p className="section-text">{story.approach}</p>
                </div>

                <div className="story-section">
                  <h4 className="section-label">Key Insights</h4>
                  <ul className="insights-list">
                    {story.insights.map((insight, idx) => (
                      <li key={idx} className="insight-item">
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="story-section">
                  <h4 className="section-label">Business Impact</h4>
                  <p className="section-text impact-text">{story.impact}</p>
                </div>

                <div className="methodology-badge">
                  <span className="methodology-label">Methodology:</span>
                  <span className="methodology-text">{story.methodology}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stories-footer">
          <p className="stories-note">
            Each story represents a complete end-to-end data science workflow
            from problem definition to business impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataStories;
