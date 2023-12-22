import React, { useState } from "react";
import Authenticate from "./components/authenticate";
import SignUpForm from "./components/SignUpForm";
import "./app.css";

export default function App() {
  const [token, setToken] = useState(null);

  const handleAuthenticateClick = () => {
    console.log("Authenticate button clicked");
  };

  return (
    <div>
      <SignUpForm setToken={setToken} />

      <Authenticate token={token} />

      <button onClick={handleAuthenticateClick}>Authenticate App</button>
    </div>
  );
}
