import "./App.css";

import { useState } from "react";

import Dashboard from "./components/Dashboard";

import Login from "./components/Login";

function App() {

  const [isLoggedIn, setIsLoggedIn] =
    useState(
      localStorage.getItem("admin") ===
        "true"
    );

  const handleLogin = (
    email,
    password
  ) => {

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "admin",
        "true"
      );

      setIsLoggedIn(true);

    } else {

      alert("Invalid Credentials");

    }

  };

  return (
    <div>

      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={handleLogin} />
      )}

    </div>
  );
}

export default App;