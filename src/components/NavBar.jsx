import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav id="mainNav" class="navbar navbar-expand-lg ">
    <div class="container-fluid">
    <Link class="navbar-brand" to="#"> KSRTC </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="" to="/Addbus">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">Search</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ViewAll">View All</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Log Out </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="https://www.instagram.com/ksrtcofficial/?utm_medium=copy_link"> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' height="20px" /></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar