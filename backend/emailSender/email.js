// Import required packages
import express from 'express';          // Express framework for server
import nodemailer from 'nodemailer';    // Used to send emails
import cors from 'cors';                // To allow cross-origin requests
import dotenv from 'dotenv';            // To load environment variables from .env file

// Load environment variables (like email & password)
dotenv.config();

const emailHandler = express(); // Create an Express application

// Middleware to parse JSON request body
emailHandler.use(express.json()); // Ensures the request body is parsed as JSON

// --- ROUTE TO HANDLE CONTACT FORM ---
emailHandler.post('/api/contact', async (req, res) => {
  // Destructure form data from the request body
  const { firstName: fname, lastName: lname, email: userEmail, message } = req.body;
  // Setup Nodemailer transporter (you can replace 'gmail' with other services or SMTP)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail service to send emails
    auth: {
      user: process.env.EMAIL_USER,  // Email sender address (from .env)
      pass: process.env.EMAIL_PASS   // Email password or App Password (from .env)
    }
  });

  // Define the email details
  const mailOptions = {
    from: userEmail,  // The sender’s email (from form input)
    to: process.env.EMAIL_USER,  // Your own email to receive the contact form submission
    subject: `New Contact Form Submission from ${fname} ${lname}`, // Subject line
    text: `Email: ${userEmail}\n\nMessage:\n${message}` // Email body (plain text)
  };

  try {
    // Try sending the email using transporter
    await transporter.sendMail(mailOptions);

    // If successful, send a success response back to frontend
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    // If email sending fails, log the error and send error response
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Email failed to send.' });
  }
});

// Export the email handler module
export default emailHandler;
