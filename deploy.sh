#!/bin/bash

# Netlify Deployment Script
# This script automates the deployment process

echo "🏀 R&D Hoops - Netlify Deployment"
echo "================================"
echo ""

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
    echo "✅ Netlify CLI installed"
    echo ""
fi

# Check if user is logged in
if ! netlify status &> /dev/null; then
    echo "🔐 You need to log in to Netlify first."
    echo "   Running: netlify login"
    echo ""
    netlify login
    echo ""
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful"
echo ""

# Deploy to production
echo "🚀 Deploying to Netlify..."
netlify deploy --prod

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "Your site is now live! 🎉"
    netlify status
else
    echo "❌ Deployment failed. Check the errors above."
    exit 1
fi

