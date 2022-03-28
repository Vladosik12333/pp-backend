const { User } = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const signup = async (req, res) => {};

const signin = async (req, res) => {};

const logout = async (req, res) => {};

module.exports = {
  signup,
  signin,
  logout,
};
