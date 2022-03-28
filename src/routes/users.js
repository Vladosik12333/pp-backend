const express = require("express");

const { schemaPassAndSignin } = require("../models/users");
const { container } = require("../middlewares/container-ctrl");
const { auth } = require("../middlewares/auth");
const { signup, signin, logout } = require("../controllers/users");
const validator = require("express-joi-validation").createValidator({});

const router = express.Router();

router.post("/signup", validator.body(schemaPassAndSignin), container(signup));
router.post("/signin", validator.body(schemaPassAndSignin), container(signin));
router.get("/logout", auth, container(logout));

module.exports = router;
