import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../authModal/User.js';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables
const authRouter = express.Router();
authRouter.use(express.json());
// Sign-Up Route
authRouter.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists.' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Save user to the database
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Signup failed', error: error.message });
  }
});

// Sign-In Route
authRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    // Compare entered password with the hashed password in the database
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials.' });

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Send response with token
    res.status(200).json({ token, message: 'Signin successful' });
  } catch (error) {
    res.status(500).json({ message: 'Signin failed', error: error.message });
  }
});

export default authRouter;
