import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    let liListNotLoggedIn = ["Home", "Register", "About us"]
    // let liListLoggedIn=["Home", "Register", "About us"]
    let logoStyle={       
    }
    

  return (
<nav className="navbar navbar-expand-lg " style={{backgroundColor:"rgb(167 177 184 / 45%)", top:"2rem"}}>

  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={logoStyle}>Trippify</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* {liListNotLoggedIn.map((element)=>{
                return  <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{element}</a>
              </li>
            })} */}
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li><li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Trippify</Link>
              </li>

      </ul>

      <form className="d-flex" role="search">
        <Link className="btn btn-success" to="/login" style={{width:"6rem", position:"relative", right:"2rem"}}>Login</Link>
      </form>
    </div> 
  </div>
</nav>  )
}

export default Navbar