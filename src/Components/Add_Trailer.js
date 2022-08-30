import React,{useState} from "react";
import Home from "./Home";
import axios from 'axios'

function Add_Trailer() {
  const [name, setName] = useState("");
  const [make, setMake] = useState("");
  const [vin, setVin] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  async function CreateTrailer(){
    await axios.post("http://10.20.8.158:5002/api/v2/trailers/create",{
      id,
      vin,
      name,
      make,
      model,
      year,
      status,
      organizationId
    })
    .then(res => console.log(res.data))
    .catch(er => console.log(er))
  }
  return (
    <div className="Add_driver-page">
      <Home />
      <div className="Add_driver">
        <label>Add Trailer</label>
       
        <input placeholder="Trailer Name" className="form-control mt-5"
        onChange={el => setName(el.target.value)} />
        <input placeholder="Make" className="form-control mt-3"
        onChange={el => setMake(el.target.value)} />
        <input placeholder="Model" className="form-control mt-3" 
        onChange={el => setModel(el.target.value)}/>
        <input placeholder="Vin" className="form-control mt-3" 
        onChange={el => setVin(el.target.value)}/>
        <input placeholder="Year" className="form-control mt-3" 
        onChange={el => setYear(el.target.value)}/>
        <button className="btn btn-primary mt-3"
        onClick={CreateTrailer}>Create</button>
      </div>
    </div>
  );
}

export default Add_Trailer;
