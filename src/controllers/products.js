const { Products } = require("../models/products");

const getAllProducts = async (req, res) => {
  const products = await Products.find({});

  res.json({ products });
};

module.exports = {
  getAllProducts,
};
