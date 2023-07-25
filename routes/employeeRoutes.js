const express = require("express");
const router = express.Router();
const Employee = require("../models/employeemodel");
const domain = "http://localhost:3000/";
const uploadServices = require("../services/uploadsServices");




// router for product addition
router.post("/employee/add",
  uploadServices.employeeimage.single("image"),
  async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;
      if (!file || file.length === 0) {
        res.status(400).json({ msg: "Please upload image", success: false });
        return;
              
          } else  {
            const image = domain + "public/employee/" + file.filename;
            const employee = await Employee.create({
              name: data.name,
              address: data.address,
              age: data.age,
              email: data.email,
              image : image
            });
            res
              .status(201)
              .json({ msg: "Employee detail added successfully", success: true, employee });
          }
        }
          
         catch (e) {
      res.status(500).json({ msg: e, success: false });
    }
  }
);


// get single product using params
router.get("/getEmployee/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json({ msg: "Single product", success: true, product });
  } catch (e) {
    res.status(500).json({ msg: e, success: false });
  }
});

// update product
router.put(
  "/updateEmployee/:id",
  uploadServices.employeeimage.single("image"),
  auth.verifyUser,
  async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const file = req.file;
      if (!file || file.length === 0) {
        const product = await Product.findByIdAndUpdate(
          id,
          {
            name: data.name,
            sold: data.sold,
            price: data.price,
            quantity: data.quantity,
            category: data.category,
            description: data.description,
          },
          { new: true }
        );
        res
          .status(400)
          .json({ msg: "data updated successfully", success: true, product });
        return;
      } else {
        const image = domain + "public/productUploads/" + file.filename;
        const product = await Product.findByIdAndUpdate(
          id,
          {
            name: data.name,
            sold: data.sold,
            price: data.price,
            quantity: data.quantity,
            category: data.category,
            description: data.description,
            image: image,
          },
          { new: true }
        );
        res
          .status(201)
          .json({
            msg: "Product updated successfully",
            success: true,
            product,
          });
      }
    } catch (e) {
      res.status(500).json({ msg: e, success: false });
    }
  }
);

module.exports = router;