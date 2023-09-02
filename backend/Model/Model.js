const mongoose = require("mongoose");
const signUpSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const loginSchema = new mongoose.Schema({
  email: String,
  password: String,
});
exports.collection = mongoose.model("myUser", (loginSchema, signUpSchema));
