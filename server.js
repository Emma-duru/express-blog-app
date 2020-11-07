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
// app.get("/", blogpostController.blogpost_list);
// app.get("/detail/:blogid", blogpostController.blogpost_detail);
// app.get("/create", blogpostController.blogpost_create_get);
// app.post("/create", blogpostController.blogpost_create_post);
// app.get("/update/:blogid", blogpostController.blogpost_update_get);
// app.post("/update/:blogid", blogpostController.blogpost_update_post);
// app.get("/delete/:blogid", blogpostController.blogpost_delete_get);
// app.post("/delete/:blogid", blogpostController.blogpost_delete_post);

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log("Server is running!");
});
