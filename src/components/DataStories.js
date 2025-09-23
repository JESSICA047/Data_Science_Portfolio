import React, { useState } from "react";
import ComingSoon from "./ComingSoon";
import "../styles/ComingSoonPlaceholder.css";

const DataStories = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleClick = () => {
    setShowComingSoon(true);
  };

  return (
    <>
      <section id="data-stories" className="data-stories-section">
        <div className="container">
          <h2 className="section-title">Data Stories & Blog</h2>
          <div className="coming-soon-placeholder" onClick={handleClick}>
            <div className="placeholder-icon">📝</div>
            <h3>Blog Posts Coming Soon</h3>
            <p>
              I'm preparing to share my learning journey, insights, and data
              science discoveries through engaging blog posts and case studies.
            </p>
            <button className="placeholder-button">Stay Tuned</button>
          </div>
        </div>
      </section>

      <ComingSoon
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        title="Data Stories & Blog"
        message="I'm working on creating authentic content about my data science learning journey. Expect posts about SQL discoveries, Python challenges, visualization insights, and real-world project breakdowns from my authentic beginner perspective!"
      />
    </>
  );
};

export default DataStories;
