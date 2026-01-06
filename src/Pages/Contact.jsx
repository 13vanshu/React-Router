import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          Have a question or want to work together? Let’s talk.
        </p>
      </div>

      {/* Form */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>

      {/* Contact navigation */}
      <div style={styles.nav}>
        <NavLink
          to="email"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Email
        </NavLink>

        <NavLink
          to="phone"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Phone
        </NavLink>

        <NavLink
          to="address"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Address
        </NavLink>
      </div>

      {/* Nested route output */}
      <div style={styles.childContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default Contact;

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "2.3rem",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#555",
    fontSize: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  nav: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "500",
  },
  activeLink: {
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "700",
    borderBottom: "2px solid #2563eb",
  },
  childContent: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "1rem",
  },
};
