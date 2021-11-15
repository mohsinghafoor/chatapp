import React, { Component } from "react";
import { ChatEngine } from "react-chat-engine";
import { ChatFeed } from "./components/chatfeed/chatfeed";
import "./App.css";
import { LoginForm } from "./components/chatfeed/loginform";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      // userName="Usama"
      // userSecret="123"
      // projectID="01140238-4e95-4493-9101-9f29097594ee"
      projectID="01140238-4e95-4493-9101-9f29097594ee"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
