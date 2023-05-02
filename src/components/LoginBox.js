import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../Context/GlobalContex'


function LoginBox() {

    // To show toaster  and showAlert takes two parrams: type,msg
    const {showAlert} = useContext(GlobalContext)

    const style = {
        marginTop: "6rem",
        marginBottom: "6rem"
    }

    const [udetails, setUdetails] = useState({
        username:" ",
        password:""
    })

    // FUNC1: Onchange Function
    const onChange = (e) => {
        setUdetails({ ...udetails, [e.target.name]: e.target.value })
    }

     // FUNC2: API call for submitting the details
     const navigate = useNavigate();
     const host = 'http://localhost:5000'
     const submitHandler = async (e) => {
         e.preventDefault();
         console.log(udetails)
         // API call
         const response = await fetch(`${host}/api/auth/login`, {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({ 
                 username: udetails.username,
                 password:udetails.password 
             }),
         }); 

         
         const json = await response.json()
         console.log('json',json);
         if(response.status===400){
            console.log(json.message)
            showAlert('error',json.message)
         }
         if (json.success) {
            localStorage.setItem("token",json.token)
            localStorage.setItem("userInfo",JSON.stringify(json.user))
             //Redirect
             navigate("/homeLin")
 
         }
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
                                    <form id="contact-form" onSubmit={submitHandler}>
                                        <div className="col-md-12">
                                        <div className="form-group" style={{marginBottom: "1rem"}}>
                                                    <label htmlFor="username">Username *</label>
                                                    <input id="form_username" type="text" value={udetails.username} onChange={onChange}  name="username" className="form-control" placeholder="enter your username" required="required" data-error="Username is required." />
                                                </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="password">Password *</label>
                                                <input id="form_pswd" type="password" name="password" className="form-control" value={udetails.password} onChange={onChange} required="required" placeholder='enter your password' data-error="Password name is required." />
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
