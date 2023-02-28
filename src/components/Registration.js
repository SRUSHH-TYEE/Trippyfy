import React from 'react'

function Registration() {
const style ={
    marginTop:"5rem",
    marginBottom:"6rem"
}
    return (
        
        <div className="container" style={style}>
           
            <div className="row ">
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                    <div className=" text-center ">
                <h3 style={{marginBottom:"3rem", zIndex:"7"}}>Trippify Registration</h3>
            </div>
            
                        <div className="card-body bg-light">
                            
                            <div className="container">
                                <form id="contact-form">
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_name">Firstname *</label>
                                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_lastname">Lastname *</label>
                                                    <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="username">Username *</label>
                                                    <input id="form_username" type="text" name="username" className="form-control" placeholder="How you want to appear on Trippify*" required="required" data-error="Username is required." />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email *</label>
                                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email*" required="required" data-error="Email is required." />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="gender">Gender *</label>
                                                        <select id="form_gender" name="gender" className="form-control" required="required" data-error="Please specify your gender.">
                                                            <option value="" selected disabled>--Select Your Gender--</option>
                                                            <option >Male</option>
                                                            <option >Female</option>
                                                            <option >Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="dob">Date of Birth *</label>
                                                        <input id="form_dob" type="date" name="dob" className="form-control" required="required" data-error="Date of birth is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="contact">Contact *</label>
                                                        <input id="form_contact" type="number" name="contact" className="form-control" placeholder="Enter your contact no." required="required" data-error="Date of birth is required." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: "0.7rem" }}>Address</div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="street">Street *</label>
                                                    <input id="form_street" type="text" name="street" className="form-control" required="required" data-error="Street name is required." />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="city">City *</label>
                                                        <input id="form_city" type="text" name="city" className="form-control" required="required" data-error="City name is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="state">State *</label>
                                                        <input id="form_state" type="text" name="state" className="form-control" required="required" data-error="State name is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="pincode">Contact *</label>
                                                        <input id="form_pincode" type="number" name="pincode" className="form-control" placeholder="Enter your pincode." required="required" data-error="Pincode is required." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="organization">Organization *</label>
                                                        <input id="form_organization" type="text" name="organization" className="form-control" required="required" data-error="organization name is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="department">Department *</label>
                                                        <input id="form_department" type="text" name="department" className="form-control" required="required" data-error="Department is required." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="role">Role *</label>
                                                        <input id="form_role" type="text" name="role" className="form-control" required="required" data-error="Role is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="empid">Employee Id *</label>
                                                        <input id="form_empid" type="text" name="empid" className="form-control" required="required" data-error="Employee Id is required." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="pswd">Password *</label>
                                                    <input id="form_pswd" type="password" name="password" className="form-control" required="required" data-error="Password name is required." />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="confirm_pswd">Confirm Password *</label>
                                                    <input id="form_confrim_pswd" type="password" name="confirm_pswd" className="form-control" required="required" data-error="Confirm your password." />
                                                </div>
                                            </div>

                                            <div className="col-md-12 my-3">
                                                <input type="submit" className="btn btn-success btn-send  pt-2 btn-block " value="Register" />
                                            </div>
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

export default Registration

