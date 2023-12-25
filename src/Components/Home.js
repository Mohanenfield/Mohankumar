// Home.js

import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import image1 from "./images/IMG-20231223-WA0001.jpg";
import image2 from "./images/IMG-20231223-WA0002.jpg";
import image3 from "./images/IMG-20231223-WA0003.jpg";
import image4 from "./images/automative_image.jpg";
import image5 from "./images/IMG-20231223-WA0004.jpg";
import image6 from "./images/IMG-20231223-WA0005.jpg";
import image7 from "./images/IMG-20231223-WA0006.jpg";
import image8 from "./images/IMG-20231223-WA0008.jpg";
import image9 from "./images/IMG-20231223-WA0007.jpg";
import image10 from "./images/IMG-20231223-WA0009.jpg";
import aimage1 from "./images/images (9).jpeg";
import aimage2 from "./images/images (10).jpeg";
import mimage1 from "./images/images (12).jpeg";
import mimage2 from "./images/images (13).jpeg";
import aeimage1 from "./images/Stainless-Steel-Deep-Hole-Drilled-Pipe.jpg";
import aeimage2 from "./images/images (16).jpeg";
import dimage1 from "./images/220px-105mm_tank_gun_Rifling.jpg";
import dimage2 from "./images/images (18).jpeg";
import moimage1 from "./images/images (19).jpeg";
import moimage2 from "./images/plastic-injection-die-mould-500x500.jpg";
import himage1 from "./images/images (21).jpeg";
import himage2 from "./images/images (20).jpeg"

const Home = () => {
  const images = [image1, image2, image3, image5, image6, image7, image8, image9, image10];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Precision in Every Depth</h1>
          <p className="subtitle">Your Premier Partner in High-Quality Deep Hole Drilling</p>
        </div>
      </section>
      <section className="welcome-section">
        <div className="i-container">
          <h2 className="welcome-title">Welcome to RK Industries</h2>
          <p className="welcome-message">
            At RK Industries, we take pride in delivering precision through high-quality deep hole drilling.
            Welcome to a world of excellence, where each depth is crafted with utmost accuracy and care.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="i-container">
          <h2>About RK Industries</h2>
          <p>
            RK Industries is a globally recognized provider of high-quality deep hole drilling services. With a commitment to precision and excellence, we serve industries such as automotive, medical, mold manufacturing, animal feed, firearms, energy, and aerospace.
          </p>
        </div>
      </section>
      <section className="pictures-section">
        <div className="i-container">
          <h2>Our Trending Work</h2>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="trending-card">
                <img src={image} alt={`Example ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="industries-section">
      <div className="i-container">
        <h2>Industries We Serve</h2>

        {/* Industry 1 */}
        <div className="industry">
        <h3>Automotive Industry</h3>
          <p>Camshaft, Liebherr Shaft, Rocker Shaft,
             Input % Output Shaft, etc.</p>
          <div className="image-container">
            <img src={aimage2} alt="Automotive Industry 1" />
          </div>
          <div className="image-container">
            <img src={aimage1} alt="Automotive Industry 2" />
          </div>
         
        </div>

        {/* Industry 2 */}
        <div className="industry">
        <h3>Medical Industry</h3>
          <p>Medical Nails, Studs, Rods, Stunts, etc.</p>
          <div className="image-container">
            <img src={mimage1} alt="Another Industry 1" />
          </div>
          <div className="image-container">
            <img src={mimage2} alt="Another Industry 2" />
          </div>
         
        </div>
        {/* Industry 1 */}
        <div className="industry">
        <h3>Aerospace Industry</h3>
          <p>Landing Gears, Centre Rod, Push Rod, etc.</p>
          <div className="image-container">
            <img src={aeimage1} alt="Automotive Industry 1" />
          </div>
          <div className="image-container">
            <img src={aeimage2} alt="Automotive Industry 2" />
          </div>
          
        </div>
        {/* Industry 1 */}
        <div className="industry">
        <h3>Defense Industry</h3>
          <p>Rifle driling, Armoured Vehicle Components etc.</p>
          <div className="image-container">
            <img src={dimage1} alt="Automotive Industry 1" />
          </div>
          <div className="image-container">
            <img src={dimage2} alt="Automotive Industry 2" />
          </div>
         
        </div>
        {/* Industry 1 */}
        <div className="industry">
        <h3>Die Mold Industry</h3>
          <p>Plastic Injection Molds, PDC Dies.</p>
          <div className="image-container">
            <img src={moimage1} alt="Automotive Industry 1" />
          </div>
          <div className="image-container">
            <img src={moimage2} alt="Automotive Industry 2" />
          </div>
    
        </div>
        <div className="industry">
        <h3>Heavy Engineering Industry</h3>
          <p>Piston red and shafts for heavy Machineries, Forging Rods, etc.</p>
          <div className="image-container">
            <img src={himage1} alt="Automotive Industry 1" />
          </div>
          <div className="image-container">
            <img src={himage2} alt="Automotive Industry 2" />
          </div>
         
        </div>

        {/* Add more industries with images and content */}
      </div>
    </section>

     

      <section className="mission-section">
        <div className="i-container">
          <h2>Our Mission</h2>
          <p>
            At RK Industries, our mission is to be a global leader in deep hole drilling, delivering innovative solutions and unparalleled quality. We strive to exceed the expectations of our clients and contribute to the success of industries we serve.
          </p>
        </div>
      </section>

      <section className="key-features">
        <div className="i-container">
          <h2>Key Features</h2>
          <div className="features-content">
            <div className="feature-item">
              <h3>Advanced Technology</h3>
              <p>Utilizing cutting-edge technology for precise and efficient deep hole drilling.</p>
            </div>
            <div className="feature-item">
              <h3>Global Reach</h3>
              <p>Serving clients worldwide in automotive, medical, aerospace, and more.</p>
            </div>
            <div className="feature-item">
              <h3>Quality Assurance</h3>
              <p>Committed to delivering high-quality results with rigorous quality control measures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="i-container">
          <h2 >Contact Us</h2>
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

export default Home;
