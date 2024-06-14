import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Search = () => {
    const [data, setData] = useState(
        {
          "busno":""
        }
      )
      const [result, setResult] = useState([])
      const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
      }
    
    //Search
      const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
          (response) => {
            setResult(response.data)
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        ).finally()
      }
    
      //Delete
      const deleteCourse = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8080/delete", input).then(
          (response) => {
            console.log(response.data)
            if (response.data.status == "success") {
              alert("Successfully Removed Bus")
            }
            else {
              alert("Error cause in Deletion")
            }
          }
        ).catch().finally()
      }
  return (
    <div>
        <NavBar/>
        <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="label form-label">Search Bus</label>
            <input type="text" className="input form-control" name='busno' value={data.busno} onChange={inputHandler}  placeholder='Enter Bus'/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-warning" onClick={readValue}>SEARCH</button>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>

                  <th scope="col">BUS NUMBER</th>
                  <th scope="col">BUS NAME</th>
                  <th scope="col"> ROUTE</th>
                  <th scope="col">DRIVER NAME</th>
       
                </tr>
              </thead>
              <tbody>
                {
                  result.map(

                    (value, index) => {
                      return <tr>

                        <td>{value.busno}</td>
                        <td>{value.busname}</td>
                        <td>{value.route}</td>
                        <td>{value.drivername}</td>
                        
                        <td> <button className="btn btn-danger" onClick={() => { deleteCourse(value._id) }}>DELETE</button>  </td>
                      </tr>

                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search