const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

//router.get('/', (req,res)=>{
    
   // res.json(obj)
//})
// Get all trips
router.get('/', async (req, res) => {
    try {
      const trips = await Trip.find();
      res.json(trips);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Get a specific trip
  router.get('/:id', getTrip, (req, res) => {
    res.json(res.trip);
  });
  
  // Create a new trip
  router.post('/', async (req, res) => {
    const trip = new Trip({
      shared_with: req.body.shared_with,
      source_place: req.body.source_place,
      destination_place: req.body.destination_place,
      date: req.body.date
    });
  
    try {
      const newTrip = await trip.save();
      res.status(201).json(newTrip);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Update a trip
  router.patch('/:id', getTrip, async (req, res) => {
    if (req.body.shared_with != null) {
      res.trip.shared_with = req.body.shared_with;
    }
  
    if (req.body.source_place != null) {
      res.trip.source_place = req.body.source_place;
    }
  
    if (req.body.destination_place != null) {
      res.trip.destination_place = req.body.destination_place;
    }
  
    if (req.body.date != null) {
      res.trip.date = req.body.date;
    }
  
    try {
      const updatedTrip = await res.trip.save();
      res.json(updatedTrip);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete a trip
  router.delete('/:id', getTrip, async (req, res) => {
    try {
      await res.trip.remove();
      res.json({ message: 'Trip deleted successfully!' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Middleware function to get a specific trip by ID
  async function getTrip(req, res, next) {
    let trip;
    try {
      trip = await Trip.findById(req.params.id);
      if (trip == null) {
        return res.status(404).json({ message: 'Trip not found!' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.trip = trip;
    next();
  }
  
module.exports=router