import React from "react";
import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContex";
import { useEffect, useState } from "react";

const EditOrg = () => {
  const { selOrgEdit, getOrgById, updateOrg } = useContext(GlobalContext);
  console.log("selOrgEdit", selOrgEdit);

  const lableStyle = {
    fontSize: "1.2rem",
    marginBottom: "0.4rem",
    marginTop: "0.8rem",
  };

  const ipStyle = {
    backgroundColor: "#f0f0f05c",
  };

  const [orgDetails, setOrgDetails] = useState({
    name: "",
    contact: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    address: "",
    lat: "",
    lon: "",
  });

  const [oldOrg, setoldOrg] = useState({})

  const onChange = (e) => {
    setOrgDetails({ ...orgDetails, [e.target.name]: e.target.value });
  };

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("hy")

    // Comparision between old and new object
    Object.keys(oldOrg).forEach((element)=>{
      // console.log('old',oldOrg[element])
      // console.log('new',editedOrg[element])
        if(oldOrg[element]===orgDetails[element]){
          delete orgDetails[element]
        }
    })

    // To avoid issues we are skipping latitude and longitude for now
    delete orgDetails['lat']
    delete orgDetails['lon']

    console.log(orgDetails)

    // API Call
    updateOrg(orgDetails)

    
    
  }

  useEffect(() => {
    async function fetchData() {
      // fetching details of current organization
      let org = await getOrgById(selOrgEdit);
      console.log(org)
      setOrgDetails({
        name: org.name,
        contact: org.contact,
        email: org.email,
        city: org.city,
        state: org.state,
        zip: org.zip,
        address: org.address,
        lat:'',
        lon:''
      });
      console.log(orgDetails);
      setoldOrg(org)
    }
    selOrgEdit && fetchData()
  }, [selOrgEdit]);

  return (
    <div>
      <div>
        <div className="container">
          <form action="" onSubmit={submitHandler}>
            {/* INPUT 1: For Name */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name" style={lableStyle}>
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={onChange}
                  value={orgDetails.name}
                  placeholder="Enter name of the organization*"
                  required="required"
                  data-error="Organization name is required."
                  style={ipStyle}
                />
              </div>
            </div>

            {/* INPUT 2: For email */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email" style={lableStyle}>
                  Email *
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  className="form-control"
                  onChange={onChange}
                  value={orgDetails.email}
                  placeholder="Enter email of the organization*"
                  required="required"
                  data-error="Organization email is required."
                  style={ipStyle}
                />
              </div>
            </div>

            {/* INPUT 3: For Contact */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="contact" style={lableStyle}>
                  Contact *
                </label>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  className="form-control"
                  onChange={onChange}
                  value={orgDetails.contact}
                  placeholder="Enter contact number of the organization*"
                  required="required"
                  data-error="Organization contact is required."
                  style={ipStyle}
                />
              </div>
            </div>

            {/* INPUT 4: For Address */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="address" style={lableStyle}>
                  Address *
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  className="form-control"
                  onChange={onChange}
                  value={orgDetails.address}
                  placeholder="Enter address of the organization*"
                  required="required"
                  data-error="Organization address is required."
                  style={ipStyle}
                />
              </div>
            </div>

            {/* INPUT 5: For City */}
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="city" style={lableStyle}>
                    City *
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    className="form-control"
                    onChange={onChange}
                    value={orgDetails.city}
                    placeholder="Enter city of the organization*"
                    required="required"
                    data-error="Organization city is required."
                    style={ipStyle}
                  />
                </div>
              </div>

              {/* INPUT 6: For State */}
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="state" style={lableStyle}>
                    State *
                  </label>
                  <input
                    id="state"
                    type="text"
                    name="state"
                    className="form-control"
                    onChange={onChange}
                    value={orgDetails.state}
                    placeholder="Enter state of the organization*"
                    required="required"
                    data-error="Organization state is required."
                    style={ipStyle}
                  />
                </div>
              </div>

              {/* INPUT 7: For Zip */}
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="zip" style={lableStyle}>
                    Zip *
                  </label>
                  <input
                    id="zip"
                    type="text"
                    name="zip"
                    className="form-control"
                    onChange={onChange}
                    value={orgDetails.zip}
                    placeholder="Enter zipcode of the organization*"
                    required="required"
                    data-error="Organization zip is required."
                    style={ipStyle}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <input
                type="submit"
                className="btn btn-send  pt-2 btn-block "
                value="Edit Organization"
                style={{
                  width: "100%",
                  // backgroundColor: "#2a314d",
                  backgroundColor: "#f9a825",
                  color: "black",
                  fontSize: "1.2rem",
                  fontFamily: "Tilt Neon",
                  marginTop: "1rem",
                  border: "2px solid #2a314d",
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditOrg;
