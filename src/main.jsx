import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import "core-js";
import "regenerator-runtime/runtime";
import { Toaster } from "react-hot-toast";

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </HelmetProvider>
  </React.StrictMode>
);
