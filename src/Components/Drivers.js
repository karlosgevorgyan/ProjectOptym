import React,{useState} from "react";
import "./Driver.css";
import Home from "./Home";
import axios from 'axios'
function Drivers() {
const[data, setData] = useState([])
  async function AllDrivers(){
    await axios.get("http://10.20.8.158:5002/api/v2/accounts/all/drivers?organizationId")
    .then(res => setData(res.data.drivers))
    .catch(er => console.log(er))
  }
  let datas = data.map(({name, email, phone}, id) => {
    return (
      <ul key={id}>
        <li>Driver name: {name}</li>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
      </ul>
    )
  })
  AllDrivers()
  return (
    <div className="driver-page">
      <Home />
      <div className="driver">
        <div className="driver-title">
          <label>Driver</label>
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
              <label>E-mail</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="group">
            <div className="form-group mt-3">
              <label>Phonel</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Phonel"
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
          <div className="group">
            <div className="form-group mt-4">
              <label>Timeline</label>
            </div>
          </div>
        </div>
        <div className="Info">
        {datas}
        </div>
        
      </div>
    </div>
  );
}

export default Drivers;
