import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          Build Modern React Apps 🚀
        </h1>
        <p style={styles.subtitle}>
          Fast, scalable, and user-friendly web applications using React.
        </p>

        <div style={styles.btnGroup}>
          <Link to="/about" style={styles.primaryBtn}>
            Get Started
          </Link>
          <Link to="/contact" style={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>⚡ Fast</h3>
          <p>Optimized performance with modern React tools.</p>
        </div>

        <div style={styles.card}>
          <h3>🎨 Responsive</h3>
          <p>Looks great on mobile, tablet & desktop.</p>
        </div>

        <div style={styles.card}>
          <h3>🔐 Secure</h3>
          <p>Clean and secure component-based architecture.</p>
        </div>
      </section>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "0 20px",
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "30px",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  primaryBtn: {
    padding: "12px 25px",
    background: "#2563eb",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  },
  secondaryBtn: {
    padding: "12px 25px",
    border: "1px solid #2563eb",
    color: "#2563eb",
    textDecoration: "none",
    borderRadius: "6px",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "60px",
  },
  card: {
    padding: "25px",
    border: "1px solid #eee",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default Home;
