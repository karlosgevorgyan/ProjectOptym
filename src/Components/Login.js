import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import axios from "axios";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dot, setDot] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log("sadasdas");
    try {
      const data = await axios.post(
        "http://10.20.8.158:5002/api/v2/accounts/login",
        {
          dot,
          email,
          password,
        }
      );
      localStorage.setItem('token', data);
      if (data) {
        navigate("../Profile");
        onLoginSuccess(data.data.account)
      }
    } catch (err) {}
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Dot</label>
            <input
              value={dot}
              type="dot"
              className="form-control mt-1"
              placeholder="Dot"
              onChange={(e) => setDot(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              value={email}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              value={password}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="Email">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
