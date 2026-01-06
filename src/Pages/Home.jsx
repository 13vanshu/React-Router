import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">

      {/* Hero Section */}
      <section className="hero">
        <h1 className="title">Build Modern React Apps 🚀</h1>
        <p className="subtitle">
          Fast, scalable, and user-friendly web applications using React.
        </p>

        <div className="btn-group">
          <Link to="/about" className="primary-btn">
            Get Started
          </Link>
          <Link to="/contact" className="secondary-btn">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="card">
          <h3>⚡ Fast</h3>
          <p>Optimized performance with modern React tools.</p>
        </div>

        <div className="card">
          <h3>🎨 Responsive</h3>
          <p>Looks great on mobile, tablet & desktop.</p>
        </div>

        <div className="card">
          <h3>🔐 Secure</h3>
          <p>Clean and secure component-based architecture.</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
