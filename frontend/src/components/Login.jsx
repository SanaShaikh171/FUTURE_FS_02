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

    <div className="login-page">

      {/* LEFT SIDE */}

      <div className="login-left">

        <h1>
          Mini CRM
        </h1>

        <p>
          Manage leads, track conversions,
          and organize client relationships
          with a modern CRM dashboard.
        </p>

        <div className="login-features">

          <div className="feature-card">
            📊 Analytics Dashboard
          </div>

          <div className="feature-card">
            👥 Lead Management
          </div>

          <div className="feature-card">
            🚀 Conversion Tracking
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <h2>
            Admin Login
          </h2>

          <p className="login-subtitle">
            Access your CRM dashboard
          </p>

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

    </div>

  );
}

export default Login;