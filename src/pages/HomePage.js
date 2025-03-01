import React from "react";
import { SearchBar } from "../components/Search/SearchBar";
import { SearchSuggestion } from "../components/Search/SearchSuggestion";
import { BackgroundSlideshow } from "../components/BackgroundSlider";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.searchSection}>
        <h1>Find the Best Local Businesses</h1>
        <SearchBar />
        <SearchSuggestion />
      </div>
      <BackgroundSlideshow />
    </div>
  );
}
