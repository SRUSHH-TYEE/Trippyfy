const express = require('express');
const router = express.Router();
const Requesteduser = require('../models/requesteduser');

//router.get('/', (req,res)=>{
    
    //res.json(obj)
//})
// GET all requested users
router.get('/', async (req, res) => {
    try {
      const requestedUsers = await requestedUsers.find();
      res.json(requestedUsers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // GET a single requested user by ID
  router.get('/:id', Requesteduser, (req, res) => {
    res.json(res.requestedUser);
  });
  
  // CREATE a requested user
  router.post('/', async (req, res) => {
    const requestedUser = new requestedUser({
      id_proof: req.body.id_proof,
      username: req.body.username,
      organization: req.body.organization,
    });
    try {
      const newRequestedUser = await requestedUser.save();
      res.status(201).json(newRequestedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // UPDATE a requested user by ID
  router.patch('/:id', Requesteduser, async (req, res) => {
    if (req.body.id_proof != null) {
      res.requestedUser.id_proof = req.body.id_proof;
    }
    if (req.body.username != null) {
      res.requestedUser.username = req.body.username;
    }
    if (req.body.organization != null) {
      res.requestedUser.organization = req.body.organization;
    }
    try {
      const updatedRequestedUser = await res.requestedUser.save();
      res.json(updatedRequestedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE a requested user by ID
  router.delete('/:id', Requesteduser, async (req, res) => {
    try {
      await res.requestedUser.remove();
      res.json({ message: 'Requested user deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  // Middleware function to get a requested user by ID
async function getRequestedUser(req, res, next) {
    let requestedUser;
    try {
      requestedUser = await RequestedUser.findById(req.params.id);
      if (requestedUser == null) {
        return res.status(404).json({ message: 'Cannot find requested user' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.requestedUser = requestedUser;
    next();
  }
  
module.exports=router