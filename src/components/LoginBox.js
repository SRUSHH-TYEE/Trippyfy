import React from 'react'

function LoginBox() {
    const style = {
        marginTop: "11rem",
        marginBottom: "6rem"
    }
    return (
        <div>
            <div className="container" style={style}>

                <div className="row ">
                    <div className="col-lg-5 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className=" text-center ">
                                <h3 style={{ marginBottom: "2rem", zIndex: "7" }}>Login</h3>
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
                                        <div className='my-3 text-end '>
                                        <a href="/" >Forgot Password</a>
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

export default LoginBox
