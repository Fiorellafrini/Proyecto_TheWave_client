import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import styles from './StartRender.module.css';

function StarRender({ rating }) {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const emptyStars = maxRating - fullStars;
  const decimal = rating - fullStars;

  const fullStarColor = "#fdd835";
  const emptyStarColor = "#fff9";

  return (
    <div className={styles.starRender}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} style={{color: fullStarColor}} />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} style={{color: emptyStarColor}} />
      ))}
      {decimal > 0 && (
        <FaStar style={{color: `linear-gradient(to right, ${fullStarColor} ${decimal * 100}%, ${emptyStarColor} ${decimal * 100}%)`}} />
      )}
      
    </div>
  );
}
export default StarRender;