import React from 'react';
import './About.css'; // Import the CSS file for this component

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="container">
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
              <li>Decades of Experience in Deep Hole Drilling</li>
              <li>State-of-the-Art Technology and Equipment</li>
              <li>Committed to Precision and Quality</li>
              <li>Trusted Partner Across Various Industries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p>
            Our dedicated team of professionals brings a wealth of experience and expertise to every project. With a shared commitment to excellence, we work collaboratively to ensure the success of our clients.
          </p>

          <div className="team-members">
            {/* Add team member details and images here */}
            <div className="team-member">
              <img src="images/team_member_1.jpg" alt="Team Member 1" />
              <h4>John Doe</h4>
              <p>Lead Drilling Engineer</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      <section className="facilities-section">
        <div className="container">
          <h2>Our State-of-the-Art Facilities</h2>
          <p>
            RK Industries is equipped with cutting-edge facilities to ensure the highest standards of precision and efficiency in our deep hole drilling processes. Our modern facilities are designed to meet the diverse needs of our clients across industries.
          </p>

          {/* Add facility details and images here */}
          <div className="facility">
            <img src="images/facility_1.jpg" alt="Facility 1" />
            <h4>Drilling Center</h4>
            <p>Equipped with advanced drilling technology.</p>
          </div>
          {/* Add more facilities as needed */}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Contact RK Industries Today</h2>
          <p>Discover how RK Industries can elevate your industrial operations. Contact us for inquiries, consultations, or to schedule a visit to our facilities.</p>
          <button>Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default About;
