import React from 'react'
import { Link } from 'react-router-dom'

function Registerbtn() {
    const btnStyle={
        position:"fixed",
        top:"27%",
        left:"41%",
        borderRadius:"1.5rem",
        border:"0px",
        backgroundColor:"#66be26de",
        height:"5rem",
        width:"19rem",
        fontSize:"2rem",
        color:"#2a314d",
        fontWeight:"bold"

    }
  return (
    <div className="container text-center">
    <Link className="btn btn-primary" style={btnStyle} to="/register" role="button">Register</Link>

    </div>
  )
}

export default Registerbtn