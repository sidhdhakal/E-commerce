const express = require("express");
const router = express.Router();
const User = require("../models/usermodal");
const Profile = require("../models/profilemodal");
const domain = "http://localhost:3000/";
const uploadServices = require("../services/uploadsServices");




// router for product addition
router.post("/profile/add",
  uploadServices.profileImage.single("profileImage"),
  async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;
      if (!file || file.length === 0) {
        res.status(400).json({ msg: "Please upload image", success: false });
        return;
              
          } else  {
            const image = domain + "public/profiles/" + file.filename;
            const profile = await Profile.create({
              name: data.name,
              address: data.address,
              age: data.age,
              education : data.education,
              profileImage : image
            });
            res
              .status(201)
              .json({ msg: "Profile added successfully", success: true, profile });
          }
        }
          
         catch (e) {
      res.status(500).json({ msg: e, success: false });
    }
  }
);

module.exports = router;