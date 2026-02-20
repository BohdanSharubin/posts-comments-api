# 📌 Posts & Comments API

## 📖 About the Project

This project is a RESTful API for managing posts and comments.
It allows users to create, read, update, delete, and search posts, as well as add and manage comments linked to specific posts.

The API follows a layered structure with centralized error handling and request validation.

---

## 🚀 Features

* CRUD operations for posts
* CRUD operations for comments
* Comments linked to posts (1:N relationship)
* Request validation using express-validator
* Centralized error handling
* Pagination support
* Search functionality
* MongoDB integration with Mongoose

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* express-validator
* dotenv

---

## 📂 Project Structure

```
project-root/
│── controllers/
│── models/
│── routes/
│── middlewares/
│── validators/
│── errors/
│── config/
│── app.js
```

---

## 🌐 API Base URL

```
http://localhost:3000/api
```

---

## 📌 API Endpoints

### 🔹 Posts

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | /posts           | Get all posts   |
| GET    | /posts/:id       | Get post by ID  |
| POST   | /posts           | Create new post |
| PUT    | /posts/:id       | Update post     |
| DELETE | /posts/:id       | Delete post     |
| GET    | /posts/search?q= | Search posts    |

---

### 🔹 Comments

| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| GET    | /comments              | Get all comments     |
| GET    | /comments/:id          | Get comment by ID    |
| POST   | /comments              | Create comment       |
| PUT    | /comments/:id          | Update comment       |
| DELETE | /comments/:id          | Delete comment       |
| GET    | /comments/post/:postId | Get comments by post |

---

## 📦 Example Response

### ✅ Success Response

```json
{
  "success": true,
  "data": {
    "_id": "65f1c2a8b9d3e4f567890123",
    "title": "Sample post",
    "content": "Post content",
    "author": "John",
    "createdAt": "2026-02-20T12:00:00.000Z"
  }
}
```

---

### ❌ Error Response

```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "title",
      "msg": "title is required"
    }
  ],
  "statusCode": 400
}
```

---

## ⚠️ Error Handling

| Error Type       | Status Code | Description               |
| ---------------- | ----------- | ------------------------- |
| Validation Error | 400         | Request validation failed |
| CastError        | 400         | Invalid MongoDB ObjectId  |
| Not Found        | 404         | Resource not found        |
| Server Error     | 500         | Internal server error     |

---

## 🔐 Validation Rules

* Title: 3–200 characters
* Content: min length required
* Author: required
* Tags: optional array (max 10 items)
* ObjectId: must be valid MongoDB ID

---

## 🧪 Example Requests

### Create Post

```json
POST /api/posts

{
  "title": "New Post",
  "content": "Some content",
  "author": "Ivan",
  "tags": ["node", "api"]
}
```

---

### Create Comment

```json
POST /api/comments

{
  "postId": "65f1c2a8b9d3e4f567890123",
  "author": "Anna",
  "content": "Nice post!"
}
```

---

## ⚙️ Setup & Installation

```bash
git clone <repo-url>
cd project
npm install
```

Create `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection
```

Run project:

```bash
npm run dev
```

---

## 👤 Author

Bohdan Sharubin / [GitHub](https://github.com/BohdanSharubin)
