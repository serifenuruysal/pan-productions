const crypto = require('crypto');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ 
        success: false,
        message: 'Please provide a valid email address' 
      });
    }

    // Get Mailchimp credentials from environment variables
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., "us1", "us2", etc.

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
      console.error('Mailchimp credentials not configured');
      return res.status(500).json({
        success: false,
        message: 'Newsletter service not configured. Please contact support.',
      });
    }

    // Create subscriber hash for Mailchimp (lowercase email MD5 hash)
    const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

    // Call Mailchimp API to add/update subscriber
    const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}`;
    
    const mailchimpResponse = await fetch(mailchimpUrl, {
      method: 'PUT', // PUT will create or update
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed', // Subscribe new members
        status: 'subscribed', // Update existing members to subscribed
      }),
    });

    const data = await mailchimpResponse.json();

    if (!mailchimpResponse.ok) {
      // Handle specific Mailchimp errors
      if (data.title === 'Member Exists') {
        return res.status(200).json({
          success: true,
          message: 'You are already subscribed to our newsletter!',
        });
      }
      
      console.error('Mailchimp error:', data);
      throw new Error(data.detail || data.title || 'Failed to subscribe');
    }

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to our newsletter! 🎭'
    });

  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to subscribe. Please try again later.'
    });
  }
};
