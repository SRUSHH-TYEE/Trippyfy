import React from 'react'
import { Link } from 'react-router-dom'

function AvailStatus() {

    // Button style
    const btnStyle={
        borderRadius:"1.5rem",
        border:"0px",
        backgroundColor:"#66be26",
        height:"5rem",
        width:"19rem",
        fontSize:"2rem",
        color:"#2a314d",
        fontWeight:"bold"

    }
    return (
        <div className='my-4'>
            <div className="container d-flex justify-content-center my-3">
                <button className="btn  d-flex align-items-center justify-content-center" style={btnStyle} role="button">Availability status</button>
            </div>
        </div>
    )
}

export default AvailStatus