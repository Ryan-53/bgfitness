import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about">
        <h1>About Us</h1>
        <p>We are a small business specializing in XYZ.</p>
      </section>
      <section id="services">
        <h1>Our Services</h1>
        <p>Details about services offered.</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>Email: example@business.com</p>
      </section>
    </div>
  );
}

export default App;

