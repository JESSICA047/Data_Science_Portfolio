import React, { useState } from "react";
import ComingSoon from "./ComingSoon";
import "../styles/ComingSoonPlaceholder.css";

const DataMetrics = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleClick = () => {
    setShowComingSoon(true);
  };

  return (
    <>
      <section id="data-metrics" className="data-metrics-section">
        <div className="container">
          <h2 className="section-title">Data Metrics Dashboard</h2>
          <div className="coming-soon-placeholder" onClick={handleClick}>
            <div className="placeholder-icon">📊</div>
            <h3>Analytics Dashboard Coming Soon</h3>
            <p>
              I'm working on building comprehensive data metrics and
              visualizations to showcase my analytical capabilities and real
              project outcomes.
            </p>
            <button className="placeholder-button">Learn More</button>
          </div>
        </div>
      </section>

      <ComingSoon
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        title="Data Metrics Dashboard"
        message="I'm currently developing a comprehensive analytics dashboard that will showcase real-time data insights, KPIs, and interactive visualizations from my actual projects. This will demonstrate my skills in data analysis and business intelligence tools once I have substantial project data to display!"
      />
    </>
  );
};

export default DataMetrics;
