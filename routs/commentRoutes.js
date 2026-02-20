const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const validate = require("../middlewares/validate");
const commentValidator = require("../middlewares/validators/commentValidator");

router.post(
  "/",
  commentValidator.createCommentRules,
  validate,
  commentController.createComment,
);
router.get(
  "/post/:postId",
  commentValidator.postIdParamRules,
  validate,
  commentController.getCommentsByPost,
);
router.put(
  "/:id",
  commentValidator.updateCommentRules,
  validate,
  commentController.updateComment,
);
router.delete(
  "/:id",
  commentValidator.deleteCommentRules,
  validate,
  commentController.deleteComment,
);

module.exports = router;
