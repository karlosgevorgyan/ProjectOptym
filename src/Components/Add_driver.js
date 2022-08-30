import React,{useState} from 'react'
import './AddDriver.css'
import Home from './Home'
import axios from 'axios'
function Add_driver() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dot, setDot] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  async function CreateDrive(){
    await axios.post("http://10.20.8.158:5002/api/v2/accounts/add/driver",{
      email,
      name,
      password,
      phone,
      dot,
      organizationId
    })
    .then(res => console.log(res.data))
    .catch(er => console.log(er))
  }
  return (
    <div className="Add_driver-page">
      <Home/>
      <div className="Add_driver">
      <label>Add driver</label>
      <input placeholder='Driver Name' className="form-control mt-5"
      onChange={(el) => setName(el.target.value)}/>
      <input placeholder='E-mail' className="form-control mt-3"
      onChange={(el) => setEmail(el.target.value)}/>
      <input placeholder='Phone' className="form-control mt-3"
      onChange={(el) => setPhone(el.target.value)}/>
      <input placeholder='Password' className="form-control mt-3"
      onChange={(el) => setPassword(el.target.value)}/>
      <button className="btn btn-primary mt-3"
      onClick={CreateDrive}>Create</button>
      </div>
      </div>
  )
}

export default Add_driver