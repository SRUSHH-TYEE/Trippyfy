import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import axios from 'axios';

// e031c62235254f949457110030566f8c - OPEN CAGE API KEY

const AddLocation = () => {
    const API_KEY='e031c62235254f949457110030566f8c'
  let user = JSON.parse(localStorage.getItem("userInfo"));
//   console.log(user ? user : "not loggedin");

  const [address, setAddress] = useState("");

  const [lat, setlat] = useState();
  const [lon, setlon] = useState();

  //  OPT1: Autodetecting Location:
  const showPosition = (position) => {
    setlat(position.coords.latitude);
    setlon(position.coords.longitude);
  };
  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  //  OPT2: Entering location manually 
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const changeAddressHandler=(e)=>{
    setAddress(e.target.value)
  }
  const handleGeocode = async () => {
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${API_KEY}`);
      if (response.data.results.length > 0) {
        setResults(response.data.results);
        console.log(results)
        setError('');
        console.log('response',response)
        console.log('status code', response.data.status)
        console.log('data', response.data.results[0].geometry)
        setlat(response.data.results[0].geometry.lat)
        setlon(response.data.results[0].geometry.lng)
      } else {
        setResults([]);
        setError('No results found.');
        console.log(error)
      }
    } catch (error) {
      console.log(error);
      setError('Error occurred during geocoding.');
    }
  };

  return (
    <div>
      <div style={{ margin: "23px" }}>
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="Add your address"
          onChange={changeAddressHandler}
          value={address}
        />

      </div>

      <div>

              <Button className="my-2" onClick={handleGeocode}> Search</Button>
      </div>

      <Button onClick={getGeoLocation}> Use your current location</Button>
      <div>
        <span>Lattitude:{lat}</span>
      </div>
      <div>
        <span>Longitude:{lon}</span>
      </div>
    </div>
  );
};

export default AddLocation;
