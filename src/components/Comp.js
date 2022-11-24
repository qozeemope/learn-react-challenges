import React from "react";

export default function Comp() {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

  function addItem() {
    const newThingText = `Thing ${thingsArray.length + 1}`;
    setThingsArray((prevState) => [...prevState, newThingText]);
  }

  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div className="app">
      <button className="button" onClick={addItem}>
        Add Item
      </button>
      {thingsElements}
    </div>
  );
}
