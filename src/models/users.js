const { Schema, model } = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const userSchema = Schema({});

const schemaPassAndSignin = Joi.object({});

const User = model("user", userSchema);

module.exports = {
  User,
  schemaPassAndSignin,
};
