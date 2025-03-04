import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BusinessPage from "./pages/BusinessPage";
import ReviewPage from "./pages/ReviewPage";
import EditReviewPage from "./pages/EditReviewPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";
import ReservationsPage from "./pages/ReservationsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ConfirmSignup from "./pages/ConfirmSignup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AddBusinessPage from "./pages/AddBusinessPage"; // ✅ Added missing route

import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import RequireAuth from "./components/auth/RequireAuth"; // Wrapper for protected routes

import "bulma/css/bulma.css";
import "./styles/global.css";

// Configure AWS Amplify
Amplify.configure(awsExports);

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:term/:location" element={<SearchPage />} />
        <Route path="/business/:id" element={<BusinessPage />} />
        <Route path="/review/:businessID" element={<ReviewPage />} />
        <Route path="/edit-review/:reviewID" element={<EditReviewPage />} />

        {/* Protected Routes */}
        <Route path="/favorites" element={<RequireAuth><FavoritesPage /></RequireAuth>} />
        <Route path="/reservations" element={<RequireAuth><ReservationsPage /></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
        <Route path="/add-business" element={<RequireAuth><AddBusinessPage /></RequireAuth>} /> 

        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/confirm-signup" element={<ConfirmSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}
