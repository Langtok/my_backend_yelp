import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./amplifyConfig"; // ✅ Centralized Amplify configuration
import reportWebVitals from "./reportWebVitals";
import "./styles/global.css"; // ✅ Ensure global styles are applied

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
