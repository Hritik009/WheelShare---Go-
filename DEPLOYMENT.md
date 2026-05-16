# Deployment Guide for Render

## Prerequisites
- GitHub repository with your code
- Render account (free tier available)
- MongoDB Atlas database (already configured)

## Option 1: Using render.yaml (Recommended)

1. **Push your code to GitHub** including the `render.yaml` file
2. **Connect to Render:**
   - Go to [render.com](https://render.com)
   - Sign up/Login with GitHub
   - Click "New" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file

3. **Update Environment Variables:**
   - After deployment, go to each service settings
   - Update the `ALLOWED_ORIGINS` and `VITE_API_URL` with actual Render URLs

## Option 2: Manual Deployment

### Backend Deployment
1. **Create Web Service:**
   - Go to Render Dashboard
   - Click "New" → "Web Service"
   - Connect your GitHub repo
   - Configure:
     - **Name:** wheelshare-backend
     - **Environment:** Node
     - **Build Command:** `cd wheelshare-server && npm install`
     - **Start Command:** `cd wheelshare-server && npm start`

2. **Environment Variables:**
   ```
   NODE_ENV=production
   PORT=5000
   MONGO_URI=mongodb+srv://aarish098:Khan098@cluster0.zvootjk.mongodb.net/wheelshare?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=ws_prod_jwt_secret_2026_a8f3k9m2p5q7r1t4v6x8z0b3d5f7h9j2
   ADMIN_SECRET=ws_admin_bootstrap_secret_2026_k3m5p7q9r1t3v5x7z9b1d3f5h7j9l1
   ALLOWED_ORIGINS=https://your-frontend-url.onrender.com
   ```

### Frontend Deployment
1. **Create Static Site:**
   - Click "New" → "Static Site"
   - Connect your GitHub repo
   - Configure:
     - **Name:** wheelshare-frontend
     - **Build Command:** `cd wheelshare-client && npm install && npm run build`
     - **Publish Directory:** `wheelshare-client/dist`

2. **Environment Variables:**
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```

## Post-Deployment Steps

1. **Update CORS Origins:**
   - After frontend deployment, update backend's `ALLOWED_ORIGINS`
   - Add your frontend URL to the environment variable

2. **Update API URL:**
   - After backend deployment, update frontend's `VITE_API_URL`
   - Set it to your backend service URL + `/api`

3. **Test the Application:**
   - Visit your frontend URL
   - Check browser console for any CORS or API errors
   - Test user registration/login functionality

## Important Notes

- **Free Tier Limitations:** Services may sleep after 15 minutes of inactivity
- **Database:** MongoDB Atlas is already configured and ready
- **HTTPS:** Render provides HTTPS by default
- **Custom Domains:** Available on paid plans

## Troubleshooting

- **CORS Errors:** Ensure `ALLOWED_ORIGINS` includes your frontend URL
- **API Errors:** Check that `VITE_API_URL` points to correct backend URL
- **Build Failures:** Check build logs in Render dashboard
- **Database Connection:** Verify MongoDB Atlas connection string and IP whitelist

## Environment Files Summary

- **Development:** Uses `.env` files (localhost)
- **Production:** Uses Render environment variables
- **MongoDB:** Now configured for Atlas (cloud database)