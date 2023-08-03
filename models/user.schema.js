const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: String,
  password: String,
  number: Number,
  email: String,
});

let User = mongoose.model("User", UsersSchema);
module.exports = User;