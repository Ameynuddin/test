const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Define your user model

// Create a new user
router.post('/register', async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
