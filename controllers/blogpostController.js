const BlogPost = require("../models/blogpost");

exports.blogpost_list = (req, res) => {
  BlogPost.find({}, (err, blogposts) => {
    if (err) throw err;
    res.render("base", {
      blogposts: blogposts,
      title: "Home",
      route: "index",
    });
  });
};

exports.blogpost_create_get = (req, res) => {
  res.render("base", { title: "Create Post", route: "create" });
};

exports.blogpost_create_post = (req, res) => {
  BlogPost.create(
    {
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
      date: Date.now(),
    },
    (err) => {
      if (err) throw err;
      console.log("Document inserted successfully");
    }
  );
  res.redirect("/");
};

exports.blogpost_detail = (req, res) => {
  BlogPost.findOne({ _id: req.params.blogid }, (err, blogpost) => {
    if (err) throw err;
    res.render("base", { blogpost: blogpost, title: "Blog Post", route: "detail" });
  });
};

exports.blogpost_update_get = (req, res) => {
  BlogPost.findOne({ _id: req.params.blogid }, (err, blogpost) => {
    if (err) throw err;
    res.render("base", { blogpost: blogpost, route: "update", title: "Edit Post" });
  });
};

exports.blogpost_update_post = (req, res) => {
  BlogPost.findOneAndUpdate({ _id: req.params.blogid }, {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  }, (err, blogpost) => {
    if (err) throw err;
    console.log("Document was successfully updated");
  });
  res.redirect("/");
};

exports.blogpost_delete_get = (req, res) => {
  BlogPost.findOne({ _id: req.params.blogid }, (err, blogpost) => {
    if (err) throw err;
    res.render("base", { blogpost: blogpost, title: "Delete Post", route: "delete" });
  });
};

exports.blogpost_delete_post = (req, res) => {
  BlogPost.findOneAndDelete({ _id: req.params.blogid }, (err, blogpost) => {
    if (err) throw err;
    console.log("Document was successfully deleted");
  });
  res.redirect("/");
};
