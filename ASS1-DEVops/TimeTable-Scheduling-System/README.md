# TimeTable Scheduling System

## Overview
A comprehensive full-stack scheduling application for managing class timetables with a React.js frontend, Node.js/Express backend, and modern development tools.

## Project Structure
```
TimeTable-Scheduling-System/
├── README.md              # Documentation
├── Outputscreenshots/     # Application screenshots
└── Sourcecode/
    ├── backend/
    │   ├── package.json   # Backend dependencies
    │   ├── server.js      # Express server
    │   ├── models/        # Data models directory
    │   └── routes/        # API routes directory
    │
    └── frontend/
        ├── package.json           # Frontend dependencies
        ├── README.md              # Frontend documentation
        ├── index.html             # HTML entry point
        ├── eslint.config.js       # ESLint configuration
        ├── vite.config.js         # Vite bundler configuration
        ├── public/                # Static assets
        └── src/
            └── [React source files]
```

## Features
- **Timetable Management:** Create, view, and manage class schedules
- **Class Scheduling:** Assign subjects, teachers, and time slots
- **Responsive Interface:** Modern React UI with Vite bundler
- **RESTful API:** Express backend with organized routing
- **Data Models:** Structured models for scheduling entities
- **Static Assets:** Optimized public file serving

## Technology Stack
- **Backend:** Node.js, Express.js
- **Frontend:** React.js, Vite (bundler)
- **Tooling:** ESLint (code quality)
- **Build Tool:** Vite (modern, faster builds)
- **Language:** JavaScript (ES6+)

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

## Installation & Setup

### Backend Setup
```bash
cd Sourcecode/backend
npm install
npm start
# or
node server.js
```
Backend runs on configured port (check console for exact URL/port)

### Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173` (Vite default)

## Running the Application

**Terminal 1 - Start Backend Server:**
```bash
cd Sourcecode/backend
npm start
```

**Terminal 2 - Start Frontend Development Server:**
```bash
cd Sourcecode/frontend
npm run dev
```

Then open your browser to the URL displayed in the frontend terminal output.

## Available Scripts

### Backend
- `npm start` - Start the Express server
- Review `package.json` for additional scripts

### Frontend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Features

### Timetable Management
- Create new timetables
- View all scheduled classes
- Edit schedule assignments
- Delete entries

### Scheduling Components
- Classes and sections
- Teacher assignments
- Subject allocation
- Time slot management
- Day-wise scheduling

## API Routes
- Backend routes are organized in the `routes/` directory
- Models define the data structure for scheduling entities
- All API endpoints follow RESTful conventions

## Frontend Components
- React components for timetable display
- Forms for schedule management
- Responsive layout for desktop and tablet viewing
- Integration with backend API

## Development

### ESLint
The project includes ESLint configuration for maintaining code quality. Run:
```bash
npm run lint
```

### Vite Configuration
Vite provides fast builds and hot module replacement during development. Configuration is in `vite.config.js`.

## Output
Screenshots demonstrating the timetable interface, scheduling features, and user workflows are available in the `Outputscreenshots` directory.

## Build for Production

### Frontend Production Build
```bash
cd Sourcecode/frontend
npm run build
```
Creates optimized build in `dist/` directory.

### Deployment
- Frontend: Deploy `dist/` folder to static hosting
- Backend: Deploy to Node.js-compatible server
- Ensure backend and frontend URLs are properly configured

## Configuration

### Backend Configuration
- Check `server.js` for port and middleware settings
- Review `models/` for data structure definitions
- API routes can be extended in `routes/` directory

### Frontend Configuration
- Vite config: `vite.config.js`
- ESLint config: `eslint.config.js`
- React configuration and imports in `src/`

## Troubleshooting

**Port Conflicts**
- Change backend port in `server.js`
- Vite default port 5173 can be configured in `vite.config.js`

**Module Not Found**
- Run `npm install` in both frontend and backend directories
- Clear node_modules and package-lock.json if issues persist

**Build Errors**
- Check ESLint warnings with `npm run lint`
- Ensure all dependencies are installed
- Verify Node.js version compatibility

## Project Structure Best Practices
- Backend routes are modular and organized
- Frontend components are reusable
- Static assets are served from `public/`
- Configuration files follow industry standards

## Notes
- Both backend and frontend must be running for full functionality
- Ensure proper CORS configuration if frontend and backend run on different domains
- For production, implement authentication and authorization
- Database integration may be added to backend as needed
