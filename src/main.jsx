import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";
import "core-js";
import "regenerator-runtime/runtime";

function Main() {
  useEffect(() => {
    const loader = document.getElementById("loading-screen");

    // Check if the app is being loaded for the first time
    if (!localStorage.getItem("firstLoad")) {
      // Show loader for the first time only
      localStorage.setItem("firstLoad", "true");

      // Wait until the page has finished loading
      window.addEventListener("load", () => {
        if (loader) {
          loader.style.display = "none"; // Hide the loader once the app is ready
        }
      });
    } else {
      // If it's not the first load, hide the loader immediately
      if (loader) {
        loader.style.display = "none";
      }
    }

    // Clean up event listener
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);

  return <App />;
}

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
