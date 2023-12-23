import React from 'react';
import './Home.css';
import image1 from "./images/IMG-20231223-WA0001.jpg"
import image2 from "./images/IMG-20231223-WA0002.jpg"
import image3 from "./images/IMG-20231223-WA0003.jpg"
import image4 from "./images/automative_image.jpg"
import image5 from "./images/IMG-20231223-WA0004.jpg"
import image6 from "./images/IMG-20231223-WA0005.jpg"
import image7 from "./images/IMG-20231223-WA0006.jpg"
import Slider from 'react-slick';


const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed as needed
  };
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to RK Industries</h1>
          <p className="subtitle">Your Premier Partner in High-Quality Deep Hole Drilling</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>About RK Industries</h2>
          <p>
            RK Industries is a renowned provider of high-quality deep hole drilling services, catering to a diverse range of industries worldwide.
            With a commitment to precision and excellence, we have become a trusted partner for clients in the automotive, medical, mold manufacturing, animal feed, firearms, energy, and aerospace industries.
          </p>
        </div>
      </section>

      <section className="industries-section">
        <div className="container">
          <h2>Industries We Serve</h2>
          <div className="industry">
            <img src={image4} alt="Automotive Industry" />
            <h3>Automotive</h3>
            <p>Our deep hole drilling solutions contribute to the manufacturing of critical automotive components, ensuring precision and reliability.</p>
          </div>
          {/* Add more industries as needed */}
        </div>
      </section>

{/* 
      <section className="pictures-section">
        <div className="container">
          <h2>Our Work in Action</h2>
          <div className="scrollable-images">
          <img src={image1} alt="Example 1" />
            <img src={image2} alt="Example 2" />
            <img src={image3} alt="Example 3" />
            <img src={image4} alt="Example 2" />
            <img src={image5} alt="Example 3" />
            <img src={image6} alt="Example 2" />
          </div>
        </div>
      </section> */}
      <section className="pictures-section">
        <div className="container">
          <h2>Our Trending Work</h2>
          <Slider {...settings}>
            <div className="trending-card">
              <img src={image5} alt="Example 1" />
              {/* <div className="card-content">
                <h3>Trending Design 1</h3>
                <p>Discover our latest and most popular work in deep hole drilling.</p>
              </div> */}
            </div>
            <div className="trending-card">
              <img src={image2} alt="Example 2" />
              {/* <div className="card-content">
                <h3>Trending Design 2</h3>
                <p>Explore precision and innovation with our trending projects.</p>
              </div> */}
            </div>
            <div className="trending-card">
              <img src={image3} alt="Example 3" />
              {/* <div className="card-content">
                <h3>Trending Design 3</h3>
                <p>Experience the excellence of deep hole drilling in every detail.</p>
              </div> */}
            </div>
            <div className="trending-card">
              <img src={image6} alt="Example 3" />
              {/* <div className="card-content">
                <h3>Trending Design 3</h3>
                <p>Experience the excellence of deep hole drilling in every detail.</p>
              </div> */}
            </div>
            {/* Add more images as needed */}
          </Slider>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            At RK Industries, our mission is to empower industries through cutting-edge solutions and exceptional service.
            We aim to be a catalyst for progress, providing innovative products and services that drive success and sustainability.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature">
            <h3>Advanced Technology</h3>
            <p>We leverage the latest technologies to deliver state-of-the-art solutions to our clients.</p>
          </div>
          {/* Add more features as needed */}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Contact Us Today</h2>
          <p>Discover how RK Industries can elevate your industrial operations. Contact us for inquiries and consultations.</p>
          <button>Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
