const { Schema, model } = require("mongoose");

const productsSchema = Schema(
  {
    name: {
      type: String,
      minlength: 5,
      maxlength: 50,
    },
    description: {
      type: String,
      maxlength: 1000,
    },
    price: {
      type: Number,
      min: 1,
      max: 100000,
    },
    imageUrl: {
      type: String,
      maxlength: 1000,
    },
    category: {
      type: {
        type: String,
        enum: ["pizza", "dessert", "drink"],
      },
    },
    addition: [
      {
        type: String,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Products = model("product", productsSchema);

module.exports = {
  Products,
};
