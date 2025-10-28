# Contact Form Setup Guide - Resend Integration

## ✅ What's Been Done

1. Created `/api/send-contact-email.js` - Vercel serverless function
2. Added Resend package to `/api/package.json`
3. Updated Contact page to call the API endpoint

## 🚀 Setup Steps (5 minutes)

### Step 1: Create Resend Account (FREE)

1. Go to https://resend.com/signup
2. Sign up with your email
3. Verify your email address

### Step 2: Get Your API Key

1. After login, go to https://resend.com/api-keys
2. Click "Create API Key"
3. Name it "Pan Productions Contact Form"
4. Copy the API key (starts with `re_...`)

### Step 3: Add API Key to Vercel

1. Go to https://vercel.com/dashboard
2. Select your `pan-stage-revival` project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Paste your Resend API key
   - **Environment**: Select all (Production, Preview, Development)
5. Click **Save**

### Step 4: Update Email Address

Edit `/api/send-contact-email.js` line 38:
```javascript
to: ['your-email@example.com'], // Replace with your actual email
```

Change to your real email address where you want to receive contact form submissions.

### Step 5: Deploy

```bash
git add -A
git commit -m "Add Resend contact form integration"
git push
```

Vercel will automatically deploy with the new environment variable.

### Step 6: Test

1. Visit your live site contact page
2. Fill out the form and submit
3. Check your email inbox!

## 📧 Important Notes

### Free Tier Limits
- ✅ 100 emails per day
- ✅ 3,000 emails per month
- ✅ No credit card required

### Default Sender Address
- Initially uses: `onboarding@resend.dev`
- This is for testing only
- To use your own domain (e.g., `contact@panproductions.com`):
  1. Go to Resend Dashboard → Domains
  2. Add your domain and verify DNS records
  3. Update line 37 in `/api/send-contact-email.js`:
     ```javascript
     from: 'Pan Productions <contact@yourdomain.com>',
     ```

### Testing Locally

To test on localhost before deploying:

1. Create `.env` file in project root:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

2. Install dependencies:
   ```bash
   cd api
   npm install
   cd ..
   ```

3. Start dev server:
   ```bash
   npm run dev
   ```

4. Test the contact form at http://localhost:8084/contact

## 🎉 That's It!

Your contact form is now fully functional and will send emails to your inbox!

## 📝 Optional Enhancements

Later you can add:
- Email templates with better styling
- Auto-reply to user confirming receipt
- Save submissions to a database
- Spam protection with reCAPTCHA
- Email notifications to multiple team members

## 🆘 Troubleshooting

**Form not sending?**
1. Check Vercel logs for errors
2. Verify `RESEND_API_KEY` is set in Vercel
3. Make sure you deployed after adding the environment variable
4. Check Resend dashboard for sending logs

**Not receiving emails?**
1. Check spam folder
2. Verify email address in `/api/send-contact-email.js`
3. Check Resend dashboard → Emails to see delivery status
