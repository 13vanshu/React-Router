import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Contact.css";

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
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Have a question or want to work together? Let’s talk.
        </p>
      </div>

      {/* Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {/* Contact navigation */}
      <div className="contact-nav">
        <NavLink to="email">Email</NavLink>
        <NavLink to="phone">Phone</NavLink>
        <NavLink to="address">Address</NavLink>
      </div>

      {/* Nested route output */}
      <div className="contact-child">
        <Outlet />
      </div>
    </div>
  );
};

export default Contact;
