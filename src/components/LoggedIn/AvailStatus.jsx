import React from "react";
import { useEffect,useState } from "react";

function AvailStatus() {

    const [isAvail, setIsAvail] = useState(false)
    // const {handleAvail}=useContext(GlobalContext)
    const [btnClr, setBtnClr] = useState(isAvail?"#66be26":"red")
    // Button style
    useEffect(() => {
      setBtnClr(isAvail?"#66be26":"red")
    }, [])
    const btnStyle = {
        borderRadius: "1.5rem",
        border: "0px",
        backgroundColor:btnClr,
        height: "5rem",
        width: "19rem",
        fontSize: "2rem",
        color: "#2a314d",
        fontWeight: "bold",
    };

    const handleAvail=async(availability)=>{
        console.log('availibility',availability)
        // API Call 
        try {
         const response = await fetch(`http://localhost:5000/api/availStatus`,
           {
             method: "PATCH",
             headers: {
               "Content-Type": "application/json",
               "auth-token":localStorage.getItem('token')
             },
             body: JSON.stringify({is_available:availability}),
   
           });
         const data = await response.json(); // Extract the JSON data from the response
         console.log(await data.success)
         if(await data.success==="true"){
           console.log("success")
           return true
         }
         else{
           console.log('error data',data)
           return false
         }
       } catch (error) {
         console.log(error)
       }
     }

const clickHandler=async()=>{
    let availability=await handleAvail(isAvail)

    if(availability===true){
        setIsAvail(isAvail===true?false:true)
        setBtnClr(isAvail===true?"#66be26":"red")
    }
}

  return (
    <div className="my-4">
      <div className="container d-flex justify-content-center my-3">
        <button
          className="btn  d-flex align-items-center justify-content-center"
          style={btnStyle}
          role="button"
          onClick={clickHandler}
        >
          Availability status
        </button>
      </div>
    </div>
  );
}

export default AvailStatus;
