// Product database management using LocalStorage for persistence on GitHub Pages
let productDB = [];

async function initProducts() {
    // 1. Try to get from API (Vercel KV)
    try {
        const response = await fetch('/api/products');
        if (response.ok) {
            productDB = await response.json();
            // Update local cache
            localStorage.setItem('pos_products', JSON.stringify(productDB));
            console.log("Products synced from KV");
        } else {
            throw new Error("API response not ok");
        }
    } catch (error) {
        console.warn("Failed to sync from KV, using local storage/fallback:", error);
        // 2. Fallback to LocalStorage
        const localProducts = localStorage.getItem('pos_products');
        if (localProducts) {
            productDB = JSON.parse(localProducts);
        } else {
            // 3. Fallback to static JSON
            try {
                const response = await fetch('assets/json/products.json');
                productDB = await response.json();
                localStorage.setItem('pos_products', JSON.stringify(productDB));
            } catch (err) {
                console.error("Critical: Failed to load products:", err);
            }
        }
    }
}

async function saveProducts(products) {
    productDB = products;
    // 1. Perspective save to LocalStorage (Immediate feedback)
    localStorage.setItem('pos_products', JSON.stringify(products));

    // 2. Sync to KV API
    try {
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(products)
        });
        if (!response.ok) console.error("API Save failed");
    } catch (error) {
        console.error("Failed to sync to KV:", error);
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem('pos_cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('pos_cart', JSON.stringify(cart));
}

async function addToCart(barcode) {
    // Refresh DB to ensure consistency
    await initProducts();
    const product = productDB.find(p => p.barcode === barcode);
    if (!product) {
        alert("Product not found: " + barcode);
        return false;
    }

    const cart = getCart();
    const existing = cart.find(item => item.barcode === barcode);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart(cart);
    showLastScanned(barcode);
    showNotification("Added: " + product.name);
    return true;
}

function showLastScanned(barcode) {
    const item = getCart().find(i => i.barcode === barcode);
    const container = document.getElementById('last-scanned');
    if (!container) return;

    container.style.display = 'block';
    document.getElementById('last-name').innerText = item.name;
    document.getElementById('last-price').innerText = formatIDR(item.price);

    // Change QTY to editable input
    const qtyContainer = document.getElementById('last-qty');
    qtyContainer.style.background = 'none';
    qtyContainer.style.padding = '0';
    qtyContainer.innerHTML = `
        <input type="number" 
               value="${item.qty}" 
               min="1" 
               style="width: 50px; text-align: center; background: var(--primary); border: none; border-radius: 20px; padding: 5px; font-size: 0.8rem; color: white;" 
               onchange="updateLastScannedQty('${barcode}', this.value)">
    `;
}

function updateLastScannedQty(barcode, newQty) {
    const cart = getCart();
    const item = cart.find(i => i.barcode === barcode);
    if (item) {
        item.qty = parseInt(newQty) || 1;
        saveCart(cart);
        // If we are on the cart page, re-render it
        if (typeof renderCart === 'function') renderCart();
        showNotification("Quantity updated");
    }
}

function formatIDR(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(amount);
}

function showNotification(msg) {
    const toast = document.getElementById('notification');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (!container) return;

    const cart = getCart();
    container.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div style="font-weight: 600;">${item.name}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${formatIDR(item.price)}</div>
            </td>
            <td style="text-align: center;">
                <input type="number" class="qty-input" value="${item.qty}" min="1" onchange="updateQty(${index}, this.value)">
            </td>
            <td style="text-align: right; font-weight: 600;">
                ${formatIDR(itemTotal)}
            </td>
        `;
        container.appendChild(row);
    });

    document.getElementById('total-amount').innerText = formatIDR(total);
}

function updateQty(index, newQty) {
    const cart = getCart();
    cart[index].qty = parseInt(newQty);
    saveCart(cart);
    renderCart();
}

function clearCart() {
    if (confirm("Are you sure you want to clear the cart?")) {
        localStorage.removeItem('pos_cart');
        renderCart();
    }
}

// Global initialization
initProducts();

// Listeners for Scan Page
const addManualBtn = document.getElementById('add-manual');
if (addManualBtn) {
    addManualBtn.addEventListener('click', async () => {
        const input = document.getElementById('barcode-input');
        if (await addToCart(input.value)) {
            input.value = '';
        }
    });
}

const clearCartBtn = document.getElementById('clear-cart');
if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
}
