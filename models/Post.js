const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: [200, "Title can't be more than 200 symbols"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
    minlength: [10, "Content have to be at least 10 symbols"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
    trim: true,
  },
  tags: [{ type: String, trim: true }],
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
    
postSchema.index({ title: "text", content: "text" });

module.exports = mongoose.model("Post", postSchema);
