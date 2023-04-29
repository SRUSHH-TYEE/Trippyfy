import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function RegisterForm() {
    const style = {
        marginTop: "5rem",
        marginBottom: "6rem",
    }

    // state for user details 
    const [udetails, setUdetails] = useState({
        username: "",
        fname: " ",
        lname: " ",
        gender: " ",
        birth_date: " ",
        email: " ",
        contact: " ",
        street: " ",
        city: " ",
        state: " ",
        zip: " ",
        organization: " ",
        department: " ",
        role: " ",
        emp_id: " ",
        password: ""
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
        console.log("call started")
        const response = await fetch(`${host}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                username: udetails.username,
                fname:udetails.fname ,
                lname: udetails.lname,
                gender: udetails.gender,
                birth_date:udetails.birth_date,
                email: udetails.email,
                contact:udetails.contact ,
                street: udetails.street,
                city: udetails.city,
                state:udetails.state ,
                zip:udetails.zip ,
                organization: udetails.organization,
                department:udetails.department ,
                role:udetails.role,
                emp_id: udetails.emp_id,
                password:udetails.password 
            }),
        });
        console.log("call ended")
        const json = await response.json()
        console.log(json);
        if (json.success) {
            //Redirect
            navigate("/login")

        }
    }

    return (
        <div className="container" style={style}>

            <div className="row">
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius: "2rem" }}>
                        <div className=" text-center ">
                            <h3 style={{ marginBottom: "3rem", zIndex: "7" }}>
                                <img src={process.env.PUBLIC_URL + "logo_no_bg.svg"} alt='Trippify' style={{ width: "68%", height: "9rem" }} />
                            </h3>
                        </div>

                        <div className="card-body bg-light">

                            <div className="container">
                                <form id="contact-form" onSubmit={submitHandler}>
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="fname">Firstname *</label>
                                                    <input id="fname" type="text" name="fname" className="form-control" onChange={onChange} value={udetails.fname} placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_lastname">Lastname *</label>
                                                    <input id="form_lastname" type="text" name="lname" className="form-control" onChange={onChange} value={udetails.lname} placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="username">Username *</label>
                                                    <input id="form_username" type="text" name="username" className="form-control" onChange={onChange} value={udetails.username} placeholder="How you want to appear on Trippify*" required="required" data-error="Username is required." />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email *</label>
                                                    <input id="form_email" type="email" name="email" className="form-control" onChange={onChange} value={udetails.email} placeholder="Please enter your email*" required="required" data-error="Email is required." />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="gender">Gender *</label>
                                                        <select id="form_gender" name="gender" className="form-control" onChange={onChange} value={udetails.gender} required="required" data-error="Please specify your gender.">
                                                            {/* <option value="" selected disabled>--Select Your Gender--</option> */}
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="dob">Date of Birth *</label>
                                                        <input id="form_dob" type="date" name="birth_date" className="form-control" onChange={onChange} value={udetails.birth_date} required="required" data-error="Date of birth is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="contact">Contact *</label>
                                                        <input id="form_contact" type="number" name="contact" className="form-control" onChange={onChange} value={udetails.contact} placeholder="Enter your contact no." required="required" data-error="Date of birth is required." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: "0.7rem" }}>Address</div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="street">Street *</label>
                                                    <input id="form_street" type="text" name="street" className="form-control" onChange={onChange} value={udetails.street} required="required" data-error="Street name is required." />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="city">City *</label>
                                                        <input id="form_city" type="text" name="city" className="form-control" onChange={onChange} value={udetails.city} required="required" data-error="City name is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="state">State *</label>
                                                        <input id="form_state" type="text" name="state" className="form-control" onChange={onChange} value={udetails.state} required="required" data-error="State name is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="pincode">Pincode *</label>
                                                        <input id="form_pincode" type="number" name="zip" className="form-control" onChange={onChange} value={udetails.zip} placeholder="Enter your pincode." required="required" data-error="Pincode is required." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="organization">Organization *</label>
                                                        <select id="form_organization" name="organization" className="form-control" onChange={onChange} value={udetails.organization} required="required" data-error="Organization name is required">
                                                            {/* <option value="" selected disabled>--Select Your organization--</option> */}
                                                            <option value="test_1">Test Org 1</option>
                                                            <option value="test_2">Test Org 2</option>
                                                            <option value="test_3">Test Org 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="department">Department *</label>
                                                        <input id="form_department" type="text" name="department" className="form-control" onChange={onChange} value={udetails.department} required="required" data-error="Department is required." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="role">Role *</label>
                                                        <input id="form_role" type="text" name="role" className="form-control" onChange={onChange} value={udetails.role} required="required" data-error="Role is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="empid">Employee Id *</label>
                                                        <input id="form_empid" type="text" name="emp_id" className="form-control" onChange={onChange} value={udetails.emp_id} required="required" data-error="Employee Id is required." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="pswd">Password *</label>
                                                    <input id="form_pswd" type="password" name="password" className="form-control" onChange={onChange} value={udetails.password} required="required" data-error="Password name is required." />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="cpswd">Confirm Password *</label>
                                                    <input id="form_confrim_pswd" type="password" name="cpswd" className="form-control"  required="required" data-error="Confirm your password." />
                                                </div>
                                            </div>

                                            <div className="col-md-12 my-3">
                                                <input type="submit" className="btn btn-send  pt-2 btn-block " value="Register" style={{ width: "100%", backgroundColor: "#2a314d", color: "white", fontSize: "1.5rem", fontFamily: 'Tilt Neon' }} />
                                            </div>

                                            {/* REDIRECT 1: to /login page in case of having account */}
                                            <p className="text-center text-muted mt-5 mb-0">Already have an account? <Link to="/login"
                                                className="fw-bold text-body"><u>Login here</u></Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm