import React from "react";
import Weather from "./Weather.js";
import "./App.css";
import bgPicture from "./Images/Background video.mp4";

export default function App() {
  return (
    <div className="main-container">
      <div className="backround">
        <video
          src={bgPicture}
          alt="Backround video"
          style={{ position: "absolute", zIndex: -1 }}
        />
        <div className="App">
          <div className="container">
            <Weather defaultCity="Abuja" />
            <footer>
              This project was coded by
              <span className="coder">
                <strong> Eliana Walters</strong> and is{" "}
                <a
                  href="https://github.com/lyanasky/weather-react"
                  className="github-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open-Sourced on GitHub
                </a>
                .
              </span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
