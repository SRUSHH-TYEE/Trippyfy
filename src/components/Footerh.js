import React,{useState} from 'react'

function Footerh() {
    let footerStyle = {
        width: "100%"
    }
    
    
    // Footer writing logic
    let slide1="Benefits of using shared transportation include reducing oil consumption (even current sharing transit usage saves billions of gallons a year), reducing traffic congestion, and decreasing environmental footprint.";
    let slide2="Burning fossil fuels like gasoline and diesel releases harmful greenhouse gases into the atmosphere. The buildup of these greenhouse gases is causing the Earth’s atmosphere to warm, resulting in changes to the climate we are already starting to see today.";
    let slide3="Traffic congestion is one of pressing problem in ahmedabad, especially during peak hours. By sharing rides with colleagues, we can play our role in reducing traffic and subsequently preventing waste of precious time and money.";
    const [slidetxt, setslidetxt] = useState(slide1)
    setInterval(()=>{
        if(slidetxt===slide1){setslidetxt(slide2)};
        if(slidetxt===slide2){setslidetxt(slide3)};
        if(slidetxt===slide3){setslidetxt(slide1)};
    },5000)


    return (
        <div style={footerStyle}>

            <h4 className="d-block text-center" style={{ color: "#2a314d", fontSize: "2.5rem", fontWeight: "bold", fontFamily: 'Dancing Script',marginTop:"2rem" }}>Happy sharing made climate friendly <span style={{ fontSize: "3rem" }}>🌍🌱</span></h4>
            <h2 className="pb-2 text-center" style={{ color: "#2a314d" }}>Do your bit in climate control</h2>
            <div className="container py-5 my-2 d-flex justify-content-center flex-md-row flex-sm-column" id="custom-cards">
                
                {/* <div className="d-flex justify-content-center flex-md-row flex-sm-column"> */}
                    <div className='col-md-3 col-sm-5 mx-3 my-2'>
                        <div className="card overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: "#66be26de" }}>
                            <div className=" my-4 mx-3" style={{ color: "#2a314d", fontSize: "16px", fontFamily: 'Tilt Neon' }}>
                                {slidetxt}
                            </div>
                        </div>
                    </div>
{/* 
                    <div className='col-md-3 col-sm-5 mx-3 my-2'>
                        <div className="card overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: "#66be26de" }}>
                            <div className="my-4 mx-3" style={{ color: "#2a314d", fontSize: "16px", fontFamily: 'Tilt Neon' }}>
                                Burning fossil fuels like gasoline and diesel releases harmful greenhouse gases into the atmosphere. The buildup of these greenhouse gases is causing the Earth’s atmosphere to warm, resulting in changes to the climate we are already starting to see today.
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-5 mx-3 my-2'>
                        <div className="card overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: "#66be26de" }}>
                            <div className="my-4 mx-3" style={{ color: "#2a314d", fontSize: "16px", fontFamily: 'Tilt Neon' }}>
                                Traffic congestion is one of pressing problem in ahmedabad, especially during peak hours. By sharing rides with colleagues, we can play our role in reducing traffic and subsequently preventing waste of precious time and money.
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}

            </div>


        </div>)
}

export default Footerh