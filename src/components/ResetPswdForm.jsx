import React from 'react'

function ResetPswdForm() {
    const style = {
        marginTop: "6rem",
        marginBottom: "6rem"
    }
  return (
    <div>
    <div className="container" style={style}>
        <div className="row ">
            <div className="col-lg-4 mx-auto" style={{ width: "31rem" }}>
                <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius: "2rem" }}>
                    <div className=" text-center ">
                        <h3 style={{ marginBottom: "2rem", zIndex: "7" }}>
                            <img src={process.env.PUBLIC_URL + "logo_no_bg.svg"} alt='Trippify' style={{ width: "60%", height: "9rem" }} />
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <form id="contact-form">

                                <div className="col-md-12 ">
                                    <div className="form-group">
                                        <label htmlFor="pswd">Password *</label>
                                        <input id="form_pswd" type="password" name="pswd" className="form-control" required="required" placeholder='enter new password' data-error="new password is required." />
                                    </div>
                                </div>
                                <div className="col-md-12 my-3">
                                    <div className="form-group">
                                        <label htmlFor="cpswd">Confirm password *</label>
                                        <input id="form_pswd" type="password" name="cpswd" className="form-control" required="required" placeholder='Confirm password' data-error="Password confirmation is required." />
                                    </div>
                                </div>

                                <div className="col-md-12 my-4 text-center">
                                    <input type="submit" className="btn btn-send pt-2 btn-block " style={{ width: "100%", backgroundColor: "#2a314d", color: "white", fontSize: "1.5rem", fontFamily: 'Tilt Neon' }} value="Reset Password" />
                                </div>
                             
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

export default ResetPswdForm