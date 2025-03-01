import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BusinessPage from "./pages/BusinessPage";
import ReviewPage from "./pages/ReviewPage";
import EditReviewPage from "./pages/EditReviewPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";
import ReservationsPage from "./pages/ReservationsPage";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import "bulma/css/bulma.css";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:term/:location" element={<SearchPage />} />
        <Route path="/business/:id" element={<BusinessPage />} />
        <Route path="/review/:businessID" element={<ReviewPage />} />
        <Route path="/edit-review/:reviewID" element={<EditReviewPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
