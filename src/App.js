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
            <a href="mailto:babs@bgfitness.co.uk">
              <p>
                <i class="fa-solid fa-envelope"></i>
                &nbsp; babs@bgfitness.co.uk &nbsp;|
              </p>
            </a>

            <a href="tel:+447977211484">
              <p>
                <i class="fa-solid fa-phone"></i>
                &nbsp; 07977 211484
              </p>
            </a>
          </div>
          {/* TODO: Add in picture to top-right of section*/}
          <section id="about">
            <div class="paragraph">
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
            </div>
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
          <a href="mailto:babs@bgfitness.co.uk">
            <p>
              <i class="fa-solid fa-envelope"></i>
              &nbsp; babs@bgfitness.co.uk
            </p>  
          </a>

          {/* TODO: Link to call */}
          <a href="tel:+447977211484">
            <p>
              <i class="fa-solid fa-phone"></i>
              &nbsp; 07977 211484
            </p>
          </a>

          <a href="https://wa.me/447977211484?text=Hi,%20this%20is%20a%20test%20message">
            <p>
              <i class="fa-brands fa-whatsapp"></i>
              &nbsp; 07977 211484
            </p>
          </a>

          <a href="https://www.google.com/maps/place/Audley,+Stoke-on-Trent/@53.0513635,-2.3303374,3666m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487a5dc724ae25bf:0x464ffb78e0dbb010!8m2!3d53.054895!4d-2.306407!16zL20vMDkzNmJr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
            <p>
              <i class="fa-solid fa-location-dot"></i>
              &nbsp; Audley, Stoke-on-Trent
            </p>
          </a>
        </footer>
      </div>
        
    </div>
    
  );
}

export default App;

