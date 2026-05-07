import { useState } from "react";

function Login({ onLogin }) {

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    onLogin(email, password);

  };

  return (
    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;