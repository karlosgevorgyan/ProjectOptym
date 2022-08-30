import React, { useState } from "react";
import "./Driver.css";
import Home from "./Home";
import axios from "axios";
function List() {
  const [data, setData] = useState([]);
  async function AllList() {
    await axios
      .get("http://10.20.8.158:5002/api/v2/addresses/list?organizationId")
      .then((res) => setData(res.data.addressList))
      .catch((er) => console.log(er));
  }
  let datas = data.map(({ city, state }, id) => {
    return (
      <ul key={id}>
        <li>City: {city}</li>
        <li>State: {state}</li>   
      </ul>
    );
  });
  AllList();
  return (
    <div className="driver-page">
      <Home />
      <div className="driver">
        <div className="dirver-info">
          <div className="form-group mt-3">
            <label>City</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="City"
            />
          </div>
          <div className="form-group mt-3">
            <label>State</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="State"
            />
          </div>
        </div>
        <div className="Info">{datas}</div>
      </div>
    </div>
  );
}
export default List;
