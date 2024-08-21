# DCS-Backend-Engineering-Assignment

This repository contains the backend implementation for the DCS (Distributed Computing Systems) chat server assignment. It includes features such as user authentication, message storage, and real-time communication using WebSockets.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [WebSocket Support](#websocket-support)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The DCS Backend Engineering Assignment involves creating a chat server with functionalities including user authentication, message storage, and real-time communication. This project uses Node.js, Express.js, and WebSockets, and integrates with a database for persistent storage.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RubenV74/DSC-Backend-Engineering-Assignment.git
   cd DSC-Backend-Engineering-Assignment

2. Install dependencies:

   ```bash
   npm install

3. Ensure your database (MongoDB/MySQL/PostgreSQL) is running.

## Usage

Start the server:

   ```bash
   npm start
   ```

The server will run on the port specified in the .env file. You can access the API and WebSocket endpoints at this port.

## Environment Variables

Create a .env file in the root directory of the project and add the following variables:

   ```bash
   PORT=3000
   DB_CONNECTION_STRING=your_database_connection_string
   JWT_SECRET=your_jwt_secret
   ```
This file should not be committed to version control.
Make sure to add `.env` to your `.gitignore` file.

## API Endpoints

### User Authentication

- **Sign Up**
   - URL: `/api/auth/signup`
   - Method: `POST`
   - Description: Create a new user.

- **Log In**
   - URL: `/api/auth/login`
   - Method: `POST`
   - Description: Authenticate a user and receive a JWT token.

### Messages

- **Get Messages**
   - URL: `/api/messages`
   - Method: `GET`
   - Description: Retrieve all messages.

- **Send Message**
   - URL: `/api/messages`
   - Method: `POST`
   - Description: Send a new message.

## Socket Support

To use Socket for real-time communication, connect to the server at `ws://your_server_address:3003`. Once connected, you can send and receive messages in real-time.

## Project Structure

   ```
.
├── config
│   └── db.js                  # Database connection configuration
├── controllers
│   ├── authController.js       # Authentication logic
│   └── messageController.js    # Message handling logic
├── models
│   ├── user.js                 # User model
│   └── message.js              # Message model
├── routes
│   ├── authRoutes.js           # Authentication routes
│   └── messageRoutes.js        # Message routes
├── utils
│   ├── authMiddleware.js       # Middleware for authentication
│   └── websocket.js            # WebSocket configuration
├── .env                        # Environment variables
├── index.js                    # Entry point for the server
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

