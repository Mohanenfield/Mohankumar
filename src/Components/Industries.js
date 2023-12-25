// Industries.js

import React from 'react';
import './Industries.css';
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




const Industries = () => {
  return (
    // <section className="custom-industries-section">
      <div className="custom-container">
        <h2>Industries We Serve</h2>

        <div className="custom-industry">
          <h3>Automotive Industry</h3>
          <p>Camshaft, Liebherr Shaft, RockerShaft, Input & Output Shaft, etc.</p>
          <div style={{ display: "flex", width: "300px", height: "300px" }}>
            <img src={aimage1} alt="Automotive Industry" />
            <img src={aimage2} alt="Automotive Industry" />
          </div>
        </div>

        <div className="custom-industry">
          <h3>Medical Industry</h3>
          <p>Camshaft, Liebherr Shaft, RockerShaft, Input & Output Shaft, etc.</p>
          <div style={{ display: "flex", width: "300px", height: "300px" }}>
            <img src={mimage1} alt="Medical Industry" />
            <img src={mimage2} alt="Medical Industry" />
          </div>
        </div>

        <div className="custom-industry">
          <h3>Aerospace Industry</h3>
          <p>Camshaft, Liebherr Shaft, RockerShaft, Input & Output Shaft, etc.</p>
          <div style={{ display: "flex", width: "300px", height: "300px" }}><img src={aeimage1} alt="Aerospace Industry" />
            <img src={aeimage2} alt="Aerospace Industry" /></div>
        </div>

        <div className="custom-industry">
          <h3>Defense Industry</h3>
          <p>Camshaft, Liebherr Shaft, RockerShaft, Input & Output Shaft, etc.</p>
          <div style={{ display: "flex", width: "300px", height: "300px" }}><img src={dimage1} alt="Defense Industry" />
            <img src={dimage2} alt="Defense Industry" /></div>
        </div>

        <div className="custom-industry">
          <h3>Die Mold Industry</h3>
          <p>Camshaft, Liebherr Shaft, RockerShaft, Input & Output Shaft, etc.</p>
          <div style={{ display: "flex", width: "300px", height: "300px" }}> <img src={moimage1} alt="Die Mold Industry" />
            <img src={moimage2} alt="Die Mold Industry" /></div>
        </div>

        <div className="custom-industry">
          <h3>Heavy Engineering Industry</h3>
          <p>Camshaft, Liebherr Shaft, RockerShaft, Input & Output Shaft, etc.</p>
          <div style={{ display: "flex", width: "300px", height: "300px" }}><img src={himage1} alt="Heavy Engineering Industry" />
            <img src={himage2} alt="Heavy Engineering Industry" /></div>
        </div>
      </div>
    // </section>
  );
};

export default Industries;
