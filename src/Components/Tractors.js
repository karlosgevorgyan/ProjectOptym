import React, { useState } from "react";
import Home from "./Home";
import axios from "axios";

function Tractors() {
  const [data, setData] = useState([]);
  async function AllTractors() {
    await axios
      .get(
        "http://10.20.8.158:5002/api/v2/tractors/all/tractors?organizationId"
      )
      .then((res) => setData(res.data.tractors))
      .catch((er) => console.log(er));
  }
  let datas = data.map(({ name, vin, make, model }, id) => {
    return (
      <ul key={id}>
        <li>Tractor name: {name}</li>
        <li>Vin: {vin}</li>
        <li>Make: {make}</li>
        <li>Model: {model}</li>
      </ul>
    );
  });
  console.log(data);
  AllTractors();
  return (
    <div className="driver-page">
      <Home />
      <div className="driver">
        <div className="driver-title">
          <label>Tractors</label>
          <button className="btn btn-primary">
            We lost all our backend developers, but you are lucky , we saved
            your drivers in the frontend
          </button>
        </div>

        <div className="dirver-info">
          <div className="group">
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="group">
            <div className="form-group mt-3">
              <label>Vin</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Vin"
              />
            </div>
          </div>
          <div className="group">
            <div className="form-group mt-3">
              <label>Year</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Year"
              />
            </div>
          </div>
          <div className="group">
            <div className="form-group mt-3">
              <label>Model</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Model"
              />
            </div>
          </div>
          <div className="group">
            <div className="form-group mt-3">
              <label>Status</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Status"
              />
            </div>
          </div>

          <div className="group">
            <div className="form-group mt-4">
              <label>Edit</label>
            </div>
          </div>
        </div>
        <div className="Info">{datas}</div>
      </div>
    </div>
  );
}

export default Tractors;
