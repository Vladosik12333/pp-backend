const express = require("express");
const { addProduct } = require("../controllers/products");
const { schemaCreateProduct } = require("../models/products");
const { container } = require("../middlewares/container-ctrl");
const validator = require("express-joi-validation").createValidator({});

const router = express.Router();

router.post("/", validator.body(schemaCreateProduct), container(addProduct));
router.get("/", (req, res) => {
  res.json("All right");
});

module.exports = router;
