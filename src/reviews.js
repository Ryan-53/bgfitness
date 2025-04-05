import React, { useState, useRef, useEffect } from 'react';
import './reviews.css';

const Reviews = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

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

  // Update the index on scroll (for non-touch devices)
  const handleScroll = () => {
    // Skip handling during touch gestures
    if (isSwiping) return;
    
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

  // Touch event handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
    
    // Prevent default scroll behavior when touch starts
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    touchEndX.current = e.touches[0].clientX;
    
    // Optional: add visual feedback during swiping if desired
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsSwiping(false);
      return;
    }
    
    const diffX = touchStartX.current - touchEndX.current;
    
    // Check if the swipe was significant enough (more than 50px)
    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && currentIndex < reviews.length - 1) {
        // Swipe left -> move right
        scrollToNext('right');
      } else if (diffX < 0 && currentIndex > 0) {
        // Swipe right -> move left
        scrollToNext('left');
      } else {
        // We're at an end, snap back to current position
        scrollToIndex(currentIndex);
      }
    } else {
      // Small movement, snap back to current position
      scrollToIndex(currentIndex);
    }
    
    // Reset touch tracking
    touchStartX.current = null;
    touchEndX.current = null;
    
    // Wait for animation to complete before allowing new swipes
    setTimeout(() => {
      setIsSwiping(false);
    }, 300);
  };

  // Disable scrolling on the track element
  useEffect(() => {
    const preventScroll = (e) => {
      if (e.target === trackRef.current || trackRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };
    
    // Add event listeners for mobile devices
    document.addEventListener('touchmove', preventScroll, { passive: false });
    
    return () => {
      document.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  // Listen for resize to hide arrows on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentIndex(0); // Reset to the first review on mobile
        scrollToIndex(0);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="review-carousel">
      {/* Left Arrow */}
      <button
        className="nav-arrow left-arrow"
        onClick={() => scrollToNext('left')}
        disabled={currentIndex === 0}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      {/* Review Track */}
      <div className="review-track-wrapper">
        <div 
          className="review-track"
          ref={trackRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
        <i className="fa-solid fa-arrow-right"></i>
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