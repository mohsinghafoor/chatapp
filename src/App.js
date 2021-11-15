import React, { Component } from "react";
import { ChatEngine } from "react-chat-engine";
import { ChatFeed } from "./components/chatfeed/chatfeed";
import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="01140238-4e95-4493-9101-9f29097594ee"
      userName="jack"
      userSecret="123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
