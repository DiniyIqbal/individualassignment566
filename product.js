const products = [
    { id: 1, name: "Asus Tuf Gaming A18", price: 3099, category: "Laptop" },
    { id: 2, name: "ROG Zephyrus G16", price: 9099, category: "Laptop" },
    { id: 3, name: "Iphone 17 Pro Max", price: 5999, category: "Smartphone" },
    { id: 4, name: "Samsung S25", price: 3099, category: "Smartphone" },
    { id: 5, name: "Steam Deck OLED", price: 3599, category: "Portable Game Console" },
    { id: 6, name: "PlayStation® Portable", price: 1099, category: "Portable Game Console" },
];

function renderProducts() {
    const tableBody = document.getElementById("products-table-body");
    products.forEach(product => {
        const row = 
        `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>RM${product.price}</td>
            <td>${product.category}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

 