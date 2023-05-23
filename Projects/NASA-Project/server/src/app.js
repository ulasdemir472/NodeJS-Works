const path = require("path");
const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname, "..", "public", "index.html");
});

module.exports = app;
