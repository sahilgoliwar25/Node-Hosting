const route = require("express").Router();
const { data, specdata } = require("../controller/userController");
const validate = require("../middleware/userMiddleware");

route.get("/alldata", data); // function is written in UserController Folder

route.get("/data/:id", specdata);

module.exports = route;
