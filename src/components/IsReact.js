import React from "react";

export default function IsReact() {
  const [isImportant, setIsImportant] = React.useState("Yes");
  function handleClick() {
    setIsImportant("No");
  }

  return (
    <div className="is-react">
      <h1 className="is--react">Is state important to know?</h1>
      <h3 className="yes" onClick={handleClick}>
        {isImportant}
      </h3>
    </div>
  );
}
