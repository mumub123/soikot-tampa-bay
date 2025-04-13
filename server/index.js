import express from 'express';
import cors from 'cors';
import mailchimp from '@mailchimp/mailchimp_marketing';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX // e.g., 'us1'
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Create a campaign
    const campaign = await mailchimp.campaigns.create({
      type: 'regular',
      recipients: {
        list_id: process.env.MAILCHIMP_LIST_ID,
      },
      settings: {
        subject_line: `Contact Form: ${subject}`,
        from_name: name,
        reply_to: email,
        title: `Contact Form Submission from ${name}`,
      },
    });

    // Set the campaign content
    await mailchimp.campaigns.setContent(campaign.id, {
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    // Send the campaign
    await mailchimp.campaigns.send(campaign.id);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Mailchimp error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 