# Bookstore API

A RESTful API for managing books with authentication, filtering, and searching capabilities.

## Tech Stack
- Node.js with Express.js
- MongoDB database
- Mongoose ORM
- JWT authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your MongoDB database and add the connection string to the `.env` file
4. Start the server: `npm start`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login and get access token

### Books (All require JWT token)
- `POST /api/books` - Create a new book
- `GET /api/books` - Get all books with optional filtering
- `GET /api/books/:id` - Get a book by ID
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

## Features
- JWT Authentication
- CRUD operations for books
- Search and filtering
- Pagination
- Error handling

## Docker Support
Build the image: `docker build -t bookstore-api .`
Run the container: `docker run -p 3000:3000 bookstore-api`
