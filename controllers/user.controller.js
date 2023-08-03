const User = require("../models/user.schema");

const userhome = (req, res) => {
  res.send("Wlcm to home pg");
};
const login = (req, res) => {
  res.send("Wlcm to login Admin");
};

const signup = async (req, res) => {
    console.log(req.body)
  await User.create(req.body);
  res.send("Wlcm to signup Admin");
};
module.exports = { userhome, login,signup };