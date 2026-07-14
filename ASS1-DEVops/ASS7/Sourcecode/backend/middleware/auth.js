const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or invalid' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const secret = process.env.JWT_SECRET || 'student-feedback-secret';
    const payload = jwt.verify(token, secret);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token invalid or expired', error });
  }
};
