import React from "react";

export default function App() {
  const [messages, setMessages] = React.useState(["a", "b"]);

  function showMessages() {
    setMessages((prevMessages) => !prevMessages);
  }

  return (
    <div>
      {messages.length === 0 && <h1>You're all caught up!</h1>}
      {messages.length > 0 && (
        <h1>
          You have {messages.length} unread{" "}
          {messages.length > 1 ? "messages" : "message"}
        </h1>
      )}
    </div>
  );
}
