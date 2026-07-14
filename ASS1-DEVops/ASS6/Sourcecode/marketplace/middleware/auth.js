// Authentication middleware to check if user is logged in
const authMiddleware = (req, res, next) => {
  if (req.session.userId) {
    // User is logged in
    req.userId = req.session.userId;
    req.username = req.session.username;
    req.isAuthenticated = true;
    next();
  } else {
    // User is not logged in
    req.isAuthenticated = false;
    next();
  }
};

// Middleware to require authentication
const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'You must be logged in to perform this action' });
  }
  req.userId = req.session.userId;
  req.username = req.session.username;
  next();
};

module.exports = {
  authMiddleware,
  requireAuth
};
