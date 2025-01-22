import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from './Header.js';
import Nav from './Nav.js';
import Hero from './Hero.js';
import Menu from './Menu.js';
import Reviews from './Reviews.js';
import About from './About.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Hero />} />
        <Route path="/online-order" element={<Menu />} />
        <Route path="/login" element={<Nav />} />
      </Routes>
      <Hero />
      <Menu />
      <Reviews />
      <About />
      <Footer>
        <img src="./Logo.svg" alt="Little Lemon Logo"/>
      </Footer>
    </>
  );
}

export default App;
