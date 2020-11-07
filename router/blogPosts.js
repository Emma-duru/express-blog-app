const express = require("express");
const router = express();

const blogpostController = require("../controllers/blogpostController");

// The routes
router.get("/", blogpostController.blogpost_list);
router.get("/detail/:blogid", blogpostController.blogpost_detail);
router.get("/create", blogpostController.blogpost_create_get);
router.post("/create", blogpostController.blogpost_create_post);
router.get("/update/:blogid", blogpostController.blogpost_update_get);
router.post("/update/:blogid", blogpostController.blogpost_update_post);
router.get("/delete/:blogid", blogpostController.blogpost_delete_get);
router.post("/delete/:blogid", blogpostController.blogpost_delete_post);

module.exports = router;