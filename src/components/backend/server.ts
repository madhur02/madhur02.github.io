// Node.js backend (Express) example
import express from 'express';
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/api/send-appointment-email', async (req, res) => {
  const { name, email, phone, company, service, date, time, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com', // Replace with your email
      pass: 'your-app-password',    // Use app password if using Gmail
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'samarthkoshal@gmail.com',
    subject: 'Customer query - Suryansham Mining',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Service: ${service}
      Preferred Date: ${date}
      Preferred Time: ${time}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).send({ success: false });
  }
});
