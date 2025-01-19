# Concierge API

This repository contains the backend API for a custom concierge system developed as part of a capstone project. The API provides essential functionality for managing user accounts, services, and administrative tasks.

## Features
- User authentication and session management.
- CRUD operations for services and accounts.
- Integration with database systems for data persistence.

## Technologies Used
- **Node.js**: Backend runtime for scalable and efficient server-side development.
- **Express**: Framework for API design and routing.
- **MS SQL**: Database for structured data management.

## Contributions
As a key contributor to this project, my contributions include:
- Designing and implementing user authentication and API endpoints.
- Developing middleware for input validation and error handling.
- Optimizing database queries for improved performance and reliability.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/jefritter/concierge-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd concierge-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DB_HOST=your-database-host
     DB_USER=your-database-username
     DB_PASS=your-database-password
     DB_NAME=your-database-name
     ```
5. Start the server:
   ```bash
   npm start
   ```

## License
This project is licensed under [MIT License](LICENSE).
