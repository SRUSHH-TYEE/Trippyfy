import React from 'react'

function Navbar() {
    let liListNotLoggedIn = ["Home", "Register", "About us"]
    // let liListLoggedIn=["Home", "Register", "About us"]
    let logoStyle={       
    }
    

  return (
<nav className="navbar navbar-expand-lg " style={{backgroundColor:"rgb(167 177 184 / 45%)", top:"2rem"}}>

  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={logoStyle}>Trippify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {liListNotLoggedIn.map((element)=>{
                return  <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{element}</a>
              </li>
            })}
      </ul>

      <form className="d-flex" role="search">
        <button className="btn btn-success " style={{width:"6rem", position:"relative", right:"2rem"}}>Login</button>
      </form>
    </div> 
  </div>
</nav>  )
}

export default Navbar