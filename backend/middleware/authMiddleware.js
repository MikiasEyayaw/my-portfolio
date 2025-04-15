import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token and attach the decoded user data to the request
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded.id contains the user ID
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

export default verifyToken;
