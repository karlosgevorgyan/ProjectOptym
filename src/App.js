import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import FindLoad from "./Components/FindLoad.js";
import Add_driver from "./Components/Add_driver";
import Drivers from "./Components/Drivers";
import Add_Tractor from "./Components/Add_Tractor";
import Tractors from "./Components/Tractors";
import Add_Trailer from "./Components/Add_Trailer";
import Trailers from "./Components/Trailers";
import UpdateTractor from "./Components/UpdateTractor";
import List from "./Components/List";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Add_Address from "./Components/Add_Address";
function App() {
  const [data, setData] = useState({});
  const handleLogin = (userData) => {
    setData(userData);
  };
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="Register" element={<Register />} />
      <Route path="Login" element={<Login onLoginSuccess={handleLogin} />} />
      <Route path="Profile" element={<Profile data={data} />} />
      <Route path="FindLoad" element={<FindLoad />} />
      <Route path="Add_driver" element={<Add_driver />} />
      <Route path="Drivers" element={<Drivers />} />
      <Route path="Add_Tractor" element={<Add_Tractor />} />
      <Route path="Tractors" element={<Tractors />} />
      <Route path="Add_Trailer" element={<Add_Trailer />} />
      <Route path="Trailers" element={<Trailers />} />
      <Route path="Add_Address" element={<Add_Address />} />
      <Route path="UpdateTractor" element={<UpdateTractor />} />
      <Route path="List" element={<List />} />
    </Routes>
  );
}

export default App;
