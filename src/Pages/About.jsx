import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <section className="about-header">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          We build modern, scalable, and user-friendly React applications.
        </p>
      </section>

      {/* Content */}
      <section className="about-content">
        <div className="about-card">
          <h3>🚀 Our Mission</h3>
          <p>
            To create high-quality web applications that are fast, responsive,
            and easy to maintain using modern React practices.
          </p>
        </div>

        <div className="about-card">
          <h3>💡 What We Do</h3>
          <p>
            We specialize in React, JavaScript, REST APIs, and clean UI design
            to deliver real-world solutions.
          </p>
        </div>

        <div className="about-card">
          <h3>🤝 Why Choose Us</h3>
          <p>
            Clean code, scalable architecture, and a strong focus on user
            experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
