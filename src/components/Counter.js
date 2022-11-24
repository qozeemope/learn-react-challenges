import React from "react";
import Count from "./Count";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function minus() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <h3 className="add" onClick={add}>
        +
      </h3>
      <Count number={count} />
      <h3 className="minus" onClick={minus}>
        -
      </h3>
    </div>
  );
}
