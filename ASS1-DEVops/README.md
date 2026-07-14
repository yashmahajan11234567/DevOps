# ASS1-DEVops - College DevOps Project

## Overview
**ASS1-DEVops** is a comprehensive college coursework project demonstrating DevOps principles, Git workflows, and CI/CD implementation. This repository contains multiple assignments showcasing the progression from basic web development to advanced full-stack applications with deployment automation.

## Project Objective
This project is designed for learning and implementing:
- **Version Control:** Git and GitHub workflows
- **CI/CD Pipelines:** Continuous Integration and Continuous Deployment
- **DevOps Practices:** Infrastructure automation and deployment strategies
- **Full-Stack Development:** Frontend and backend integration
- **Modern Web Technologies:** Node.js, React, Express.js, and related frameworks

## Repository Structure
```
ASS1-DEVops/
├── ASS_4B/                          # Timetable Scheduling System
│   ├── Sourcecode/
│   │   ├── backend/                 # Node.js backend with models
│   │   ├── index.html, script.js, style.css
│   │   └── [server components]
│   └── Outputscreenshots/
│
├── Ass3/                            # Basic Web Application
│   ├── Sourcecode/                  # Static HTML/CSS/JS
│   └── Outputscreenshots/
│
├── Ass3_minimilised/                # Optimized Ass3 Version
│   ├── Sourcecode/                  # Reduced code footprint
│   └── Outputscreenshots/
│
├── ASS4/                            # Web App with Node.js Server
│   ├── Sourcecode/
│   │   ├── server.js, package.json
│   │   └── [HTML/CSS/JS files]
│   └── Outputscreenshots/
│
├── ASS5/                            # Express.js Application
│   ├── Sourcecode/
│   │   ├── app.js, server.js, package.json
│   │   └── [frontend files]
│   └── Outputscreenshots/
│
├── ASS5_2/                          # EJS Templating Application
│   ├── Sourcecode/
│   │   ├── server.js, package.json
│   │   ├── views/                   # EJS templates with partials
│   │   ├── public/                  # Static assets
│   │   └── data/                    # JSON data storage
│   └── Outputscreenshots/
│
├── ASS6/                            # E-Commerce Marketplace
│   ├── marketplace/
│   │   ├── server.js, package.json
│   │   ├── models/                  # User and Product models
│   │   ├── routes/                  # Auth and product routes
│   │   ├── middleware/              # Authentication middleware
│   │   └── public/                  # Frontend files
│   └── Outputscreenshots/
│
├── ASS7/                            # Full-Stack React + Node.js App
│   ├── backend/                     # Express API server
│   │   ├── server.js, package.json
│   │   ├── models/                  # User and Feedback models
│   │   ├── routes/                  # API endpoints
│   │   └── middleware/              # Auth middleware
│   │
│   ├── frontend/                    # React application
│   │   ├── package.json
│   │   ├── vite.config.js           # Vite bundler config
│   │   ├── src/
│   │   │   ├── App.js, App.css
│   │   │   ├── index.js
│   │   │   └── components/
│   │   └── public/
│   │
│   └── Outputscreenshots/
│
├── basix tags/                      # HTML Tags Reference
│   ├── Sourcecode/
│   │   └── test/                    # Test data and examples
│   └── Outputscreenshots/
│
├── TimeTable-Scheduling-System/     # Advanced Scheduling App
│   ├── frontend/                    # React frontend with Vite
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── eslint.config.js
│   │   └── src/
│   │
│   ├── backend/                     # Node.js/Express backend
│   │   ├── server.js, package.json
│   │   ├── models/
│   │   └── routes/
│   │
│   └── Outputscreenshots/
│
└── README.md                         # This file
```

## Assignments Overview

### ASS3 - Basic Web Development
- Static HTML/CSS/JavaScript application
- Foundational web development concepts
- No server-side logic

### ASS4B - Timetable System (Basic)
- Introduction to backend development
- Node.js and Express.js basics
- Data model implementation

### ASS4 - Server Integration
- HTML served from Node.js backend
- Server-side request handling
- Basic routing concepts

### ASS5 - Express Framework
- Full Express.js application
- Integrated frontend and backend
- App.js for application setup

### ASS5_2 - EJS Templating
- Dynamic HTML rendering with EJS
- Reusable template components
- JSON-based data persistence
- Partial templates for modularity

### ASS6 - Authentication & E-Commerce
- User authentication system
- Product marketplace features
- Role-based access control
- Database model integration

### ASS7 - Modern Full-Stack
- React.js frontend with Vite
- RESTful API backend
- JWT-based authentication
- MongoDB integration
- Component-based architecture

### TimeTable-Scheduling-System
- Advanced scheduling application
- React frontend with Vite bundler
- Express backend with modular routing
- ESLint configuration for code quality
- Production-ready structure

## Learning Outcomes

### Version Control & Git
- ✅ Repository initialization and management
- ✅ Branching and merging strategies
- ✅ Commit history and code review practices
- ✅ GitHub collaboration workflows
- ✅ Push and pull operations

### CI/CD Implementation
- ✅ Automated build pipelines
- ✅ Continuous Integration principles
- ✅ Automated testing strategies
- ✅ Continuous Deployment workflows
- ✅ GitHub Actions for automation
- ✅ Deployment automation and staging

### DevOps Practices
- ✅ Infrastructure as Code concepts
- ✅ Container and deployment preparation
- ✅ Environment configuration management
- ✅ Monitoring and logging basics
- ✅ Error handling and debugging

### Web Development Progression
- ✅ Static websites → Dynamic applications
- ✅ Backend integration and APIs
- ✅ Modern frameworks (React, Express)
- ✅ Database design and integration
- ✅ Authentication and security
- ✅ Full-stack development patterns

## Technology Stack

### Frontend Technologies
- **HTML5, CSS3, JavaScript** - Core web technologies
- **React.js** - Modern UI library with component architecture
- **Vite** - Next-generation build tool for faster development
- **EJS** - Server-side templating engine

### Backend Technologies
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database (in ASS7)

### DevOps & Tools
- **Git** - Version control system
- **GitHub** - Code repository hosting
- **CI/CD Tools** - Automated pipeline execution
- **npm/yarn** - Package managers
- **ESLint** - Code quality and linting

## Getting Started

### Prerequisites
- **Git:** Installed and configured
- **Node.js:** v14 or higher
- **npm or yarn:** Package manager
- **GitHub Account:** For repository management
- **Text Editor/IDE:** VS Code recommended

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/your-username/ASS1-DEVops.git
cd ASS1-DEVops

# Navigate to specific assignment
cd ASS7  # or any other assignment folder

# For projects with frontend/backend structure
cd backend && npm install
cd ../frontend && npm install
```

### Running Individual Assignments

Each assignment folder contains its own README with specific setup instructions. Example for ASS7:

**Backend:**
```bash
cd Sourcecode/backend
npm install
npm run dev
```

**Frontend:**
```bash
cd Sourcecode/frontend
npm install
npm run dev
```

Refer to individual README files in each assignment folder for detailed instructions.

## Git Workflow

### Basic Workflow
```bash
# Create a new branch for features
git checkout -b feature/assignment-name

# Make changes and commit
git add .
git commit -m "feat: implement assignment features"

# Push to GitHub
git push -u origin feature/assignment-name

# Create Pull Request on GitHub
# After review, merge to main branch
```

### Daily Workflow
```bash
# Update local main branch
git pull origin main

# Create feature branch
git checkout -b feature/new-feature

# Make changes
git add modified-files
git commit -m "descriptive commit message"

# Push changes
git push origin feature/new-feature
```

## CI/CD Pipeline Setup

### GitHub Actions Configuration
Create `.github/workflows/` directory for CI/CD workflows:

```yaml
# Example: Node.js Application Workflow
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build
```

### CI/CD Best Practices
- ✅ Automatic builds on push/PR
- ✅ Run tests before merge
- ✅ Linting and code quality checks
- ✅ Automated deployment to staging
- ✅ Production deployment with approval
- ✅ Build artifacts and logs retention

## Deployment Considerations

### For Local Development
- Each assignment can run independently
- Follow individual README setup instructions
- Use development servers (Vite, Express dev mode)

### For Production/Staging
- Build frontend for static serving
- Run optimized backend instances
- Use environment variables for configuration
- Implement proper error handling and logging
- Set up monitoring and alerts

## Commit Message Guidelines

```
Format: <type>(<scope>): <subject>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (no logic change)
- refactor: Code refactoring
- perf: Performance improvements
- test: Test additions/updates
- chore: Build/dependency updates
- ci: CI/CD configuration

Example:
feat(ASS7): add feedback submission feature
fix(ASS6): resolve authentication middleware issue
docs(README): update installation instructions
```

## Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Implement Changes**
   - Write clean, well-documented code
   - Follow project structure conventions
   - Test thoroughly before committing

3. **Commit Changes**
   ```bash
   git commit -m "feat: description of changes"
   ```

4. **Push to GitHub**
   ```bash
   git push origin feature/your-feature
   ```

5. **Create Pull Request**
   - Provide clear description of changes
   - Link related issues
   - Request code review from team members

6. **Code Review & Merge**
   - Address review comments
   - Ensure CI/CD pipeline passes
   - Merge to main branch

## Resources & References

### Git & GitHub
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

### DevOps & CI/CD
- [CI/CD Best Practices](https://www.atlassian.com/continuous-delivery)
- [GitHub Actions Workflows](https://docs.github.com/en/actions/learn-github-actions)
- [DevOps Fundamentals](https://www.atlassian.com/devops)

### Web Development
- [Node.js Documentation](https://nodejs.org/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## Troubleshooting

### Git Issues
- **Merge Conflicts:** Use `git status` to identify conflicts, resolve manually
- **Lost Commits:** Use `git reflog` to recover
- **Push Rejected:** Pull latest changes with `git pull` before pushing

### Build Issues
- **npm install fails:** Delete `node_modules` and `package-lock.json`, reinstall
- **Port already in use:** Change port in config or kill existing process
- **Module not found:** Verify all dependencies are installed

### Deployment Issues
- **Environment Variables:** Ensure .env files are configured
- **CORS Errors:** Check backend CORS middleware settings
- **Database Connection:** Verify connection string and credentials

## Contact & Support

For questions or issues related to this project:
- Review individual assignment README files
- Check assignment-specific documentation
- Consult the troubleshooting sections
- Review commit history for implementation patterns

## License

This is a college coursework project created for educational purposes.

## Project Metadata

- **Course:** DevOps & Full-Stack Development
- **Institution:** College/University
- **Duration:** Multiple assignments across semester
- **Status:** Active development and learning

---

**Last Updated:** 2026-07-14  
**Repository:** GitHub (ASS1-DEVops)  
**Maintained by:** College Student
