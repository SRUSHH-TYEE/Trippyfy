import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  
  const navigate = useNavigate();
  let location=useLocation();

  // Logout handler
  const logoutHandler=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    // navigate('/')
  }

  return (
    <>
        <Link className="navbar-brand d-inline-block" to="/" >
         
          {/* Trippify Logo */}
          {/* <h3 style={{ marginBottom: "0rem", zIndex: "7" }}> */}
            <img src={process.env.PUBLIC_URL + "logo_no_bg.svg"} alt='Trippify' style={{ width: "68%", height: "9rem",marginLeft:"1rem",zIndex:"15" }} />
          {/* </h3> */}
        </Link>
    <nav className="navbar navbar-expand-lg d-inline-block" style={{ backgroundColor: "#2a314d", top: "0rem", width:"78%",marginBottom:"2rem" }}>

      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/" style={{color:`${location.pathname==='/homelin'? 'Gray':'white'}`}} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about" style={{color:"white"}} >AboutUs</Link>
            </li><li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/contact" style={{color:"white"}}>Contact</Link>
            </li>

            </ul>
            

          {/* 01ff2c */}
          {/* 2a314d */}

          <form className="d-flex" role="search">

            {/* For adding location */}
            <Link to='/addLoc' className="btn mx-2" style={{ width: "11rem", position: "relative", right: "2rem",backgroundColor:"#01ff2c",color:"#2a314d"  }} >Add Location</Link>
            
            {/* For Logout */}
            <button className="btn" style={{ width: "6rem", position: "relative", right: "2rem",backgroundColor:"#01ff2c",color:"#2a314d" }} onClick={logoutHandler}>Logout</button>
          </form>
        </div>
      </div>
    </nav>
    </>)
}

export default Navbar