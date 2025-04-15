import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import mailchimp from '@mailchimp/mailchimp_marketing';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

// Middleware
app.use(cors());
app.use(express.json());

// Email API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Soikot Contact Form <onboarding@resend.dev>',
      to: ['anusayan@yahoo.com.com'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Add subscriber to Mailchimp list
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    });

    // Send welcome email using Resend
    await resend.emails.send({
      from: 'Soikot Newsletter <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to Soikot',
      html: `
        <h2>Welcome to Soikot!</h2>
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for subscribing to our mailing list. You'll now receive updates about our events and activities.</p>
        <p>Best regards,<br>Soikot Executive Committee</p>
      `,
    });

    res.json({ success: true, message: 'Successfully subscribed to mailing list' });
  } catch (error) {
    console.error('Mailchimp error:', error);
    if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
      return res.status(400).json({ error: 'This email is already subscribed' });
    }
    res.status(500).json({ error: 'Failed to subscribe to mailing list' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
