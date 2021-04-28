const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

//routes
const userRoutes = require("./routes/user");

//environment variable
env.config();

//Mongo db
//mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false

mongoose
  .connect("mongodb://127.0.0.1:27017/Ekomz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database Connected");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`);
});
