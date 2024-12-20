import React from 'react';
import './App.css';
import brand_logo from './assets/BGfitness_logo_transparent.png';
import Reviews from './reviews';

const reviews = [
  { text: '"This personal trainer is fantastic! Highly recommend."', author: 'Reviewer 1' },
  { text: '"Amazing quality and great customer service."', author: 'Reviewer 2' },
  { text: '"Exceeded my expectations in every way."', author: 'Reviewer 3' },
  { text: '"Best PT ever!"', author: 'Reviewer 4' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={brand_logo} alt="business logo"></img>
        {/* TODO: Font */}
        <nav>
          <a href="#about" className='navbar-item'>About me</a>
          <a href="#services" className='navbar-item'>Services</a>
          <a href="#reviews" className='navbar-item'>Testimonials</a>
          <a href="#contact" className='navbar-item'>Contact</a>
        </nav>
      </header>
      <div className="container">
        <div id="content-wrap">
          <div className="quick-contact">
            {/* TODO: Links */}
            <p>
              <i class="fa-solid fa-envelope"></i>
              &nbsp; babs@bgfitness.co.uk &nbsp;|&ensp;
              <i class="fa-solid fa-phone"></i>
              &nbsp; 07977 211484
            </p>
          </div>
          {/* TODO: Add in picture to top-right of section*/}
          <section id="about">
            <h1>About Me</h1>
            <div className="modal-body row">
              <div className="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris ipsum, molestie id gravida vitae, porta non ipsum. Mauris a diam eu lacus scelerisque blandit nec ut erat. Vestibulum nec tincidunt nulla. Nunc vel enim libero. Fusce lectus nunc, porttitor facilisis leo eu, varius sollicitudin dui. Proin eget sollicitudin lectus. Morbi gravida a mi eget vehicula. Aenean consectetur tellus at nulla hendrerit efficitur. Nullam gravida consequat justo vel iaculis. 
                </p>
              </div>
            </div>
            <p>
              Proin tristique placerat aliquam. Maecenas interdum nec lectus malesuada scelerisque. In vitae massa eu dolor porta ultrices. Sed molestie, mi accumsan maximus rhoncus, neque eros pellentesque ipsum, sit amet porttitor sem enim sed augue. Sed faucibus lorem nibh, finibus interdum massa blandit et. Praesent scelerisque turpis sed aliquet sodales. Praesent ultricies non sem eget gravida. Phasellus rutrum odio et tristique mattis. Nulla purus augue, posuere eget sapien et, ultricies sollicitudin lorem. Sed in magna at risus vehicula dignissim non sollicitudin mi. 
            </p>
          </section>
          <section id="services">
            <h1>Services</h1>
            <p>Personal training</p>
          </section>
          <section id="reviews">
            <h1>Testimonials</h1>
            <Reviews reviews={reviews}/>
          </section>
        </div>
        {/* TODO: Fix whitespace gap between reviews and footer / footer and bottom of page (issue may be in reviews section) */}
        <footer className="site-footer" id="contact">
          <h1>Contact Info</h1>
          {/* TODO: Link to email */}
          <p>
            <i class="fa-solid fa-envelope"></i>
            &nbsp; babs@bgfitness.co.uk
          </p>
          {/* TODO: Link to call */}
          <p>
            <i class="fa-solid fa-phone"></i>
            &nbsp; 07977 211484
          </p>
          <p>
            <i class="fa-solid fa-location-dot"></i>
            &nbsp; Audley, Stoke-on-Trent
          </p>
        </footer>
      </div>
        
    </div>
    
  );
}

export default App;

