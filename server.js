require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
const blogpostRouter = require("./router/blogPosts");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/", blogpostRouter);

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log("Server is running!");
});
