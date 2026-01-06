import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div style={styles.container}>
      
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>

    </div>
  );
};

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  code: {
    fontSize: "6rem",
    color: "#2563eb",
    marginBottom: "10px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  text: {
    color: "#555",
    marginBottom: "25px",
  },
  button: {
    padding: "12px 25px",
    background: "#2563eb",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontSize: "1rem",
  },
};

export default Errorpage;
