import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'

const AddUser = () => {
        
    const [data, setData] = useState(
        {
            "name":"",
            "email":"",
            "phone":"",
            "gender":"",
            "password":"",
            "confirmpass":""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    
    const readValue = () => {
        if(data.password != data.confirmpass)
            {
              alert("Password does't Match Each Other")
            }
        else  
        {
        console.log(data)
        axios.post("http://13.202.134.208:8080/signup", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") 
                    {
                    alert("Successfully Registered")
                    }
                else {
                    alert("Error")
                }
            }

        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
}
  return (
    <div>
        <NavBar2/>
        <marquee width="100%" direction="left" height="100px" color="blue">
        Get 30% discounts in Scania ,Volvo Buses by booking your tickets online. Book your tickets now!!
        </marquee>
        <div className="container2">
            <div className="row">
            
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="row g-3">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="label fomr-label">Name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                  </div>
                  
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Email</label>
                  <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                  </div>

                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Phone</label>
                  <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />
                  </div>

                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Gender</label>
                    <br/>
                  <input type="radio" id="Male" value="Male" name='gender'  onChange={inputHandler} />
                    <label for="1">Male</label>
                    <input type="radio" id="Female" value="Female" name='gender'  onChange={inputHandler} />
                    <label for="2">Female</label>
                  </div>

                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Password</label>
                  <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                  </div>

                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Confirm Password</label>
                  <input type="password" className="form-control" name='confirmpass' value={data.confirmpass} onChange={inputHandler} />
                  </div>
                  
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-warning" onClick={readValue} > CREATE ACCOUNT</button>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <a href='/'> Go Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default AddUser