const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const fetchuser = require('../middleware/fetchuser');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

// const upload = multer({ dest: 'uploads/' })
dotenv.config();

// !!!IMPORTANT-- THE JWT_SECRET MUST BE ADDED TO ENVIRONMENT VARIABLE BEFORE DEPLOYING
const JWT_SECRET = "Hel!%^45&*Lopk$$";

//cloudinary Configuration 
cloudinary.config({
  cloud_name: "dew6he0de",
  api_key: "862873429783713",
  api_secret: "nAGPogN1wPDREF1tEaZPT2ZZHro"
});


// For file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage });

// ROUTE 1: Register a new user using: POST "/api/auth/register". No login required
router.post('/register', [
  body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
  body('fname').notEmpty().withMessage('First name is required'),
  body('lname').notEmpty().withMessage('Last name is required'),
  body('gender').notEmpty().withMessage('Gender is required'),
  body('birth_date').notEmpty().withMessage('Birth date is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('contact').notEmpty().withMessage('Contact number is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('organization').notEmpty().withMessage('Organization is required'),
  body('department').notEmpty().withMessage('Department is required'),
  body('role').notEmpty().withMessage('Role is required'),
  body('emp_id').notEmpty().withMessage('Employee ID is required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { username, fname, lname, gender, birth_date, email, contact, address, organization, department, role, emp_id, password, current_latitude, current_longitude, latitude, longitude } = await req.body;
    let success = false;
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] }).maxTimeMS(30000);
    if (existingUser) {
      return res.status(400).json({ success, message: 'Username or email already exists' });
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
      address,
      organization,
      department,
      role,
      emp_id,
      password: hashedPassword,
      latitude,
      longitude,
      current_latitude,
      current_longitude,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();
    success = true;
    res.json({ success: true, savedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: "false", message: 'Server error', error: err.message });
  }
});

//ROUTE 2: Login a user using: POST "/api/auth/login". login required
router.post('/login', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Check if the password is correct
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Create and sign a JSON Web Token
    const payload = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ success: true, token, user });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ROUTE 3: Get loggedin Use Details using: POST "/api/auth/getuser". login required
router.post('/getuser', fetchuser, async (req, res) => {

  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


//ROUTE 4: Reset password using: POST "/api/auth/reset-password".
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

//ROUTE 5: Handle reset password form submission using: POST "/api/auth/reset-password/:token".
router.post('/reset-password/:token', async (req, res) => {
  try {
    const { password } = req.body;
    const token = req.params.token;

    // Verify the reset password token
    const decodedToken = jwt.verify(token, JWT_SECRET);
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

//ROUTE 6: add location using: POST "/api/auth/users/:id/location'".
router.post('/:id/location', async (req, res) => {
  try {
    const { current_latitude, current_longitude } = req.body;
    const user = await User.findById(req.params.id);

    // Update the user's latitude and longitude
    user.current_latitude = current_latitude;
    user.current_longitude = currentlongitude;
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ROUTE 7: Upload Document using PATCH "/api/auth/users/:userId/id_proof"
router.patch('/upload_proof', [fetchuser, upload.single('file')], async (req, res) => {
  try {
    let userId = req.user.id;
    let file_destination = path.join(__dirname, '..', req.file.path);
    const user = await User.findById(userId).select("-password")

    const date = new Date();
const pid = date.getTime().toString();


    //uploading to cloud
    const resCloud = cloudinary.uploader.upload(file_destination, { public_id: pid})
    resCloud.then((data) => {
      console.log(data);
      console.log(data.secure_url);
    }).catch((err) => {
      console.log(err);
    });

    //getting url
    const url = cloudinary.url(pid);
    console.log(url)

    user.id_proof = url
    user.is_req = true
    const updatedUser = await user.save();
    console.log(req.file);
    console.log(updatedUser);
    res.json({
      status: 'success',
      message: 'Uploaded the file successfully: ' + req.file.originalname,
      url:url
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.toString(),
    });
  }
});

// router.patch('/upload_proof',(req,res)=>{
//   console.log(req.method)
//   console.log(":((")
//   res.json(
//     {
//       method:req.method,
//       status:"i am working fine!!!:)"
//     }
//   )
// })

module.exports = router