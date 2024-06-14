import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddBus = () => {
    
        
    const [data, setData] = useState(
        {
            "busname":"",
            "busno":"",
            "route":"",
            "drivername":""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://13.202.134.208:8080/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") 
                    {
                    alert("Added Bus Successfully")
                    }
                else {
                    alert("Error occured while adding bus")
                }
            }

        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Bus Name</label>
                            <input type="text" className="form-control" name='busname' value={data.busname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Bus Number</label>
                        <input type="text" className="form-control" name='busno' value={data.busno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Route</label>
                        <input type="text" className="form-control" name='route' value={data.route} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Driver Name</label>
                        <input type="text" className="form-control" name='drivername' value={data.drivername} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue} >Add Bus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBus