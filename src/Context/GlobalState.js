import { useState } from "react";
import GlobalContext from "./GlobalContex";
import axios from "axios";

const GlobalProvider = ({ children, showAlert }) => {

    const [lat, setLat] = useState('ini');
    const [lon, setLon] = useState('ini');
    const [error, setError] = useState('');
    const API_KEY = process.env.REACT_APP_API_KEY;


    // FUNCTION 1: For getting lattitude and longitude from address
    const coordinatesFromAddress = async (address) => {
        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${API_KEY}`);
            if(!response.data.status===200){
                showAlert('error','Something went wrong')
            }
            if (response.data.results.length > 0) {
              setError('');
              console.log('response',response)
              console.log('data', response.data.results[0].geometry)

              let lattitude=await response.data.results[0].geometry.lat
              let longitude=await response.data.results[0].geometry.lng
              console.log('lat cont',lattitude)
              console.log('lon conte',longitude)
              let ans={
                'lat':lattitude,
                'lon':longitude
              }

              return ans;

            } else {
              setError('No results found.');
              showAlert('error','No result found')
              console.log(error)
            }
          } catch (error) {
            console.log(error);
            setError('Error occurred during geocoding.');
          }
        };
      

    // FUNCTION 2: For getting address from lattitude and longitude. It takes lat and log and returns address.
    const addressFromCoordinates = async(lat,lon) => {
        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}`);
            if (response.data.results.length > 0) {
                setError('');
                let address=await response.data.results[0].formatted
                console.log(address)
            
              return address;
            } else {
              setError('No results found.');
            }
          } catch (error) {
            console.log(error);
            setError('Error occurred during reverse geocoding.');
          }
    }

    // FUNCTION 3: For getting current location: Function will set lat and lon as current one
    const getCurrentLocation=async()=>{
        console.log("called")
        const showPosition = (position) => {
            setLat(position.coords.latitude);
            console.log(position.coords.latitude)
            setLon(position.coords.longitude);
          };
          const getGeoLocation = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            }
          };
          getGeoLocation();
          console.log(lat)
    }

    return (
        <GlobalContext.Provider value={{ showAlert, getCurrentLocation, addressFromCoordinates, coordinatesFromAddress,lat,setLat,lon,setLon }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;