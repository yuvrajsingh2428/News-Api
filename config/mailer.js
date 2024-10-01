import nodemailer from "nodemailer";

import dotenv from 'dotenv';

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('Error connecting to SMTP server:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});

export const sendEmail = async (toMail, subject, body) => {
  const info = await transporter.sendMail({
    from: process.env.FROM_EMAIL, // sender address
    to: toMail, // list of receivers
    subject: subject, // Subject line
    html: body, // html body
  });
  return info; // Optional: Return info for debugging
};