// About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="i-container">
          <h2>About RK Industries</h2>
          <p>
            RK Industries is a leading provider of precision deep hole drilling services, dedicated to delivering excellence in every project. With a rich history and a commitment to innovation, we have established ourselves as a trusted partner in various industries.
          </p>

          <p>
            At RK Industries, we combine cutting-edge technology with a team of skilled professionals to provide solutions that meet the highest standards of quality and precision. Our focus on customer satisfaction and continuous improvement sets us apart in the field of deep hole drilling.
          </p>

          <div className="key-points">
            <h3>Key Points About RK Industries</h3>
            <ul>
              <li>State-of-the-Art Technology and Equipment</li>
              <li>Committed to Precision and Quality</li>
              <li>Trusted Partner Across Various Industries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="facilities-section">
        <div className="i-container">
          <h2>Our State-of-the-Art Facilities</h2>
          <p>
            RK Industries is equipped with cutting-edge facilities to ensure the highest standards of precision and efficiency in our deep hole drilling processes. Our modern facilities are designed to meet the diverse needs of our clients across industries.
          </p>

          {/* Facility 1 */}
          <div className="facility">
            {/* <img src="images/facility_1.jpg" alt="Facility 1" /> */}
            <h4>Drilling Center</h4>
            <p>Equipped with advanced drilling technology.</p>
          </div>
          {/* Add more facilities as needed */}
        </div>
      </section>
      <br />

      <section className="contact-section">
        <div className="i-container">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <div>
              <h2 className="contact-key">RK Industries:</h2>
              <span>No:3, Part 1, Mahathma Gandhi Road, TASS Industrial Estate, Ambattur, Chennai - 600098</span>
            </div>
            <div>
              <span className="contact-key">GST No:</span>
              <span>33EEDPM1639J1ZH</span>
            </div>
            <div>
              <span className="contact-key">Call Us:</span>
              <span> 9597460578</span>
            </div>
            <div>
              <span className="contact-key">Email:</span>
              <span>md.rkindustries@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
