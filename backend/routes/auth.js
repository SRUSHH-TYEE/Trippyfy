const express = require('express');
const router = express.Router();
const User = require('../models/user');
// const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET="Hel!%^45&*Lopk$$"
const nodemailer = require('nodemailer');


//router.get('/', (req,res)=>{
  
//  res.json(obj)
//})
// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, fname, lname, gender, birth_date, email, contact, street, city, state, zip, organization, department, role, emp_id, password } = req.body;
    let success=false;
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ success,message: 'Username or email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user
    const newUser = new User({
      username,
      fname,
      lname,
      gender,
      birth_date,
      email,
      contact,
      street,
      city,
      state,
      zip,
      organization,
      department,
      role,
      emp_id,
      password: hashedPassword,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();
    success=true;
    res.json({success:true,savedUser});
  } catch (err) {
    console.error(err);
    res.status(500).json({ success:success,message: 'Server error' });
  }
});

// Login a user
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Create and sign a JSON Web Token
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ success:true,token });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Reset password
router.post('/reset-password', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Create a reset password token
    const payload = {
      user: {
        id: user.id,
      },
    };
    const resetToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    // Send the reset password link to the user's email address
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: 'Reset Password Link',
      text: 'Click on this link to reset your password: ${process.env.BASE_URL}/reset-password/${resetToken}',
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ message: 'Reset password link sent to your email address' });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Handle reset password form submission
router.post('/reset-password/:token', async (req, res) => {
  try {
    const { password } = req.body;
    const token = req.params.token;

    // Verify the reset password token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.user.id);
    if (!user) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Password reset successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports=router