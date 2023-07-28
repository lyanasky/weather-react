import React, { useState } from "react";

export default function WindSpeed(props) {
  const [unit, setUnit] = useState("kmh");
  function showMilesPerHour(event) {
    event.preventDefault();
    setUnit("MPH");
  }

  function showKmPerHour(event) {
    event.preventDefault();
    setUnit("kmh");
  }

  function milesPerHour() {
    return props.kmh / 1.609344;
  }

  if (unit === "kmh") {
    return (
      <div className="WindSpeed">
        <span>Wind: {Math.round(props.kmh)}</span>
        <span>
          {" "}
          Km/h |{" "}
          <a href="/" onClick={showMilesPerHour}>
            Mph
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WindSpeed">
        <span>Wind: {Math.round(milesPerHour())}</span>
        <span>
          <a href="/" onClick={showKmPerHour}>
            {" "}
            Km/h
          </a>{" "}
          | Mph
        </span>
      </div>
    );
  }
}
