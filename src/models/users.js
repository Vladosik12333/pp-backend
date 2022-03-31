const { Schema, model } = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const userSchema = Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 30,
  },
  surname: {
    type: String,
    minlength: 3,
    maxlength: 30,
  },
  login: {
    type: String,
    minlength: 5,
    maxlength: 30,
    unique: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
    default: null,
  },
});

const schemaSignin = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
});

const schemaSignup = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  schemaSignup,
  schemaSignin,
};
