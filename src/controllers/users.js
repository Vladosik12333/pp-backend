const { User } = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const signup = async (req, res) => {
  const { login, password, name, surname } = req.body;

  const user = await User.findOne({ login });

  if (user) {
    res.status(409).json({ message: "Email in use" });
    return;
  }

  const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const { _id } = await User.create({
    login,
    name,
    surname,
    password: hashPass,
  });

  const token = jwt.sign({ id: _id }, SECRET_KEY, { expiresIn: "1d" });

  await User.findOneAndUpdate({ _id }, { token });

  res.status(201).json({
    token,
    user: {
      login,
      name,
      surname,
    },
  });
};

const signin = async (req, res) => {
  const { login, password } = req.body;

  const user = await User.findOne({ login });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    res.status(401).json({ message: "Email or password is wrong" });
    return;
  }

  const { _id, name, surname } = user;
  const token = jwt.sign({ id: _id }, SECRET_KEY, { expiresIn: "1d" });
  await User.findByIdAndUpdate({ _id }, { token });

  res.json({
    token,
    user: {
      login,
      name,
      surname,
    },
  });
};

const logout = async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate({ _id }, { token: null });

  res.status(204).json();
};

module.exports = {
  signup,
  signin,
  logout,
};
