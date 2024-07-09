import React, { useRef } from 'react';

export function UncontrolledLogin({ onLogin }) {
  const formRef = useRef(null);

  const handleResetForm = (event) => {
    event.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      session: formData.get('session') === 'on',
    };
    if (onLogin) {
      onLogin(data);
    }
  };

  return (
    <div>
      <form id="login-form" ref={formRef} onSubmit={handleLogin}>
        <input
          name="username"
          placeholder="Username"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
        <div id="remember-div">
          <p>Remember me</p>
          <input
            id="checkbox"
            name="session"
            type="checkbox"
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
