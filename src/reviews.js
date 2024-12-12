import React from 'react';
import './reviews.css';

const Reviews = ({ reviews }) => {
  return (
    <div className="review-carousel">
      <div className="review-track">
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
  );
};

export default Reviews