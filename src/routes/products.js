const express = require("express");
const { getAllProducts } = require("../controllers/products");
const { container } = require("../middlewares/container-ctrl");

const router = express.Router();

router.get("/", container(getAllProducts));

module.exports = router;
