import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';

import Header from './Header';

const App = () => {
  return (
    <Router>
      <div>
        {/* Your navigation and routes go here */}
        <Header />

<hr />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
