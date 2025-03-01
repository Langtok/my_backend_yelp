import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports"; // Ensure this file exists with Amplify configuration
import "./styles/global.css";

Amplify.configure({ ...awsExports });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
