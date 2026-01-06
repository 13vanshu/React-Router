import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <section style={styles.header}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>
          We build modern, scalable, and user-friendly React applications.
        </p>
      </section>

      {/* Content */}
      <section style={styles.content}>
        <div style={styles.card}>
          <h3>🚀 Our Mission</h3>
          <p>
            To create high-quality web applications that are fast, responsive,
            and easy to maintain using modern React practices.
          </p>
        </div>

        <div style={styles.card}>
          <h3>💡 What We Do</h3>
          <p>
            We specialize in React, JavaScript, REST APIs, and clean UI design
            to deliver real-world solutions.
          </p>
        </div>

        <div style={styles.card}>
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

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px 20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "25px",
    border: "1px solid #eee",
    borderRadius: "10px",
    background: "#fafafa",
  },
};

export default About;
