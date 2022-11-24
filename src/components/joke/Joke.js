import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggle() {
    setIsShown((prevShown) => !prevShown);
  }

  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}

      <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
      <hr />
    </div>
  );
}
