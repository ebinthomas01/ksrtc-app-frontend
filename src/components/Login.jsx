import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar2 from './NavBar2'

const Login = () => {
    const [data, setData] = useState(
        {
            "email": "",
            "password": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/signin", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    sessionStorage.setItem("token", response.data.token)
                    sessionStorage.setItem("userid", response.data.userid)
                    navigate("/AddBus")
                }
                else {
                    alert("User not existing")
                }
            }

        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    let navigate = useNavigate()
    return (
        <div>
            <NavBar2 />
            <div className="container1-fluid">


                <div id="carouselExample" class="carousel slide " data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2023/04/zingbus.jpg" style={{ objectFit: 'cover' }} height="635px" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.livemint.com/img/2023/02/22/1600x900/bengaluru_1677042673712_1677042680029_1677042680029.jpg" style={{ objectFit: 'cover' }} height="635px" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFaSoxyfHqz0XS52HwbCR_FwcjiwVbyaFwDAgPs31X7tIvYYn1TVQcDvVw-H2gWLH_RA1_f__4SNfxMJy7mCJG39FuKCr1mfhlWozoI4wahsw2aektNWP5UrWDzsPvsivFVv7Lxa5_QCc/s1600/20191208_213407.jpg" style={{ objectFit: 'cover' }} height="635px" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIXVTnwDgecPzUlvwtWTW0aEUyNpcyNzCTW2kEd37AmIrn6FndIldPjiXP5o-_h5Q4OHd4KSvWBIS57x2AK4zC4sIURiWmvv5erUmgDUKgf9bjWnWoJwyOAd80vaiB-SeFFmDlCLP6D0FoCascLt0zy3eyj9cU9DpjvmTToLz6na_G4ObZ5nw4HXZN/s3075/1694096329999.jpg" style={{ objectFit: 'cover' }} height="635px" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container3 col-12 col-sm-3 col-md-3 col-xl-3 col-xxl-3  ">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 ">
                            <label htmlFor="" className="label form-label">Enter Email Id</label>
                            <input type="text" className="form-control" placeholder='email-id' name='email' value={data.email} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="label form-label">Enter Password</label>
                            <input type="password" className="form-control" placeholder='password' name='password' value={data.password} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>Login</button>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <a href='/AddUser' > <button className="btn btn-primary">Sign Up</button> </a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" height="350" class="card-img-top" alt="..." />
                                        <h5 class="card-title">Mukesh Kumar</h5>
                                        <p class="card-text">A great Kerala Government Bus Booking App, for those in Kerala and those in other states
                                            close to Kerala, who can easily book bus tickets and parcels online.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" height="350" class="card-img-top" alt="..." />
                                        <h5 class="card-title">Shaji Thekkekarar</h5>
                                        <p class="card-text">I Liked: Punctuality, Staff behavior, Cleanliness, Seat comfort, Nice experience with
                                            KSRTC Buses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" height="350" class="card-img-top" alt="..." />
                                        <h5 class="card-title">Krishna Kumar</h5>
                                        <p class="card-text">KSRTC is the best transportation service in Kerala. KSRTC Provides you a safe and secure
                                            journey. It also has services outside Kerala. I LOVE MY KSRTC.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>

    )
}

export default Login