import React from "react";

export default function Ternary() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  //   let answer;
  //   if (isGoingOut === true) {
  //     answer = "Yes";
  //   } else {
  //     answer = "No";
  //   }

  function handleClick() {
    setIsGoingOut((prevState) => !prevState);
  }

  return (
    <div className="ternary">
      <h1 className="going--out">Do I feel like going out tonight?</h1>
      <h3 className="yes" onClick={handleClick}>
        {isGoingOut ? "Yes" : "No"}
      </h3>
    </div>
  );
}
