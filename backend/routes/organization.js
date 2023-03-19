const express = require('express');
const router = express.Router();

//router.get('/', (req,res)=>{
    
    //res.json(obj)
//})
// GET all organizations
router.get('/', async (req, res) => {
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
    if (req.body.mainauthority != null) {
      res.organization.mainauthority = req.body.mainauthority;
    }
    if (req.body.emp_id != null) {
      res.organization.emp_id = req.body.emp_id;
    }
    if (req.body.street != null) {
      res.organization.street = req.body.street;
    }
    if (req.body.city != null) {
      res.organization.city = req.body.city;
    }
    if (req.body.state != null) {
      res.organization.state = req.body.state;
    }
    if (req.body.zip != null) {
      res.organization.zip = req.body.zip;
    }
  
    try {
      const updatedOrganization = await res.organization.save();
      res.json(updatedOrganization);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE an organization
  router.delete('/:id', getOrganization, async (req, res) => {
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