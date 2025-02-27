import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Ensure correct import for React 18
import App from "./App.jsx";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Removed TypeScript syntax
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
