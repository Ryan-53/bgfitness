import React, { useState, useRef, useEffect } from 'react';
import './reviews.css';

const Reviews = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  // Scroll to the selected review
  const scrollToIndex = (index) => {
    if (trackRef.current) {
      const reviewBoxWidth = trackRef.current.children[0].offsetWidth;
      trackRef.current.scrollTo({
        left: reviewBoxWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  // Update current index on scroll
  const handleScroll = () => {
    if (trackRef.current) {
      const reviewBoxWidth = trackRef.current.children[0].offsetWidth;
      const newIndex = Math.round(trackRef.current.scrollLeft / reviewBoxWidth);
      setCurrentIndex(newIndex);
    }
  };

  const scrollLeft = () => {
    trackRef.current.scrollBy({
      left: -trackRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    trackRef.current.scrollBy({
      left: trackRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="review-carousel">

      {/* Scroll left arrow */}
      <button className="nav-arrow left-arrow" onClick={scrollLeft}>
        &larr;
      </button>
      
      <div
        className="review-track"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {reviews.map((review, index) => (
          <div className="review-box" key={index}>
            <blockquote>
              <p>{review.text}</p>
              <footer>— {review.author}</footer>
            </blockquote>
          </div>
        ))}
        <button class="nav-arrow right-arrow">&rarr;</button>
      </div>

      {/* Navigation Dots */}
      <div className="review-dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>

      {/* Scroll right arrow */}
      <button className="nav-arrow right-arrow" onClick={scrollRight}>
        &rarr;
      </button>
    </div>
  );
};

export default Reviews