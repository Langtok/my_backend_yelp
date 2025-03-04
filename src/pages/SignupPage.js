import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import styles from "./SignupPage.module.css";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  async function handleSignup(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
          email,
          phone_number: phoneNumber,
        },
      });
      setStep(2);
      setMessage("A confirmation code has been sent to your email.");
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleConfirmSignup(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      setMessage("Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.signupPage}>
      <h2>{step === 1 ? "Sign Up" : "Confirm Signup"}</h2>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}

      {step === 1 ? (
        <form className={styles.signupForm} onSubmit={handleSignup}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
      ) : (
        <form className={styles.signupForm} onSubmit={handleConfirmSignup}>
          <label>Confirmation Code:</label>
          <input
            type="text"
            placeholder="Enter the code sent to your email"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary">Confirm</button>
        </form>
      )}
    </div>
  );
}
