# Assignment 5.2 - EJS Web Application

## Overview
A full-stack web application using Express.js with EJS templating engine for dynamic HTML rendering and a JSON data backend.

## Project Structure
```
ASS5_2/
├── Outputscreenshots/     # Application screenshots
└── Sourcecode/
    ├── package.json       # Dependencies (includes EJS)
    ├── server.js          # Express server
    ├── data/
    │   └── inquiries.json # Data storage
    ├── public/
    │   ├── css/
    │   │   └── style.css  # Stylesheets
    │   └── js/
    │       └── site.js    # Frontend JavaScript
    └── views/
        ├── home.ejs       # Home page template
        ├── contact.ejs    # Contact form page
        ├── admissions.ejs # Admissions page
        ├── faculty.ejs    # Faculty information
        ├── programs.ejs   # Programs listing
        └── partials/
            ├── header.ejs # Reusable header
            ├── footer.ejs # Reusable footer
            └── application-modal.ejs # Modal component
```

## Features
- Dynamic HTML rendering with EJS templating
- Modular view components with partials
- JSON-based data management
- Contact and inquiry form handling
- Reusable UI components

## Technology Stack
- **Backend:** Node.js, Express.js
- **Templating:** EJS (Embedded JavaScript Templating)
- **Data:** JSON files
- **Frontend:** CSS3, JavaScript (Vanilla)

## Installation & Setup
1. Navigate to the `Sourcecode` directory
2. Install dependencies: `npm install`
3. Start the server: `npm start` or `node server.js`
4. Open your browser to the provided URL (typically `http://localhost:3000`)

## Available Routes
- `/` - Home page
- `/contact` - Contact form
- `/admissions` - Admissions information
- `/faculty` - Faculty listing
- `/programs` - Programs overview

## Usage
- Navigate through different pages using the header/navigation
- Fill out contact or application forms
- Submit inquiries which are saved to `inquiries.json`
- View submitted data (functionality depends on implementation)

## Output
Screenshots showing the application interface and functionality are available in the `Outputscreenshots` directory.

## Notes
- EJS templates are rendered on the server and sent as HTML to the client
- Partial templates are reused across multiple pages for DRY principles
- Data is persisted in JSON format for simplicity
