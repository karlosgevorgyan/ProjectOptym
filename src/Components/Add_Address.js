import React,{useState} from 'react'
import './AddDriver.css'
import Home from './Home'
import axios from 'axios'
function Add_Address() {
  const [city, setCity] = useState("");
  const [state, setState]= useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  async function CreateAddress(){
    await axios.post("http://10.20.8.158:5002/api/v2/addresses/create",{
      city,
      state,
      lat,
      lng
    })
    .then(res => console.log(res.data))
    .catch(er => console.log(er))
  }
  return (
    <div className="Add_driver-page">
      <Home/>
      <div className="Add_driver">
      <label>Add Address</label>
      <input placeholder='City' className="form-control mt-5"
      onChange={(el) => setCity(el.target.value)}/>
      <input placeholder='State' className="form-control mt-3"
      onChange={(el) => setState(el.target.value)}/>
      <button className="btn btn-primary mt-3"
      onClick={CreateAddress}>Create</button>
      </div>
      </div>
  )
}

export default Add_Address