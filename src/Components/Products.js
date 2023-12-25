// Products.js

import React from 'react';
import './Products.css';
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

const Product = () => {
  return (
    <div className="product-container">
      <section className="industries-section">
      <div className="i-container">
        <h2>Industries We Serve</h2>

        {/* Industry 1 */}
        <div className="industry">
        <h3>Automotive Industry</h3>
          <p>Our deep hole drilling solutions contribute to the
             manufacturing of critical automotive components, ensuring precision and reliability.</p>
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
          <p>Content for another industry goes here.</p>
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
          <p>Our deep hole drilling solutions contribute to the manufacturin
            g of critical automotive components, ensuring precision and reliability.</p>
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
          <p>Our deep hole drilling solutions contribute to the manufacturing of 
            critical automotive components, ensuring precision and reliability.</p>
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
          <p>Our deep hole drilling solutions contribute to the manufacturing of cri
            tical automotive components, ensuring precision and reliability.</p>
          <div className="image-container">
            <img src={moimage1} alt="Automotive Industry 1" />
          </div>
          <div className="image-container">
            <img src={moimage2} alt="Automotive Industry 2" />
          </div>
    
        </div>
        <div className="industry">
        <h3>Heavy Engineering Industry</h3>
          <p>Our deep hole drilling solutions contribute to the manufacturing of critical
             automotive components, ensuring precision and reliability.</p>
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

export default Product;
