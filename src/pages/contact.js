import React, { Component } from "react";
import "./contact.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <div>
   

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>We’d love to hear from you! Fill out the form below or reach out via phone or email.</p>

        <div className="contact-container">
          {/* LEFT*/}
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Lahore, Pakistan</p>
            <p><FontAwesomeIcon icon={faPhoneAlt} /> +923868761, +923890312</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> support@clothingcollection.com</p>
            <p><FontAwesomeIcon icon={faClock} /> 10:00 AM – 6:00 PM, Mon - Sat</p>
          </div>

          {/* RIGHT */}
          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows="6" placeholder="Your Message" required></textarea>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="map-section">
        <iframe
          src="https://maps.google.com/maps?q=Lahore,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>

    </div>
  );
}
