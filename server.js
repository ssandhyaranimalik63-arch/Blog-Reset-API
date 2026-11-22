const express = require("express");

const app = express();
app.use(express.json());

// Store blog posts
let posts = [];
let nextId = 1;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Blog REST API!");
});

// Create a new blog
app.post("/posts", (req, res) => {
    const { title, content, author, category } = req.body;

    if (!title || !content || !author || !category) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const newPost = {
        id: nextId++,
        title,
        content,
        author,
        category,
        createdDate: new Date().toISOString()
    };

    posts.push(newPost);

    res.status(201).json({
        message: "Blog created successfully",
        post: newPost
    });
});

// Get all blogs
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

// Get one blog by ID
app.get("/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    res.status(200).json(post);
});

// Update a blog
app.put("/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    const { title, content, author, category } = req.body;

    if (!title || !content || !author || !category) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    post.title = title;
    post.content = content;
    post.author = author;
    post.category = category;

    res.status(200).json({
        message: "Blog updated successfully",
        post: post
    });
});

// Delete a blog
app.delete("/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    posts.splice(index, 1);

    res.status(200).json({
        message: "Blog deleted successfully"
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});