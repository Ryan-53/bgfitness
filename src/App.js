import React from 'react';
import './App.css';
import brand_logo from './assets/BGfitness_logo_white_PT.png';
import Reviews from './reviews';

const reviews = [
  { text: '"I have attended Babs classes for over 13 years, they are run to our strengths and capabilities and I thoroughly enjoy them. She is a brilliant instructor and would recommend her to anyone wishing to take up any form of fitness training."', author: 'Glenis' },
  { text: '"She is very committed to everyone who joins her sessions."', author: 'Margaret S.' },
  { text: '"I have attended Babs classes now for over 12 years and as I am now a mature person she designs the routines to suit our abilities.  Keeping our minds and bodies active it is a pleasure to attend her classes. "', author: 'Margaret B.' },
  { text: '"I have attended Babs classes for 10 years now.  I have always found them very enjoyable and find Babs a very good instructor and very professional.  If I have any aches and pains she will always listen and advise the best way to handle them.  She makes our classes fun and I would definitely recommend her as a Personal Trainer."', author: 'Trish' },
  { text: '"She is very caring and aware of each individual capabilities.  Babs makes exercise fun and her enthusiasm is contagious."', author: 'Mary' },
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
            <a href="mailto:babs@bgfitness.co.uk" target="_blank" rel="noopener noreferrer">
              <p>
                <i class="fa-solid fa-envelope"></i>
                &nbsp; babs@bgfitness.co.uk &nbsp;|
              </p>
            </a>

            <a href="tel:+447977211484" target="_blank" rel="noopener noreferrer">
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
                  Hi, I’m Babs, and I’m passionate about helping women embrace their strength, confidence, and vitality through fitness. With over 21 years of experience in the fitness industry, I’ve spent much of my career leading group exercise classes and empowering others to achieve their health and wellness goals.
                </p>
                <p>
                  I specialise in working with women aged 40 and above, helping them navigate the unique challenges and opportunities that come with this stage of life. Whether you’re looking to build strength, improve flexibility, boost energy, or simply feel like the best version of yourself, I’m here to guide and support you every step of the way.
                </p>
                <p>
                  Fitness isn’t just about looking good, it’s about feeling good, living fully, and taking care of the incredible body you have. My approach combines expert knowledge with personalized attention to ensure you get the results you’re looking for in a fun, welcoming, and supportive environment.
                </p>
              </div>
            </div>
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
        
        <footer className="site-footer" id="contact">
          <h1>Contact Info</h1>
          <a href="mailto:babs@bgfitness.co.uk" target="_blank" rel="noopener noreferrer">
            <p>
              <i class="fa-solid fa-envelope"></i>
              &nbsp; babs@bgfitness.co.uk
            </p>  
          </a>

          <a href="tel:+447977211484" target="_blank" rel="noopener noreferrer">
            <p>
              <i class="fa-solid fa-phone"></i>
              &nbsp; 07977 211484
            </p>
          </a>

          {/* TODO: Change this placeholder message */}
          <a href="https://wa.me/447977211484?text=Hi,%20I'd%20love%20to%20find%20out%20more%20about%20what%20Personal%20Training%20services%20you%20have%20to%20offer!" target="_blank" rel="noopener noreferrer">
            <p>
              <i class="fa-brands fa-whatsapp"></i>
              &nbsp; 07977 211484
            </p>
          </a>

          <a href="https://www.google.com/maps/place/Audley,+Stoke-on-Trent/@53.0513635,-2.3303374,3666m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487a5dc724ae25bf:0x464ffb78e0dbb010!8m2!3d53.054895!4d-2.306407!16zL20vMDkzNmJr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
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

