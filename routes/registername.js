const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// router for register
router.post("/name/register", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  
  try {
    User.findOne({ name: name }).then((user_data) => {
      if (user_data != null) {
        res.status(400).json({ msg: "Name already exists", success: false });
        return;
      } else {
        bcryptjs.hash(password, 10, (e, hashed_pw) => {
          const data = new User({
            name: name,
            password: hashed_pw,
          });

          data.save().then((data) => {
            res.json({
              msg: "User registered successfully",
              success: true,
              data,
            });
          });
        });
      }
    });
  } catch (e) {
    res.status(500).json({ msg: e, success: false });
  }
});

module.exports = router;
