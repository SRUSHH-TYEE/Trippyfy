const express = require('express');
const router = express.Router();
const User = require('../models/user');
const dotenv = require('dotenv');
const fetchuser = require('../middleware/fetchuser');
dotenv.config();

// ROUTE 1:Turn on or off availability status using PATCH:api/availStatus
router.patch('/', fetchuser, async (req, res) => {
  let userId = req.user.id;
  const user = await User.findById(userId).select("-password")
  console.log(user.is_available)
  if (req.body.is_available != null) {
    user.is_available = await req.body.is_available;
  }

  try {
    const updatedUser = await user.save();
    res.json({ updatedUser, success: "true" });
  } catch (err) {
    res.status(400).json({ message: err.message, success: "false" });
  }
});

// ROUTE 2: For getting suggestions using GET:/api/availStatus/suggestions
router.get('/suggestions', fetchuser, async (req, res) => {
  let userId = req.user.id;
  const user = await User.findById(userId).select("-password")
  let userOrganization = user.organization

  try {
    //users from same organization and with availibility status on
    const users = await User.find({
      $and: [
        { organization: userOrganization},
        { is_available: true }
      ]
    })

    // const ans=users.aggregate([
    //   {
    //     $geoNear: {
    //       near: { type: "Point", coordinates: [latitude, longitude] },
    //       spherical: true,
    //       distanceField: "distance",
    //       distanceMultiplier: 0.001 // convert meters to kilometers
    //     }
    //   },
    //   {
    //     $sort: { distance: 1 } // sort by ascending distance
    //   }
    // ])

    res.json({ success: true, users });
  }
  catch(err){
    res.status(400).json({ message: err.message, success: false });
  }}
  )

module.exports = router