const express = require("express");
const app = express();
app.use(express.json());

const connectDB = require("./database/database");
const productRoutes = require("./routes/productRoute");
// const profileRoute= require("./routes/profileRoute")
const userRoutes= require('./routes/userRoutes');
// const employeeRoute = require("./routes/employeeRoutes");
const registerLogin= require('./routes/registerLoginRoute');
const registername= require('./routes/registername')
app.use("/public", express.static(__dirname + "/public/productUpload"));

connectDB();
app.use(productRoutes);
app.use(userRoutes);
app.use(registerLogin);
app.use(registername);
// app.use(profileRoute);
// app.use(employeeRoute);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});