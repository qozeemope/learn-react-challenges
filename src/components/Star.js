import React from "react";
import star1 from "../assets/star1.png";
import star2 from "../assets/star2.png";

export default function Star(props) {
  const starIcon = props.isFilled === true ? star2 : star1;

  return (
    <div>
      <img src={starIcon} alt="" width="30px" onClick={props.handleClick} />
    </div>
  );
}
