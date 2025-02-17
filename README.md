# Library Management System

## Project Overview
A comprehensive RESTful API-based Library Management System built using modern web technologies including Node.js, Express.js, MongoDB, and Mongoose. The system provides a robust platform for managing library resources with role-based access control, secure authentication, and efficient data management.

## Technical Stack
- Backend: Node.js with Express.js
- Database: MongoDB with Mongoose ODM
- Authentication: JWT (JSON Web Tokens)
- Architecture: RESTful API design patterns

## Core Features

### User Management
- Secure user registration and authentication system
- Role-based access control (Admin and Member roles)
- JWT-based authentication middleware
- Password hashing for enhanced security

### Book Management
- Comprehensive book catalog management
- Book metadata tracking including availability status
- Author association and validation
- Inventory management with copies tracking

### Author Management
- Author profile management
- One-to-many relationship with books
- Author verification system for new book additions

### Borrowing System
- Dynamic book borrowing transaction management
- Real-time book availability tracking
- Automated copy count management
- Book return processing with status updates

### Security Features
- Authentication middleware for protected routes
- Role-based authorization checks
- Error handling middleware
- Input validation and sanitization

### Database Design Highlights
- Optimized MongoDB schema design
- Efficient relationship management:
  - One-to-Many: Authors to Books
  - Many-to-Many: Users to Books (via Borrowing Transactions)
- Query optimization for common operations

## API Endpoints

### Authentication Routes
- `POST /api/auth/register`: New member registration
- Secure password handling with hashing

### Book Management Routes
- `POST /api/books`: Admin-only book addition
- Author verification and relationship management
- Inventory tracking integration

### Borrowing Management
- `POST /api/borrowings`: Member book borrowing
- `PUT /api/borrowings/:id/return`: Book return processing
- Availability checks and transaction management

## Implementation Features

### Middleware Architecture
1. Authentication Layer
   - JWT verification
   - User context attachment
   - Session management

2. Authorization Layer
   - Role-based access control
   - Route protection
   - Permission validation

3. Error Handling
   - Centralized error management
   - Standardized error responses
   - Validation error handling

### Database Operations
- CRUD operations using Mongoose
- Advanced query filtering
- Pagination support
- Search functionality

### Relationship Management
- Author-Book relationships
- User-Book borrowing relationships
- Transaction history tracking

## Technical Highlights
- RESTful API best practices
- Modular code architecture
- Scalable database design
- Secure authentication implementation
- Comprehensive error handling
- Efficient query optimization
