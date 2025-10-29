# Mailchimp Newsletter Setup Guide

## Step 1: Create a Mailchimp Account

1. Go to https://mailchimp.com/
2. Click "Sign Up Free"
3. Fill in your details and verify your email
4. Complete the onboarding process

## Step 2: Create an Audience (Email List)

1. In your Mailchimp dashboard, go to **Audience** → **Audience dashboard**
2. Click **Create Audience** (or you might already have a default one)
3. Fill in the required details:
   - Audience name: "Pan Productions Newsletter Subscribers"
   - Default From email: panproductionsuk@gmail.com
   - Default From name: Pan Productions
4. Click **Save**

## Step 3: Get Your Audience ID

1. In Audience dashboard, click **Settings** → **Audience name and defaults**
2. Scroll down to find **Audience ID** (it looks like: `a1b2c3d4e5`)
3. Copy this ID - you'll need it later

## Step 4: Create an API Key

1. Click your profile icon (top right) → **Account & billing**
2. Click **Extras** → **API keys**
3. Scroll down to **Your API keys** section
4. Click **Create A Key**
5. Give it a name: "Pan Productions Website"
6. Copy the API key (it looks like: `abc123def456ghi789-us12`)
7. **IMPORTANT**: Save this key somewhere safe - you won't be able to see it again!

## Step 5: Find Your Server Prefix

Your API key ends with a server prefix (e.g., `-us12`, `-us21`, `-us1`)
- If your API key is: `abc123def456ghi789-us12`
- Your server prefix is: `us12`

## Step 6: Add to Vercel Environment Variables

1. Go to https://vercel.com/
2. Select your project: **pan-stage-revival**
3. Go to **Settings** → **Environment Variables**
4. Add these three variables:

   **Variable 1:**
   - Key: `MAILCHIMP_API_KEY`
   - Value: Your full API key (e.g., `abc123def456ghi789-us12`)
   - Environments: Select all (Production, Preview, Development)

   **Variable 2:**
   - Key: `MAILCHIMP_AUDIENCE_ID`
   - Value: Your Audience ID (e.g., `a1b2c3d4e5`)
   - Environments: Select all (Production, Preview, Development)

   **Variable 3:**
   - Key: `MAILCHIMP_SERVER_PREFIX`
   - Value: Your server prefix (e.g., `us12`)
   - Environments: Select all (Production, Preview, Development)

5. Click **Save** for each variable

## Step 7: Redeploy Your Site

After adding the environment variables, you need to redeploy:

1. In Vercel, go to **Deployments**
2. Click the three dots (...) on your latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

## Step 8: Test Your Newsletter

1. Go to your website
2. Scroll to the newsletter section
3. Enter a test email and subscribe
4. Check your Mailchimp dashboard:
   - Go to **Audience** → **All contacts**
   - You should see your test email added!

## Managing Subscribers

To view and manage your subscribers:

1. Log into Mailchimp
2. Go to **Audience** → **All contacts**
3. Here you can:
   - View all subscribers
   - Export to CSV
   - Send campaigns
   - Segment your audience
   - View statistics

## Benefits of Mailchimp Free Tier

✅ Up to 500 subscribers (free)
✅ 1,000 email sends per month
✅ Professional email templates
✅ Basic automation
✅ Signup forms
✅ Analytics and reports
✅ Unsubscribe management
✅ Mobile app

## Need Help?

If you encounter any issues:
1. Check that all 3 environment variables are set correctly in Vercel
2. Make sure you redeployed after adding variables
3. Check the browser console for any error messages
4. Verify your API key is active in Mailchimp

## What Changed in Your Code

✅ Created `/api/mailchimp-subscribe.js` - Serverless function to handle Mailchimp API
✅ Updated `/src/lib/newsletter.ts` - Now calls Mailchimp endpoint
✅ Newsletter form already works - no changes needed to the UI!

Your newsletter is ready to use once you complete the setup steps above!
