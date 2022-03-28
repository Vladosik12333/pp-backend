const { Schema, model } = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const productsSchema = Schema({}, { versionKey: false, timestamps: true });

const Products = model("product", productsSchema);

const schemaCreateProduct = Joi.object({});

module.exports = {
  Products,
  schemaCreateProduct,
};
