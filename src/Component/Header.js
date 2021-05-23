import React from 'react'
//import Link from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from "../Images/pic1.png";
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={Logo} className="Logo" alt={Logo}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        <Link class="nav-link active" aria-current="page" to="/Breeds">Breeds</Link>
        
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header
