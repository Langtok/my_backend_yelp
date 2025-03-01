import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styles from "./Rating.module.css";

export function ItemRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={styles.rating}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className={styles.star} />
      ))}
      {hasHalfStar && <FaStarHalfAlt className={styles.star} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} className={styles.star} />
      ))}
    </div>
  );
}
