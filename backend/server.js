import express from "express";
import data from "./data.js";

const app = express();
// test
app.get("/api/products", (req, res, next) => {
  res.send(data.products);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
