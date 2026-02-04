async function onScanSuccess(decodedText, decodedResult) {
    // Stop the scanner momentarily to prevent multiple scans of same item
    html5QrcodeScanner.pause();

    // Add to cart
    if (await addToCart(decodedText)) {
        // Resume after 1.5 seconds delay
        setTimeout(() => {
            html5QrcodeScanner.resume();
        }, 1500);
    } else {
        // If product not found, just resume
        html5QrcodeScanner.resume();
    }
}

function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    {
        fps: 10,
        qrbox: { width: 250, height: 150 },
        aspectRatio: 1.0
    },
    /* verbose= */ false
);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);
