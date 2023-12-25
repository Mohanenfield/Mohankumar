// Contact.js

import React from 'react';
import './Contact.css'; // Import the updated CSS file for this component

const Contact = () => {
  return (
    <div className="new-contact-container">
      <section className="new-contact-section">
        <div className="new-container">
          <h2>Contact Us</h2>
          <div className="new-contact-details">
            <div className="new-contact-item">
              <h3>Address</h3>
              <p>No:3, Part 1, Mahathma Gandhi Road, TASS Industrial Estate, Ambattur, Chennai - 600098</p>
            </div>
            <div className="new-contact-item">
              <h3>GST No</h3>
              <p>33EEDPM1639J1ZH</p>
            </div>
            <div className="new-contact-item">
              <h3>Call Us</h3>
              <p>Contact: 9597460578</p>
            </div>
            <div className="new-contact-item">
              <h3>Email</h3>
              <p>Email: md.rkindustries@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="new-map-section">
        <div className="new-container">
          <h2>Find Us on the Map</h2>
          <div className="new-map-container">
            <iframe
              title="RK Industries Location"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.510973372257!2d80.16735281482304!3d13.111834390774914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52ef0c7c67f399%3A0xf4ef11ea72d8c940!2sRK%20Industries!5e0!3m2!1sen!2sin!4v1639857021674!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
