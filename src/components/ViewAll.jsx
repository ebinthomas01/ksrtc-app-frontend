import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changeData] =useState([])
        const fetchData=()=>{
            axios.get("http://localhost:8080/viewemp").then((response)=>{
                changeData(response.data)
            }
        ).catch().finally()
        }
        useEffect(()=>{fetchData()},[])
  return (
    
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                                    <thead>
                                        <tr>
                                       
                                        <th scope="col">BUS NUMBER</th>
                                        <th scope="col">BUS NAME</th>
                                        <th scope="col">ROUTE</th>
                                        <th scope="col">DRIVER NAME</th>
                                        
                                        </tr>
                                        </thead>
                                        <tbody>
                            {
                                data.map(
                                    
                                    (value, index) => { return   <tr>
                                                
                                                <td>{value.busno}</td>
                                                <td>{value.busname}</td>
                                                <td>{value.route}</td>
                                                <td>{value.drivername}</td>
                                                
                                                
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

export default ViewAll