const express = require("express");
const session = require("express-session");
const authRoutes = require("./routes/authRoutes");

const app = express();


app.use(express.json());


app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
  }),
);


app.use("/", authRoutes);

module.exports = app;
