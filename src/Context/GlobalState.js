import { useState } from "react";
import GlobalContext from "./GlobalContex";
import axios from "axios";

const GlobalProvider = ({ children, showAlert }) => {

  const [lat, setLat] = useState('ini');
  const [lon, setLon] = useState('ini');
  const [error, setError] = useState('');
  const [organizations, setOrganizations] = useState([])
  const [selOrgEdit, setSelOrgEdit] = useState()
  const API_KEY = process.env.REACT_APP_API_KEY;


  // FUNCTION 1: For getting lattitude and longitude from address
  const coordinatesFromAddress = async (address) => {
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${API_KEY}`);
      if (!response.data.status === 200) {
        showAlert('error', 'Something went wrong')
      }
      if (response.data.results.length > 0) {
        setError('');
        console.log('response', response)
        console.log('data', response.data.results[0].geometry)

        let lattitude = await response.data.results[0].geometry.lat
        let longitude = await response.data.results[0].geometry.lng
        console.log('lat cont', lattitude)
        console.log('lon conte', longitude)
        let ans = {
          'lat': lattitude,
          'lon': longitude
        }

        return ans;

      } else {
        setError('No results found.');
        showAlert('error', 'No result found')
        console.log(error)
      }
    } catch (error) {
      console.log(error);
      setError('Error occurred during geocoding.');
    }
  };


  // FUNCTION 2: For getting address from lattitude and longitude. It takes lat and log and returns address.
  const addressFromCoordinates = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}`);
      if (response.data.results.length > 0) {
        setError('');
        let address = await response.data.results[0].formatted
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
  const getCurrentLocation = async () => {
    console.log("called")
    const showPosition = async (position) => {
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
    console.log('lat', lat, 'lon', lon)

  }


  // FUNCTION4: For getting all organizations
  const getOrg = async () => {

    // API Call 
    try {
      const response = await fetch('http://localhost:5000/api/organization',
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
      const data = await response.json(); // Extract the JSON data from the response
      setOrganizations(data);
    } catch (error) {
      console.log(error)
    }

  }

  // FUNCTION5: For getting particular organizations
  const getOrgById = async (id) => {

    // API Call 
    try {
      const response = await fetch(`http://localhost:5000/api/organization/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
      const data = await response.json(); // Extract the JSON data from the response
      return data
    } catch (error) {
      console.log(error)
    }

  }


  // FUNCTION 6: For deleting organization
  const delOrg = async (id) => {

    // API Call : For deleting organizations
    try {
      const response = await fetch(`http://localhost:5000/api/organization/deleteOrg/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
      const data = await response.json(); // Extract the JSON data from the response
      // await getOrg()
      let newOrgs = organizations.filter((org) => { return org._id !== id })
      setOrganizations(newOrgs)
      showAlert('success', "Deleted Organization Successfully!!")

      console.log(data)
    } catch (error) {
      showAlert('error', error)
      console.log(error)
    }

  }


  // FUNCTION 7: For adding organization
  const addNewOrg = async (address, city, contact, email, name, state, zip, latitude, longitude) => {

    // API Call : For adding organization
    try {
      const response = await fetch(`http://localhost:5000/api/organization`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address, city, contact, email, name, state, zip, latitude, longitude }),
        });
      const data = await response.json(); // Extract the JSON data from the response
      setOrganizations(organizations.concat(data))
      showAlert('success', "Added Organization Successfully!!")
      console.log(data)
    } catch (error) {
      console.log(error)
      showAlert('error', error)
      console.log(error.message)
    }

  }
  // FUNCTION 8: For Updating organization
  const updateOrg = async (updated) => {

    console.log('updates', updated)
    console.log('selId', selOrgEdit)

    // API Call : For updating organization
    try {
      const response = await fetch(`http://localhost:5000/api/organization/${selOrgEdit}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updated),
        });
      const data = await response.json(); // Extract the JSON data from the response

      let newOrgs = JSON.parse(JSON.stringify(organizations))
      // Logic to edit in client
      for (let index = 0; index < organizations.length; index++) {
        const element = organizations[index];
        if (element._id === selOrgEdit) {
          newOrgs[index].name = data.name;
          newOrgs[index].contact = data.contact;
          newOrgs[index].email = data.email;
          newOrgs[index].address = data.address;
          newOrgs[index].city = data.city;
          newOrgs[index].state = data.state;
          newOrgs[index].zip = data.zip;
          console.log('elemet', element)
          break;
        }
      }
      setOrganizations(newOrgs);
      showAlert('success', "Updated Organization details successfully!!")
      // setOrganizations(organizations.concat(data))
      // showAlert('success',"Added Organization Successfully!!")
      console.log(data)
    } catch (error) {
      console.log(error)
      showAlert('error', error)
      console.log(error.message)
    }

  }



  return (
    <GlobalContext.Provider value={{ updateOrg, selOrgEdit, setSelOrgEdit, getOrgById, showAlert, getCurrentLocation, addressFromCoordinates, coordinatesFromAddress, lat, setLat, lon, setLon, getOrg, organizations, setOrganizations, delOrg, addNewOrg }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;