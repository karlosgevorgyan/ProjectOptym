import React, { useState } from "react";
import "./Profile.css";
import Home from "./Home";
function Profile(props) {
  // if (props.data) {
  //   console.log(props.data);
  // }
  return (
    <div className="Profile">
      <div>
        {" "}
        <Home />
      </div>
      <div className="prof-data">
        <h1>Profile</h1>
        <div className="info-1">
          <ul>
            <li>Organization:  {props.data.organizationName}</li>
            <li>Account type:  {props.data.accountType}</li>
            <li>E-mail:  {props.data.email}</li>
          </ul>
        </div>
        <div className="info-2">
        <div className="form-group mt-3">
            <label>Phone*</label>
            <input          
              type="text"
              className="form-control mt-1"
              placeholder="Phone*"
            />
          </div>
          <div className="form-group mt-3">
            <label>Zoom</label>
            <input          
              type="textb  "
              className="form-control mt-1"
              placeholder="Zoom"
            />
          </div>
          <div className="form-group mt-3">
          <button
              type="submit"
              className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
