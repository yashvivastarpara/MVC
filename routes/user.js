const { Router } = require("express");
const { userhome, login, signup } = require("../controllers/user.controller");

const Userrouter = Router();
Userrouter.get("/", userhome);
Userrouter.get("/login", login);
Userrouter.post("/signup", signup);

module.exports = Userrouter;