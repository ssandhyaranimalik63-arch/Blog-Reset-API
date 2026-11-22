# Blog REST API with CRUD Operations

## Project Description
This project is a Blog REST API developed using Node.js and Express.js.
It allows users to create, read, update, and delete blog posts.

## Technologies Used
- Node.js
- Express.js
- REST API
- REST Client (VS Code extension)

## Blog Post Fields
Each blog post contains:
- ID
- Title
- Content
- Author
- Category
- Created Date

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /posts | Create a new blog |
| GET | /posts | Get all blogs |
| GET | /posts/:id | Get blog by ID |
| PUT | /posts/:id | Update blog |
| DELETE | /posts/:id | Delete blog |

## How to Run the Project

1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install dependencies:

   npm install

5. Start the server:

   node server.js

6. Open:

   http://localhost:3000

## Testing
The API was tested using the REST Client extension in Visual Studio Code.

## Storage
Blog posts are currently stored in an in-memory array.
The data resets when the server restarts.

## Author
Sandhya