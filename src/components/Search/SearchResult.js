import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "../Common/Rating";
import styles from "./SearchResult.module.css";

export function SearchResult({ business }) {
  return (
    <div className={styles.searchResult}>
      <h3>{business.name}</h3>
      <p>{business.address}</p>
      <Rating rating={business.rating} />
      <Link to={`/business/${business.id}`} className="btn-secondary">View Details</Link>
    </div>
  );
}
