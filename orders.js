const products = [
    { id: 1, name: "Asus Tuf Gaming A18", price: 3099, category: "Laptop", image: "images/t4.png" },
    { id: 2, name: "ROG Zephyrus G16", price: 9099, category: "Laptop", image: "images/z3.png" },
    { id: 3, name: "Iphone 17 Pro Max", price: 5999, category: "Smartphone", image: "images/i2.png" },
    { id: 4, name: "Samsung S25", price: 3099, category: "Smartphone", image: "images/s2.png" },
    { id: 5, name: "Steam Deck OLED", price: 3599, category: "Portable Game Console", image: "images/d2.png" },
    { id: 6, name: "PlayStation® Portable", price: 1099, category: "Portable Game Console", image: "images/p2.png" }
];

let cart = [];

function renderProducts() {
    console.log('Rendering products...'); 
    const grid = document.getElementById('productGrid');
    if (!grid) {
        console.error('Product grid element not found!');
        return;
    }
    grid.innerHTML = products.map(product => `
        <div class="bg-white rounded-lg shadow-md product-card overflow-hidden">
            <img src="${product.image}" class="w-full h-32 object-cover" alt="${product.name}" onerror="this.style.display='none'; console.log('Image failed to load: ${product.image}')">
            <div class="p-4">
                <h6 class="font-semibold text-sm">${product.name}</h6>
                <p class="text-gray-500 text-xs">${product.category}</p>
                <p class="font-bold text-blue-600 text-sm">RM${product.price}</p>
                <button onclick="addToCart(${product.id})" class="w-full bg-blue-500 hover:bg-yellow-600 text-white py-2 rounded-md text-sm mt-2">Add</button>
            </div>
        </div>
    `).join('');
    console.log('Products rendered successfully.'); // Confirm completion
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

function renderCart() {
    const cartDiv = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p class="text-white">Your cart is empty.</p>';
        document.getElementById('checkoutBtn').disabled = true;
    } else {
        cartDiv.innerHTML = `
            <table class="w-full table-auto border-collapse">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-2 py-1 text-left text-sm">Product</th>
                        <th class="px-2 py-1 text-left text-sm">Qty</th>
                        <th class="px-2 py-1 text-left text-sm">Price</th>
                        <th class="px-2 py-1 text-left text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map(item => `
                        <tr>
                            <td class="px-2 py-1 text-sm text-white">${item.name}</td>
                            <td class="px-2 py-3 text-sm">
                                <button onclick="updateQuantity(${item.id}, -1)" class="bg-gray-100 hover:bg-red-500 px-2 py-1 rounded text-xs">-</button>
                                ${item.quantity}
                                <button onclick="updateQuantity(${item.id}, 1)" class="bg-gray-100 hover:bg-blue-500 px-2 py-1 rounded text-xs">+</button>
                            </td>
                            <td class="px-2 py-1 text-sm">RM${item.price * item.quantity}</td>
                            <td class="px-2 py-1 text-sm"><button onclick="removeFromCart(${item.id})" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs">Remove</button></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        document.getElementById('checkoutBtn').disabled = false;
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('totalPrice').textContent = total;
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            renderCart();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    document.getElementById('checkoutModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

function processPayment() {
    const form = document.getElementById('checkoutForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const paymentMethod = document.getElementById('paymentMethod').value;
    if (paymentMethod === 'credit_card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        if (!cardNumber || !expiry || !cvv) {
            alert("Please fill in all credit card details.");
            return;
        }
        alert("Credit card payment simulated. (In real app, process securely.)");
    } else {
        alert(`Payment via ${paymentMethod} simulated. Order placed!`);
    }
    
    cart = [];
    renderCart();
    closeModal();
    form.reset();
    document.getElementById('creditCardFields').classList.add('hidden');
}

document.getElementById('paymentMethod').addEventListener('change', function() {
    const fields = document.getElementById('creditCardFields');
    if (this.value === 'credit_card') {
        fields.classList.remove('hidden');
    } else {
        fields.classList.add('hidden');
    }
});

// Initialize product purchase
renderProducts();