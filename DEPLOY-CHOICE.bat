@echo off
echo ============================================
echo    QUICK DEPLOYMENT - CHOOSE YOUR OPTION
echo ============================================
echo.
echo OPTION 1: VERCEL (Recommended)
echo 1. Go to: https://vercel.com
echo 2. Sign up, click Add New Project
echo 3. Upload: Index.html, Messi.html, Ronaldo.html
echo.
echo OPTION 2: NETLIFY (Alternative)
echo 1. Go to: https://netlify.com  
echo 2. Sign up, click Add new site
echo 3. Deploy manually, drag files
echo.
echo OPTION 3: GITHUB PAGES (Free)
echo 1. Go to: https://github.com, create account
echo 2. Create new repository
echo 3. Upload all files, enable Pages
echo.
echo ============================================
echo YOUR FILES READY:
echo - Index.html (landing page)
echo - Messi.html (LEOMESSI10 profile)
echo - Ronaldo.html (CR7 profile)
echo ============================================
echo.
echo Which option do you want to try?
echo Press 1 for Vercel, 2 for Netlify, 3 for GitHub
echo.
set /p choice="Enter choice (1-3): "
if "%choice%"=="1" (
    echo Opening Vercel...
    start https://vercel.com
) else if "%choice%"=="2" (
    echo Opening Netlify...
    start https://netlify.com
) else if "%choice%"=="3" (
    echo Opening GitHub...
    start https://github.com
) else (
    echo Invalid choice. Opening Vercel by default...
    start https://vercel.com
)
echo.
echo Follow the on-screen instructions!
pause