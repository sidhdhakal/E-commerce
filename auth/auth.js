const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");

//guard
const verifyUser = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, "techlearn");
    
    User.findOne({ _id: data._id })
      .then(function (user) {
        req.userData = user;
        next();
      })
      .catch(function (e) {
        res.status(401).json({ msg: "tokens are validated " });
      });
  } catch (e) {
    res.status(401).json({ msg: "tokens are not provided or validated " });
  }
};

module.exports= {verifyUser}


