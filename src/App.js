import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Nav from './Nav.js';
import Hero from './Hero.js';
import Menu from './Menu.js';
import Reviews from './Reviews.js';
import About from './About.js';
import Footer from './Footer.js';
import Main from './Main.js';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/home" element={<Nav />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Main />} />
        <Route path="/online-order" element={<Menu />} />
        <Route path="/login" element={<Footer />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>

      <section id="home-section">
        <Hero />
      </section>

      <section id="menu-section">
        <Menu />
      </section>

      <section id="reviews-section">
        <Reviews />
      </section>

      <section id="about-section">
        <About />
      </section>

      <Footer id="footer">
        <img src="./Logo.svg" alt="Little Lemon Logo" />
      </Footer>
    </>
  );
}

export default App;
