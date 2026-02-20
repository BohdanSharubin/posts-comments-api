const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const validate = require("../middlewares/validate");
const postValidator = require("../middlewares/validators/postValidator");

router.post(
  "/",
  postValidator.createPostRules,
  validate,
  postController.createPost,
);
router.get(
  "/",
  postValidator.getPostsRules,
  validate,
  postController.getAllPosts,
);
router.get(
  "/search",
  postValidator.searchPostsRules,
  postController.searchPosts,
);
router.get(
  "/:id",
  postValidator.mongoIdParamRule,
  validate,
  postController.getPostById,
);
router.put(
  "/:id",
  postValidator.updatePostRules,
  validate,
  postController.updatePost,
);
router.patch(
  "/:id/like",
  postValidator.mongoIdParamRule,
  validate,
  postController.likePost,
);
router.delete(
  "/:id",
  postValidator.mongoIdParamRule,
  validate,
  postController.deletePost,
);

module.exports = router;
