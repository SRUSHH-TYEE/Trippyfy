import React from 'react'
import { Link } from 'react-router-dom'

function LoginBox() {
    const style = {
        marginTop: "6rem",
        marginBottom: "6rem"
    }
    return (
        <div>
            <div className="container" style={style}>

                <div className="row ">
                    <div className="col-lg-4 mx-auto" style={{width:"31rem"}}>
                        <div className="card mt-2 mx-auto p-4 bg-light" style={{borderRadius:"2rem"}}>
                            <div className=" text-center ">
                                <h3 style={{ marginBottom: "2rem", zIndex: "7" }}>
                                    <img src={process.env.PUBLIC_URL+"logo_no_bg.svg"} alt='Trippify' style={{width:"68%",height:"9rem"}}/>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="container">
                                    <form id="contact-form">
                                        <div className="col-md-12">
                                        <div className="form-group" style={{marginBottom: "1rem"}}>
                                                    <label htmlFor="email">Email *</label>
                                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="enter your email" required="required" data-error="Email is required." />
                                                </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="pswd">Password *</label>
                                                <input id="form_pswd" type="password" name="password" className="form-control" required="required" placeholder='enter your password' data-error="Password name is required." />
                                            </div>
                                        </div>
                                        <div className="col-md-12 my-4 text-center">
                                                <input type="submit" className="btn btn-send pt-2 btn-block " style={{width:"100%", backgroundColor:"#2a314d", color:"white", fontSize:"1.5rem", fontFamily:'Tilt Neon'}} value="Login" />
                                            </div>
                                        <div className='my-3 text-end '>
                                        <a href="/" >Forgot Password</a>
                                        </div>

                                        {/* REDIRECT 1: to /register page in case of not having account */}
                                        <p className="text-center text-muted mb-0">Not registered? <Link to="/register"
                                                className="fw-bold text-body"><u>Register here</u></Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default LoginBox
