import React from 'react';
import './App.css';
import brand_logo from './assets/BGfitness_logo_dark_mode_cropped.png';
import Reviews from './reviews';

const reviews = [
  { text: 'This product is fantastic! Highly recommend. This product is fantastic! Highly recommend.', author: 'John Doe' },
  { text: 'Amazing quality and great customer service.', author: 'Jane Smith' },
  { text: 'Exceeded my expectations in every way.', author: 'Sam Johnson' },
  { text: 'This product is fantastic! Highly recommend. This product is fantastic! Highly recommend.', author: 'John Doe' },
  { text: 'Amazing quality and great customer service.', author: 'Jane Smith' },
  { text: 'Exceeded my expectations in every way.', author: 'Sam Johnson' }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={brand_logo} alt="business logo"></img>
        <nav>
          <a href="#about">About me</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div class="container">
        <section id="about">
          <h1>About Me</h1>
          <div class="modal-body row">
            <div class="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris ipsum, molestie id gravida vitae, porta non ipsum. Mauris a diam eu lacus scelerisque blandit nec ut erat. Vestibulum nec tincidunt nulla. Nunc vel enim libero. Fusce lectus nunc, porttitor facilisis leo eu, varius sollicitudin dui. Proin eget sollicitudin lectus. Morbi gravida a mi eget vehicula. Aenean consectetur tellus at nulla hendrerit efficitur. Nullam gravida consequat justo vel iaculis. 
              </p>
            </div>
            <div class="col-md-6">
              Picture
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
          <h1>Reviews</h1>
          <Reviews reviews={reviews}/>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>Email: babs@bgfitness.co.uk</p>
          <p>Mobile: (+44) 07977 211484</p>
        </section>
      </div>
    </div>
  );
}

export default App;

