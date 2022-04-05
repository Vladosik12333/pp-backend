const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const productsRouter = require("./src/routes/products");
const usersRouter = require("./src/routes/users");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors({ origin: "https://palens-pizzahouse.netlify.app/" }));
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Internal Server Error" } = err;

  res.status(status).json(message);
});

module.exports = app;
