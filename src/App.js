import React from "react";
import Weather from "./App.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Abuja" />
        <footer>
          This project was coded by
          <span className="coder">
            <strong> Eliana Walters</strong> and is{" "}
            <a href="" className="github-link" target="_blank" rel="noreferrer">
              Open-Sourced on GitHub
            </a>
            .
          </span>
        </footer>
      </div>
    </div>
  );
}
