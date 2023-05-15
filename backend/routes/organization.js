const express = require('express');
const router = express.Router();
const Organization=require('../models/Organization')

//router.get('/', (req,res)=>{
    
    //res.json(obj)
//})

// GET all organizations
router.get('/' ,async (req, res) => {
    try {
      const organizations = await Organization.find();
      res.json(organizations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // GET one organization by id
  router.get('/:id', getOrganization, (req, res) => {
    res.json(res.organization);
  });
  
  // CREATE an organization 
  router.post('/', async (req, res) => {
    const organization = new Organization(req.body);
  
    try {
      const newOrganization = await organization.save();
      res.status(201).json(newOrganization);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // UPDATE an organization
  router.patch('/:id', getOrganization, async (req, res) => {
    
    if (req.body.name != null) {
      res.organization.name =await req.body.name;
    }
    if (req.body.contact != null) {
      res.organization.contact =await req.body.contact;
    }
    if (req.body.email != null) {
      res.organization.email =await req.body.email;
    }
    if (req.body.address != null) {
      res.organization.address =await req.body.address;
    }
    if (req.body.city != null) {
      res.organization.city =await req.body.city;
    }
    if (req.body.state != null) {
      res.organization.state =await req.body.state;
    }
    if (req.body.zip != null) {
      res.organization.zip =await req.body.zip;
    }
    if (req.body.latitude != null) {
      res.organization.latitude =await req.body.latitude;
    }
    if (req.body.longitude != null) {
      res.organization.longitude =await req.body.longitude;
    }

  
    try {
      const updatedOrganization = await res.organization.save();
      res.json(updatedOrganization);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE an organization
  router.delete('/deleteOrg/:id', getOrganization, async (req, res) => {
    try {
      await res.organization.remove();
      res.json({ message: 'Deleted Organization' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Middleware function to get organization by id
  async function getOrganization(req, res, next) {
    let organization;
    try {
      organization = await Organization.findById(req.params.id);
      if (organization == null) {
        return res.status(404).json({ message: 'Cannot find organization' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.organization = organization;
    next();
  }
  
module.exports=router