import React from 'react'

function Footerh() {
    let footerStyle = {
        position: "fixed",
        bottom: "1rem",
        width: "100%"
    }
    return (
        <div style={footerStyle}>

            <div className="container py-5" id="custom-cards">
                <h4 className=" text-center" style={{ color: "#2a314d",fontSize:"2.5rem",fontWeight:"bold",fontFamily: 'Dancing Script'}}>Happy sharing made climate friendly <span style={{fontSize:"3rem"}}>🌍🌱</span></h4>
                <h2 className="pb-2 text-center" style={{ color: "#2a314d" }}>Do your bit in climate control</h2>
                <div className="d-flex justify-content-center">


                    <div className='col-3'>
                        <div className="card overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: "#66be26de", height: "16rem", width: "18rem" }}>
                            <div className=" my-4 mx-3" style={{ color: "#2a314d", fontSize:"16px", fontFamily:'Tilt Neon' }}>
                                  Benefits of using shared transportation include reducing oil consumption (even current sharing transit usage saves billions of gallons a year), reducing traffic congestion, and decreasing environmental footprint.
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className="card overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: "#66be26de", height: "16rem", width: "18rem" }}>
                            <div className="my-4 mx-3" style={{ color: "#2a314d", fontSize:"16px", fontFamily:'Tilt Neon'}}>
                            Burning fossil fuels like gasoline and diesel releases harmful greenhouse gases into the atmosphere. The buildup of these greenhouse gases is causing the Earth’s atmosphere to warm, resulting in changes to the climate we are already starting to see today.
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className="card overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: "#66be26de", height: "16rem", width: "18rem" }}>
                            <div className="my-4 mx-3" style={{ color: "#2a314d" , fontSize:"16px", fontFamily:'Tilt Neon'}}>
                                Traffic congestion is one of pressing problem in ahmedabad, especially during peak hours. By sharing rides with colleagues, we can play our role in reducing traffic and subsequently preventing waste of precious time and money.
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>)
}

export default Footerh