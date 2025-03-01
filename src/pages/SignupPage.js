import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import styles from "./SignupPage.module.css";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  async function handleSignup(event) {
    event.preventDefault();
    try {
      await Auth.signUp({ username, password, attributes: { email } });
      setStep(2);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleConfirmSignup(event) {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(username, confirmationCode);
      alert("Signup successful! You can now login.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.signupPage}>
      <h2>{step === 1 ? "Sign Up" : "Confirm Signup"}</h2>
      {error && <p className={styles.error}>{error}</p>}

      {step === 1 ? (
        <form className={styles.signupForm} onSubmit={handleSignup}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
      ) : (
        <form className={styles.signupForm} onSubmit={handleConfirmSignup}>
          <label>Confirmation Code:</label>
          <input
            type="text"
            placeholder="Enter confirmation code"
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
