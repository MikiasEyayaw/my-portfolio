import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
import emailHandler from './emailSender/email.js';
import connectDB from './myPortfolioDatabase/db.js';
import router from './routes/projectRoutes.js';
import authRouter from './routes/auth.js';
import verifyToken from './middleware/authMiddleware.js';
const app=express();
const port=process.env.PORT

app.use(cors());
app.use(express.json());
// Simulate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' folder (CV included)
app.use('/files', express.static(path.join(__dirname, 'public')));

// Serve static files (images, downloads) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

 
//Email sende
app.use(emailHandler);
app.use(express.json());
// Connect to MongoDB
connectDB();

// Routes
app.use('/api/projects', router);
app.use('/api/auth',authRouter);

// Example of a protected route
app.get('/api/profile', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Protected profile data', user: req.user });
  });
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});