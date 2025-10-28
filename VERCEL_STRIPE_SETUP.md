# 🚀 Deploying Stripe Payment to Vercel

Your Stripe integration is now ready for production deployment on Vercel!

## ✅ What's Been Set Up

1. **Serverless API Function** at `/api/create-checkout-session.js`
2. **Auto-detection** of local vs production environments
3. **Automatic URL handling** - works on any domain

---

## 🔧 Setup Steps for Vercel

### 1. Add Stripe Secret Key to Vercel

Go to your Vercel project dashboard:

1. Navigate to your project: https://vercel.com/serifenuruysal/pan-stage-revival
2. Go to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name:** `STRIPE_SECRET_KEY`
   - **Value:** `sk_test_51SN92i06FZM52ogNBWbbcTko1SBWgjhwF0vzqEfq6MRUc4rhsG29FJpbzTdowEolMw2hzXqGSSVRsWFo0Rv3igIb00bDtKhHSR`
   - **Environments:** Check all (Production, Preview, Development)
4. Click **Save**

### 2. Deploy Your Changes

```bash
git add .
git commit -m "Add Stripe serverless function for Vercel"
git push
```

Vercel will automatically deploy your changes.

---

## 🧪 How It Works

### Local Development (localhost)
- Frontend calls: `http://localhost:4242/create-checkout-session`
- Uses your local Node.js server

### Production (Vercel)
- Frontend calls: `/api/create-checkout-session`
- Uses Vercel serverless function
- Auto-detects your domain from the request

---

## 🎯 Testing on Production

Once deployed:

1. Go to: https://pan-stage-revival.vercel.app
2. Click the **"Test Buy Ticket"** button
3. You'll be redirected to Stripe's checkout page
4. Use test card: `4242 4242 4242 4242`
5. Complete payment
6. You'll return to: `https://pan-stage-revival.vercel.app/payment-success`

---

## 🔒 Security Notes

✅ **Secret key** is stored securely in Vercel environment variables  
✅ **Never exposed** to the frontend  
✅ **Serverless function** runs on Vercel's secure servers  
✅ **HTTPS** automatically enabled by Vercel  

---

## 🐛 Troubleshooting

### "404: NOT_FOUND" Error

**Cause:** Stripe secret key not set in Vercel  
**Fix:** Follow Step 1 above to add `STRIPE_SECRET_KEY` to environment variables

### "Failed to create checkout session"

**Cause:** API function not deployed  
**Fix:** 
```bash
git push
```
Wait for Vercel deployment to complete

### Payments work locally but not on Vercel

**Cause:** Environment variable not set  
**Fix:** Check Vercel dashboard → Settings → Environment Variables

---

## 📝 Files Added/Modified

✅ `/api/create-checkout-session.js` - Vercel serverless function  
✅ `/vercel.json` - Vercel configuration  
✅ `/src/lib/stripe.ts` - Auto-detect environment  

---

## 🎭 Ready to Go Live?

When ready to accept real payments:

1. Switch Stripe to **Live Mode** in dashboard
2. Get your **live secret key** (starts with `sk_live_...`)
3. Update `STRIPE_SECRET_KEY` in Vercel to use live key
4. Test with a real card (will charge real money!)

---

**Happy deploying! 🎉**
