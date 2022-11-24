import React from "react";
import WindowTracker from "./WindowTracker";

export default function WindowTrackerApp() {
  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="container">
      <button className="toggle-button" onClick={toggle}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}
