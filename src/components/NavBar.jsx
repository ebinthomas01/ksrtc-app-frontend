import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav id="mainNav" class="navbar navbar-expand-lg ">
    <div class="container-fluid">
    <a class="navbar-brand" href="#"> KSRTC </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="" href="/Addbus">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ViewAll">View All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Log Out </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/ksrtcofficial/?utm_medium=copy_link"> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' height="20px" /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar