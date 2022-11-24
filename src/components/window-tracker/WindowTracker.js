import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWith] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      console.log("Setting up");
      setWindowWith(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    return function () {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
}
