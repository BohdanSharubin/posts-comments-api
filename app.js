require("dotenv").config();

const express = require("express");
const connectDB = require("./config/database");
const postRoutes = require("./routs/postRoutes");
const commentRoutes = require("./routs/commentRoutes");
const ApiError = require("./errors/ApiError");
const errorHandler = require("./middlewares/errorHandler");

connectDB();
const app = express();
app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API for working with posts and comments",
    endpoints: {
      posts: "/api/posts",
      comments: "/api/comments",
    },
  });
});
app.use((req, res, next) => {
  next(ApiError.notFound("Route was not found"));
});
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
