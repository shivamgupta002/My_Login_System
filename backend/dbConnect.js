const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/pr-1")
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log("Connection Error due to :"+e);
  });