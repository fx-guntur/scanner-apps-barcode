# Toko Puspa - Static POS & Barcode Scanner

A premium, mobile-friendly static Point of Sale (POS) application designed to be hosted on GitHub Pages. It features real-time barcode scanning, dynamic product management, and PDF receipt generation.

## 🚀 Key Features

-   **Vercel KV Storage**: Products are now stored centrally in a database, allowing you to access the same product list from any device.
-   **Product Catalog**: A beautiful restaurant-style menu for customers to view your products.
-   **Live Barcode Scanner**: Uses the device's camera to scan barcodes directly in the browser.
-   **PWA (Progressive Web App)**: Can be installed on Android, iOS, and Desktop. Supports basic offline access.
-   **Dynamic Product Management**: Add, update, or delete products directly from the UI.
-   **Cart System**: Add scanned items to a cart, adjust quantities, and see real-time price updates.
-   **PDF Export**: Export the final bill as a professional-looking PDF.

## 📦 Project Structure

```text
├── assets/
│   ├── css/
│   │   └── style.css      # Core styles & design tokens
│   ├── js/
│   │   ├── app.js         # Core business logic & Storage management
│   │   ├── scanner.js     # Barcode scanner implementation
│   │   └── pdf.js         # PDF generation logic
│   ├── json/
│   │   └── products.json  # Initial product database (seed data)
│   └── icons/             # PWA icons
├── index.html             # Main Scanning Dashboard
├── cart.html              # Bill Review & Checkout page
├── products.html          # Product Management page
├── manifest.json          # PWA Manifest
├── sw.js                  # Service Worker for offline support
└── README.md              # Documentation
```

## 🛠️ How to Deploy to Vercel (Recommended)

1.  **Login to Vercel**: Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2.  **Add New Project**: Click **"Add New"** > **"Project"**.
3.  **Import Repo**: Select your `scanner-apps-barcode` repository.
4.  **Framework Preset**: Ensure it's set to **"Other"**.
5.  **Deploy**: Click the **Deploy** button.
6.  **Set up KV Storage (CRITICAL)**:
    -   After deployment, go to your project dashboard on Vercel.
    -   Click the **"Storage"** tab at the top.
    -   Click **"Create Database"** and select **"KV (Redis)"**.
    -   Accept the terms and click **"Create"**.
    -   Once created, click **"Connect Project"** and select your current project.
    -   Vercel will add environment variables (like `KV_URL`).
    -   **Redeploy** your app (Go to "Deployments" > "Redeploy") so the app can see these new variables.

## 🍽️ Catalog Page
You can now access your product catalog at `/catalog.html`. It's designed to look like a premium restaurant menu, perfect for showing to customers.

## ⚠️ Troubleshooting

### 1. `NotAllowedError: Permission denied`
- **HTTPS is Required**: Modern browsers block camera access on non-secure (`http://`) sites. Use `https://`.
- **Site Permissions**: Click the **lock icon** 🔒 and set **Camera** to "Allow".

### 2. `NotReadableError: Could not start video source`
- **Camera in Use**: Make sure no other apps (Zoom, Teams, etc.) or other browser tabs are using the camera.
- **Hardware Block**: Check if your laptop has a physical privacy slider over the camera.
- **Restart Browser**: Sometimes the hardware link gets stuck; restarting your browser or phone often fixes this.
- **System Permissions**: Ensure your OS (Windows/Android/iOS) has given the browser app permission to use the camera.

---
Developed with ❤️ for **Toko Puspa**.
