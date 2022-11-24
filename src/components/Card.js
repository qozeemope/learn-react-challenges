import React from "react";

import user from "../assets/user.jpg";
import Star from "./Star";

export default function Card() {
  const [contact, setContact] = React.useState({
    firstName: "Qozeem",
    lastName: "Salami",
    phone: "+234 (80) 66499-634",
    email: "qozeemhotguy@hotmail.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <div className="card">
      <div className="card--images">
        <img src={user} alt="" width="200px" className="user-div" />
        <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
      </div>

      <h1 className="name">
        {contact.firstName} {contact.lastName}
      </h1>
      <p className="phone">{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  );
}
