// src/app/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password
      },
    });

    // Set up email data
    let mailOptions = {
      from: email,
      to: 'sylviamullinsdev@gmail.com',
      subject: `Contact form submission from ${name}`,
      text: message,
      html: `<p>You have a new contact form submission</p><br>
             <p><strong>Name: </strong> ${name} </p><br>
             <p><strong>Email: </strong> ${email} </p><br>
             <p><strong>Message: </strong> ${message} </p><br>`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
