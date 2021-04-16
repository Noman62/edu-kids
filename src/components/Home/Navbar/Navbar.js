import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EduKids</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-dark mr-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark mr-5" href="#">About Us</a>
        </li> 
        <li class="nav-item" >
          <a class="nav-link text-dark mr-5" href="#">Contact</a>
        </li> 
        <li class="nav-item" >
          <a class="nav-link text-dark mr-5" href="#">Admin</a>
        </li> 
        <li class="nav-item" >
          <a class="nav-link text-dark mr-5" href="#">Login</a>
        </li>
     
      </ul>
  
    </div>
  </div>
</nav>
    );
};

export default Navbar;