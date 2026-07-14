const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// ========== MIDDLEWARE ==========

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // 24 hours
  }
}));

// Static Files Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Import Auth Middleware
const { authMiddleware } = require('./middleware/auth');
app.use(authMiddleware);

// ========== ROUTES ==========

// API Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 Error Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ========== DATABASE CONNECTION ==========

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ASS6')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// ========== START SERVER ==========

app.listen(PORT, () => {
  console.log(`
    ╔════════════════════════════════════════╗
    ║   MARKETPLACE SERVER STARTED           ║
    ║   Server is running on port ${PORT}      ║
    ║   Visit: http://localhost:${PORT}        ║
    ╚════════════════════════════════════════╝
  `);
});

module.exports = app;
