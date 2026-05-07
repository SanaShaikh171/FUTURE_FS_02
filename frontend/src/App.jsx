import "./App.css";

import { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard";

import Login from "./components/Login";

function App() {

  const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "dark"
);
useEffect(() => {

  document.body.className = theme;

  localStorage.setItem("theme", theme);

}, [theme]);

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
       <Dashboard
  theme={theme}
  setTheme={setTheme}
   />
      ) : (
        <Login onLogin={handleLogin} />
      )}

    </div>
  );
}

export default App;