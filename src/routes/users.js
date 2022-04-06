const express = require("express");

const { schemaSignin, schemaSignup } = require("../models/users");
const { container } = require("../middlewares/container-ctrl");
const { auth } = require("../middlewares/auth");
const { signup, signin, logout, current } = require("../controllers/users");
const validator = require("express-joi-validation").createValidator({});

const router = express.Router();

router.post("/signup", validator.body(schemaSignup), container(signup));
router.post("/signin", validator.body(schemaSignin), container(signin));
router.post("/logout", auth, container(logout));
router.post("/current", auth, container(current))

module.exports = router;
