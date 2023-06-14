import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import './LoginForm.css';


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <div id="login-page-wrapper">
      <div id="login-form-wrapper">
      <i class="fa-solid fa-camera"></i>
        <h1>Log in to Exposure</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <ul>
            {errors.length ? <p id="login-error-message">Invalid credentials</p> : <div id="login-error-message"></div>}
          </ul>
          <label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </label>
          <button id="login-page-login-button" type="submit">Log In</button>
        </form>
        <div id="login-form-text-wrapper">
          <p>Not an Exposure member?</p>
          <NavLink to='/signup'><p id="signup-reroute">Sign up here.</p></NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;
