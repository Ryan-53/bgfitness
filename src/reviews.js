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

  // Update the index on scroll
  const handleScroll = () => {
    if (trackRef.current) {
      const reviewBoxWidth = trackRef.current.children[0].offsetWidth;
      const newIndex = Math.round(trackRef.current.scrollLeft / reviewBoxWidth);
      setCurrentIndex(newIndex);
    }
  };

  // Scroll to the next/previous review
  const scrollToNext = (direction) => {
    const newIndex =
      direction === 'right'
        ? Math.min(currentIndex + 1, reviews.length - 1)
        : Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex); // Navigate to the next or previous review
  };

  // Listen for resize to hide arrows on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentIndex(0); // Reset to the first review on mobile
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // TODO: Fix flickering of nav dots and arrows when moving between 2 reviews

  return (
    <div className="review-carousel">
      {/* Left Arrow */}
      <button
        className="nav-arrow left-arrow"
        onClick={() => scrollToNext('left')}
        disabled={currentIndex === 0}
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>

      {/* Review Track */}
      <div className="review-track-wrapper">
        <div 
          className="review-track"
          onScroll={handleScroll} // Update dots on manual scroll
          ref={trackRef}
        >
          {reviews.map((review, index) => (
            <div className="review-box" key={index}>
              <blockquote>
                <p>{review.text}</p>
                <footer>— {review.author}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="nav-arrow right-arrow"
        onClick={() => scrollToNext('right')}
        disabled={currentIndex === reviews.length - 1}
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>

      {/* Navigation Dots */}
      <div className="review-dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => scrollToIndex(index)} // Scroll when dot is clicked
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
