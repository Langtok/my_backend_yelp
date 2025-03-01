import React from "react";
import styles from "./BusinessHeader.module.css";

export function BusinessHeader({ business }) {
  return (
    <div className={styles.header}>
      <h1>{business.name}</h1>
      <p>{business.category} | ⭐ {business.rating}</p>
    </div>
  );
}
