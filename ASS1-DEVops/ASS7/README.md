# Assignment 7 - Student Feedback Review System

A comprehensive full-stack web application for collecting and managing student feedback using React.js frontend and Express.js backend with MongoDB.

## Project Structure
```
ASS7/
├── README.md          # Documentation
├── Outputscreenshots/ # Application screenshots
└── Sourcecode/
    ├── backend/
    │   ├── package.json      # Backend dependencies
    │   ├── server.js         # Express server
    │   ├── middleware/
    │   │   └── auth.js       # Authentication middleware (JWT)
    │   ├── models/
    │   │   ├── User.js       # User model
    │   │   └── Feedback.js   # Feedback model
    │   └── routes/
    │       ├── auth.js       # Auth routes (login/register)
    │       └── feedback.js   # Feedback management routes
    │
    └── frontend/
        ├── package.json      # Frontend dependencies
        ├── public/
        │   └── index.html    # HTML entry point
        ├── src/
        │   ├── App.js        # Main App component
        │   ├── App.css       # App styling
        │   ├── index.js      # React entry point
        │   └── components/   # React components directory
        ├── vite.config.js    # Vite bundler configuration
        └── README.md         # Frontend documentation
```

## Features
- **User Authentication:** Secure registration and login with JWT tokens
- **Feedback Management:** Submit, view, edit, and delete feedback
- **Modern React UI:** Component-based responsive interface
- **Express Backend:** RESTful API with MongoDB integration
- **Authorization:** Middleware-based access control
- **Persistent Storage:** MongoDB for data persistence

## Technology Stack
- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React.js (ES6+), Vite bundler
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** MongoDB
- **Styling:** CSS3
- **API:** RESTful architecture

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance - Atlas recommended)

## Installation & Setup

### 1. MongoDB Configuration
- Set up a MongoDB database locally or use MongoDB Atlas (cloud)
- Obtain your MongoDB URI

### 2. Backend Setup
```bash
cd Sourcecode/backend
npm install
```

Create a `.env` file in the backend directory:
```
MONGO_URI=mongodb://127.0.0.1:27017/student-feedback
# Or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/student-feedback
PORT=5000
JWT_SECRET=your-secret-key-here
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Running the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
# or
npm start
```
Backend runs on `http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm run dev
# or
npm start
```
Frontend runs on `http://localhost:5173` (Vite) or `http://localhost:3000` (Create React App)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - User login (returns JWT token)

### Feedback (Requires Authentication)
- `GET /api/feedback` - Get all feedback entries
- `GET /api/feedback/:id` - Get specific feedback
- `POST /api/feedback` - Submit new feedback
- `PUT /api/feedback/:id` - Update feedback
- `DELETE /api/feedback/:id` - Delete feedback

## Usage Guide

1. **Register Account**
   - Click "Register" on login page
   - Provide email and password
   - Submit form

2. **Login**
   - Enter credentials
   - JWT token is stored for authenticated requests

3. **Submit Feedback**
   - Navigate to feedback form
   - Fill in feedback details
   - Submit for storage

4. **Manage Feedback**
   - View list of submitted feedback
   - Edit existing feedback
   - Delete feedback entries

## Environment Variables

### Backend (.env)
- `MONGO_URI` - MongoDB connection string
- `PORT` - Server port (default: 5000)
- `JWT_SECRET` - Secret key for JWT token generation
- `NODE_ENV` - Environment (development/production)

### Frontend (.env)
- `REACT_APP_API_URL` - Backend API URL (if using Create React App)
- `VITE_API_URL` - Backend API URL (if using Vite)

## Development Commands

### Backend
- `npm run dev` - Start with nodemon (auto-reload)
- `npm start` - Start server
- `npm test` - Run tests (if configured)

### Frontend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm preview` - Preview production build
- `npm test` - Run tests (if configured)

## Output
Screenshots and visual demonstrations showing the application interface, user workflows, and feedback management features are available in the `Outputscreenshots` directory.

## Troubleshooting

**MongoDB Connection Issues**
- Verify MongoDB is running locally or check Atlas connection string
- Ensure firewall allows connection on port 27017 (local) or check IP whitelist (Atlas)

**CORS Errors**
- Verify frontend and backend URLs match API configuration
- Check backend CORS middleware settings

**Port Already in Use**
- Change PORT in .env file for backend
- Change port in frontend configuration or Vite config

## Notes
- Keep sensitive information (JWT_SECRET, MongoDB URI) in .env files
- Never commit .env files to version control
- Use strong JWT_SECRET for production
- Enable MongoDB authentication for production environments
- Consider rate limiting and input validation for production deployment

Then open `http://localhost:3000` in the browser.

## Features

- Register and log in using email and password
- Submit student feedback with name, course, rating, and comments
- Filter feedback by course name
- View recent feedback entries
- Delete feedback items when signed in

## Notes

The backend listens on port `5000` and exposes these routes:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/feedback`
- `POST /api/feedback`
- `DELETE /api/feedback/:id`

Authentication is required for adding or deleting feedback.
