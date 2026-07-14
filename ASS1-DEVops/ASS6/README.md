# Assignment 6 - Marketplace Application

## Overview
A full-stack e-commerce marketplace application with user authentication, product management, and listing features.

## Project Structure
```
ASS6/
├── Outputscreenshots/    # Application screenshots
└── marketplace/
    ├── package.json      # Dependencies
    ├── README.md         # Original documentation
    ├── seed.js           # Database seeding script
    ├── server.js         # Express server entry point
    ├── middleware/
    │   └── auth.js       # Authentication middleware
    ├── models/
    │   ├── User.js       # User data model
    │   └── Product.js    # Product data model
    ├── routes/
    │   ├── auth.js       # Authentication routes (login/register)
    │   └── products.js   # Product management routes
    └── public/
        ├── index.html           # Home page
        ├── login.html           # Login page
        ├── register.html        # User registration
        ├── add-product.html     # Add product form
        ├── product-detail.html  # Product detail view
        ├── script.js            # Client-side JavaScript
        └── style.css            # Styling
```

## Features
- User registration and authentication
- Product listing and browsing
- Add/edit product functionality
- User account management
- Authentication middleware for protected routes
- Responsive web interface

## Technology Stack
- **Backend:** Node.js, Express.js
- **Authentication:** Custom middleware with sessions/tokens
- **Data Models:** User and Product entities
- **Frontend:** HTML5, CSS3, JavaScript
- **Database:** Depends on implementation (see models)

## Installation & Setup
1. Navigate to the `marketplace` directory
2. Install dependencies: `npm install`
3. Seed the database (if needed): `node seed.js`
4. Start the server: `npm start` or `node server.js`
5. Open your browser to `http://localhost:3000` (or configured port)

## Available Routes
### Public Routes
- `GET /` - Home page
- `GET /login` - Login page
- `GET /register` - Registration page

### Authenticated Routes
- `POST /auth/register` - Create new user account
- `POST /auth/login` - User login
- `GET /products` - View all products
- `GET /products/:id` - Product details
- `POST /products` - Add new product (authenticated users)
- `PUT /products/:id` - Update product (authenticated)
- `DELETE /products/:id` - Delete product (authenticated)

## Usage
1. Register a new user account
2. Log in with your credentials
3. Browse available products
4. Add new products to the marketplace
5. View product details and manage listings

## Output
Screenshots showing the application interface, user flows, and marketplace features are available in the `Outputscreenshots` directory.

## Notes
- Authentication is required for adding/editing products
- Check auth.js for authentication logic and session handling
- Review seed.js to populate initial data
- CORS and session configuration may be needed for production
