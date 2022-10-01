const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");

//Comments Routes - simplified for now

router.post("/createComment", commentsController.createPost);

// router.put("/likeComment/:id", commentsController.likePost);

// router.delete("/deleteComment/:id", commentsController.deletePost);

module.exports = router;
