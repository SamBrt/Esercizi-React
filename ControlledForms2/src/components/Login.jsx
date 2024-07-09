

import { useState } from "react";

export function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;

    setData((data) => ({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleResetForm = (event) => {
    event.preventDefault();
    setData({
      username: "",
      password: "",
      session: false,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (onLogin) {
      onLogin(data);
    }
  };

  return (
    <div>
      <form id="login-form" onSubmit={handleLogin}>
        <input
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleInputChange}
        />
        <div id="remember-div">
          <p>Remember me</p>
          <input
            id="checkbox"
            name="session"
            type="checkbox"
            checked={data.session}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleResetForm}>
          Reset
        </button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}