# Toko Puspa - Static POS & Barcode Scanner

A premium, mobile-friendly static Point of Sale (POS) application designed to be hosted on GitHub Pages. It features real-time barcode scanning, dynamic product management, and PDF receipt generation.

## 🚀 Key Features

-   **Live Barcode Scanner**: Uses the device's camera to scan barcodes directly in the browser (powered by `html5-qrcode`).
-   **PWA (Progressive Web App)**: Can be installed on Android, iOS, and Desktop. Supports basic offline access.
-   **Dynamic Product Management**: Add, update, or delete products directly from the UI. Data is persisted in the browser's `LocalStorage`.
-   **Cart System**: Add scanned items to a cart, adjust quantities, and see real-time price updates.
-   **PDF Export**: Export the final bill as a professional-looking PDF (powered by `html2pdf.js`).
-   **Premium UI**: Modern dark-mode design with glassmorphism and smooth micro-animations.

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
5.  **Deploy**: Click the **Deploy** button. Vercel will provide a secure HTTPS link.

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
