// Load environment variables
require('dotenv').config();
const nodemailer = require('nodemailer');

// 1️⃣ Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// 2️⃣ Email options
const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'tp.143@yahoo.com', // Recipient
    subject: 'Testing Email',
    text: 'Hello! This is a test email from Node.js.'
};

// 3️⃣ Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
