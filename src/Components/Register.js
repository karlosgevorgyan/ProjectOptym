import React, { useState } from "react";

import axios from "axios";

function Register() {
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dot, setDot] = useState("");

  async function onSubmitHandler(event) {
    event.preventDefault();
    const response = await axios
      .put("http://10.20.8.158:5002/api/v2/accounts/register", {
        organizationName,
        email,
        password,
        name,
        dot,
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(ev) => onSubmitHandler(ev)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create Your Free Account</h3>
          <p className="forgot-password text-right mt-2">
            Alredy have an accaunt? <a href="Login">Login</a>
          </p>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              required="required"
              className="form-control mt-1"
              placeholder="Name"
              onChange={(el) => setName(el.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>OrganizationName</label>
            <input
              type="text"
              required="required"
              className="form-control mt-1"
              placeholder="Organization Name"
              onChange={(el) => setOrganizationName(el.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              required="required"
              className="form-control mt-1"
              placeholder="Email"
              onChange={(el) => setEmail(el.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              required="required"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(el) => setPassword(el.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Dot</label>
            <input
              type="dot"
              required="required"
              className="form-control mt-1"
              placeholder="Dot"
              onChange={(el) => setDot(el.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!password || !email ? true : false}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
