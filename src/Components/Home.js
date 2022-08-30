import React from "react";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";
function Home() {
  return (
    <div className="Home">
      <div className="title">
        <Link style={{color: 'white'  }} to="/Register">Axele Plan</Link></div>
      <div className="link-title">
        PROFILE
        <nav>
          <ul>
            <li>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/Profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
      <div className="link-title"> LOAD BOARD
        <nav>
          <ul>
            <li>
              <Link style={{ textDecoration: 'none', color: 'white'  }} to="/FindLoad">Find-Load</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
      <div className="link-title"> MY DRIVERS
        <nav>
          <ul>
            <li>
              <Link style={{ textDecoration: 'none', color: 'white'  }} to="/Add_driver">Add driver</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'white'  }} to="/Drivers">Drivers</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
      <div className="link-title"> MY TRACTORS
        <nav>
          <ul>
            <li>
              <Link style={{ textDecoration: 'none', color: 'white'  }} to="/Add_Tractor">Add Tractor</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'white'  }} to="/Tractors">Tractors</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
      <div className="link-title"> MY TRAILERS
        <nav>
          <ul>
            <li>
              <Link style={{ textDecoration: 'none', color: 'white'  }} to="/Add_Trailer">Add Trailer</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'white'  }} to="/Trailers">Trailers</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
      <div className="link-title"> MY ADDRESS
        <nav>
          <ul>
            <li>
              <Link style={{ textDecoration: 'none', color: 'white'  }} to="/Add_Address">Add Address</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'white'  }} className="link" to="/List">List</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
