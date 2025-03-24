# APV Backend Project

This project is a full-stack JavaScript backend implementation focused on learning and implementing core API functionalities.

## Features

- RESTful API implementation
- User authentication with JWT (JSON Web Tokens)
- Password hashing with bcrypt
- Database integration with Mongoose (MongoDB)
- CORS (Cross-Origin Resource Sharing) configuration
- Environment variables management with dotenv
- Email sending functionality with Nodemailer

## Technologies Used

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: bcrypt for password hashing, CORS for secure cross-origin requests
- **Utilities**: dotenv for environment variables, Nodemailer for email functionality
- **Development**: Nodemon for live reloading

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the necessary environment variables (see `.env.example`)
4. Start the server:
   ```bash
   npm run dev
   ```

## Environment Variables

The project requires a `.env` file with the following variables:

- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `EMAIL_USER`: Email account username for Nodemailer
- `EMAIL_PASS`: Email account password for Nodemailer
- `EMAIL_HOST`: SMTP server host
- `EMAIL_PORT`: SMTP server port
- `FRONTEND_URL`: Comma-separated list of allowed frontend URLs for CORS

Example `.env` file:
This README.md provides a comprehensive overview of your project's features, technologies, and learning objectives. It's written in a professional format that clearly communicates the purpose and components of your backend system.
