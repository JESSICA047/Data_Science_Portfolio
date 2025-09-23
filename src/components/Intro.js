import React, { useEffect, useRef } from "react";
import "../styles/Intro.css";
import AnimatedRobot from "./AnimatedRobot";
import Icon from "./Icons";
import { gsap } from "gsap";

const Intro = () => {
  const headerRef = useRef(null);
  const taglineRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const buttonsRef = useRef(null);
  const robotRef = useRef(null);
  const dataVisualsRef = useRef(null);
  const orbitRef = useRef(null);
  const hasRunRef = useRef(false);

  const funFacts = [
    "🧪 From lab coats to code commits",
    "📚 Currently mastering SQL & Python",
    "🎯 Goal: Senior Data Scientist by 2027",
    "☕ Powered by curiosity & coffee",
    "🌟 Learning something new every day",
  ];

  useEffect(() => {
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    // Set initial states
    gsap.set(
      [
        headerRef.current,
        taglineRef.current,
        descRef.current,
        statsRef.current,
        buttonsRef.current,
      ],
      {
        opacity: 0,
        y: 30,
      }
    );

    gsap.set(robotRef.current, {
      opacity: 0,
      scale: 0.8,
      rotation: -10,
    });

    gsap.set(dataVisualsRef.current.children, {
      opacity: 0,
      scale: 0.5,
    });

    gsap.set(orbitRef.current.children, {
      opacity: 0,
      scale: 0.3,
    });

    // Animate in sequence
    const tl = gsap.timeline();

    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .to(
        statsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .to(
        robotRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .to(
        dataVisualsRef.current.children,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(
        orbitRef.current.children,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
  }, []);

  return (
    <div className="intro-section">
      <div className="intro-content">
        <div className="intro-header" ref={headerRef}>
          <span className="intro-greeting">👋 Hi there, I'm</span>
          <h1 className="intro-name">
            Jessica <span className="name-highlight">Adzoyi</span>
          </h1>
        </div>

        <div className="intro-tagline" ref={taglineRef}>
          <span className="tagline-primary">Turning Data into Stories</span>
          <span className="tagline-secondary">📊 One Analysis at a Time</span>
        </div>

        <div className="intro-description" ref={descRef}>
          <p>
            Biochemistry graduate turned{" "}
            <strong>aspiring data scientist</strong> on an exciting journey of
            discovery. Currently pursuing Computer Science while diving deep
            into analytics as an intern and through intensive learning at
            DataCamp and WorldQuant University.
          </p>
          <p>
            My mission? Transform complex datasets into clear, actionable
            insights that drive meaningful decisions. Every day brings new
            opportunities to learn, grow, and get closer to my dream of becoming
            a Senior Data Scientist.
          </p>
        </div>

        <div className="intro-stats" ref={statsRef}>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Enthusiasm</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Learning Mode</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Growth Mindset</span>
          </div>
        </div>

        <div className="intro-actions" ref={buttonsRef}>
          <a
            // href="/assets/resume.pdf" 
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="Document" className="button-icon" />
            View My Resume
          </a>
          <a href="#projects" className="secondary-button">
            <Icon name="Code" className="button-icon" />
            Explore My Work
          </a>
        </div>
      </div>

      <div className="intro-visual">
        <div className="data-visuals" ref={dataVisualsRef}>
          <div className="visual-element chart-1">📈</div>
          <div className="visual-element chart-2">📊</div>
          <div className="visual-element chart-3">🎯</div>
          <div className="visual-element chart-4">💡</div>
        </div>

        {/* New Orbital Container */}
        <div className="orbital-container" ref={orbitRef}>
          <div className="orbital-element orbit-1">🎯</div>
          <div className="orbital-element orbit-2">📊</div>
          <div className="orbital-element orbit-3">💻</div>
          <div className="orbital-element orbit-4">🧠</div>
          <div className="orbital-element orbit-5">⚡</div>
          <div className="orbital-element orbit-6">🔍</div>
        </div>

        <div className="robot-container" ref={robotRef}>
          <AnimatedRobot />
        </div>

        <div className="learning-badge">
          <span>🚀 Currently Learning</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
