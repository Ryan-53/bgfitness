import React, { useState, useRef } from 'react';
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

  const scrollToNext = (direction) => {
    const track = trackRef.current;
    const boxWidth = track.querySelector(".review-box").offsetWidth; // Get the width of one quote
    const gap = parseFloat(getComputedStyle(track).gap) || 0; // Account for gap between boxes

    const totalScrollWidth = track.scrollWidth; // Total scrollable width
    const visibleWidth = track.offsetWidth; // Width of the carousel window
    const maxScrollLeft = totalScrollWidth - visibleWidth; // Max scroll position

    // Calculate current scroll position
    const currentScroll = track.scrollLeft;

    // Determine next scroll position
    let newScrollLeft;
    if (direction === "right") {
      newScrollLeft = Math.min(currentScroll + boxWidth + gap, maxScrollLeft);
    } else {
      newScrollLeft = Math.max(currentScroll - boxWidth - gap, 0);
    }

    // Scroll to the calculated position
    track.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="review-carousel">

      {/* Scroll left arrow */}
      <button className="nav-arrow left-arrow" onClick={() => scrollToNext("left")}>
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
      <button className="nav-arrow right-arrow" onClick={() => scrollToNext("right")}>
        &rarr;
      </button>
    </div>
  );
};

export default Reviews