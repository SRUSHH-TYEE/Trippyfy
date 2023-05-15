import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function Navbar() {

  let location=useLocation();
  
  return (
    <>
        <Link className="navbar-brand d-inline-block" to="/">
         
          {/* Trippify Logo */}
          {/* <h3 style={{ marginBottom: "0rem", zIndex: "7" }}> */}
            <img src={process.env.PUBLIC_URL + "logo_no_bg.svg"} alt='Trippify' style={{ width: "68%", height: "9rem" }} />
          {/* </h3> */}
        </Link>
    <nav className="navbar navbar-expand-lg d-inline-block" style={{ backgroundColor: "rgb(167 177 184 / 45%)", top: "0rem", width:"78%",marginBottom:"2rem" }}>

      <div className="container-fluid">
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
              <Link className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
            </li><li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/about">AboutUs</Link>
            </li><li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/contact">Contact</Link>
            </li>

            {/* !!!!!!!!!!!!!!CURRRENTLY SET TO LOGGEDIN HOME PAGE FOR TESTING PURPOSE */}
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/request">Trippify</Link>
            </li>

          </ul>

          <form className="d-flex" role="search">
            <Link className="btn btn-success mx-2" to="/login" style={{ width: "6rem", position: "relative", right: "2rem" }}>Login</Link>
            <Link className="btn btn-success mx-2" to="/admin" style={{ width: "6rem", position: "relative", right: "2rem" }}>Admin</Link>
          </form>
        </div>
      </div>
    </nav>
    </>)
}

export default Navbar