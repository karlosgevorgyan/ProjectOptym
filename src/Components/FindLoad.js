import React, { useEffect, useState } from "react";
import Home from "./Home";
import "./FindLoad.css";
import axios from "axios";

function FindLoad() {
  const [loads, setLoads] = useState([]);
  useEffect(() => {
    axios
      .get(`http://10.20.8.158:5002/api/v2/loads/search/random`)
      .then((res) => {
        console.log(res.data)
        setLoads(res.data.loads);
      })
      .then((res) => console.log(res));
  },[]);
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="FindLoad-page">
      <Home />
      <div className="FindLoad">
        <div className="FindLoad-title">
          Find Loads
          <div className="form-group mt-5">
            <button type="submit" className="btn btn-primary"
            onClick={refreshPage}>
              Refresh
            </button>
          </div>
        </div>
        <div className="FindLoad-table">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">
                  Origin City
                  <input className="form-control mt-1"/>
                </th>
                <th scope="col">
                  Origin State
                  <input className="form-control mt-1"/>
                </th>
                <th scope="col">
                  Origin City
                  <input className="form-control mt-1"/>
                </th>
                <th scope="col">
                  Destination State
                  <input className="form-control mt-1" />
                </th>
                <th scope="col">
                  EquipmentType
                  <input className="form-control mt-1"/>
                </th>
                <th scope="col">
                Company
                  <input className="form-control mt-1"/>
                </th>
                <th scope="col">
                DaysToPay
                  <input className="form-control mt-1"/>
                </th>
                <th scope="col">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {loads.map((load,i) => (
                <tr key={i}>
                   <td>{load.originCity}</td>
                  <td>{load.originState}</td>
                  <td>{load.originCity}</td>
                  <td>{load.originState}</td>
                  <td>{load.equipmentType}</td>
                  <td>{load.company}</td>
                  <td>{load.daysToPay}</td>
                  <td><a href="./UpdateTractor">View</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FindLoad;
