import React from 'react';
import './Products.css'; // Import the CSS file for this component

const Product = () => {
  return (
    <div className="product-container">
      <section className="coming-soon-section">
        <div className="container">
          <h2>Exciting Product Coming Soon</h2>
          <p>We're busy working on something awesome. Stay tuned for our upcoming product!</p>
        </div>
      </section>
    </div>
  );
};

export default Product;
