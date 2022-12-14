import React from "react";
import Box from "./Box";
import boxes from "./boxes";

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      // option 1

      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });

      // option 2

      // const newSquares = [];
      // for (let i = 0; i < prevSquares.length; i++) {
      //   const currentSquare = prevSquares[i];
      //   if (currentSquare.id === id) {
      //     const updatedSquare = {
      //       ...currentSquare,
      //       on: !currentSquare.on,
      //     };
      //     newSquares.push(updatedSquare);
      //   } else {
      //     newSquares.push(currentSquare);
      //   }
      // }
      // return newSquares;
    });
  }

  const squareElements = squares.map((square) => {
    return (
      <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
    );
  });

  return <main>{squareElements}</main>;
}
