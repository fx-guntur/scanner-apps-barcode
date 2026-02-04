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

## 🛠️ How to Deploy to GitHub Pages

1.  **Create a Repo**: Create a new repository on GitHub (e.g., `toko-puspa-pos`).
2.  **Upload Files**: Push all the files in this directory to your repository.
3.  **Enable Pages**:
    *   Go to **Settings** > **Pages**.
    *   Select `main` branch and `/ (root)` folder.
    *   Click **Save**.
4.  **Use It**: Open the generated URL on your phone's browser, then select **"Add to Home Screen"** to install it.

## 📝 Notes

-   **HTTPS Required**: The barcode scanner (camera access) requires an HTTPS connection, which GitHub Pages provides automatically.
-   **Browser Storage**: Product additions and deletions are saved in the user's browser `LocalStorage`. Clearing browser cache may reset the product list to the state in `products.json`.

---
Developed with ❤️ for **Toko Puspa**.
