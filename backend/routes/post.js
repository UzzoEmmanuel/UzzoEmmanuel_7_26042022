const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/post");
const auth = require("../middlewares/auth");

//-----------------------------------------------------------------------------------------------
//création d'un post.
router.post("/", auth, postCtrl.createPost);

//accès à tous les posts.
router.get("/getPosts", auth, postCtrl.getPosts);

//accès à un post.
router.get("/getPost/:id", auth, postCtrl.getPost);

//modification d'un post.
router.put("/putPost/:id", auth, postCtrl.updatePost);

//suppression d'un post.
router.delete("/deletePost/:id", auth, postCtrl.deletePost);

//-----------------------------------------------------------------------------------------------
module.exports = router;
