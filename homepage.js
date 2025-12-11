const usersData = [
    { id: 1, name: 'Mohd Nasir', email: 'nasir99@gmail.com', joined: '2025-01-11' },
    { id: 2, name: 'Noorizam', email: 'noorizam@gmail.com', joined: '2025-04-10' },
    { id: 3, name: 'Zarul', email: 'zarul22@gmail.com', joined: '2025-05-12' },
    { id: 4, name: 'Zuhaimi', email: 'zuhaimi33@gmail.com', joined: '2025-05-10' },
    { id: 5, name: 'Malik', email: 'malik88@gmail.com', joined: '2025-05-12' },
    { id: 6, name: 'Roslan', email: 'roslan11@gmail.com', joined: '2025-07-18' },
    
];
const productsData = [
    { name: 'Asus Tuf Gaming A18', category: 'Laptop', price: 3099, purchased: 45 },
    { name: 'ROG Zephyrus G16', category: 'Laptop', price: 9099, purchased: 20 },
    { name: 'Iphone 17 Pro Max', category: 'Smartphone', price: 5999, purchased: 60 },
    { name: 'Samsung S25', category: 'Smartphone', price: 3099, purchased: 80 },
    { name: 'Steam Deck OLED', category: 'Portable Game Console', price: 3599, purchased: 35 },
    { name: 'PlayStation® Portable', category: 'Portable Game Console', price: 1099, purchased: 100 },
];
const shippingData = [
    { orderId: 'ORD001', product: 'Asus Tuf Gaming A18', status: 'Shipped', tracking: 'TRK123456' },
    { orderId: 'ORD002', product: 'ROG Zephyrus G16', status: 'In Transit', tracking: 'TRK789012' },
    { orderId: 'ORD003', product: 'Iphone 17 Pro Max', status: 'Delivered', tracking: 'TRK345678' },
    { orderId: 'ORD004', product: 'Samsung S25', status: 'Pending', tracking: 'N/A' },
    { orderId: 'ORD005', product: 'Steam Deck OLED', status: 'Shipped', tracking: 'TRK567890' },
    { orderId: 'ORD006', product: 'PlayStation® Portable', status: 'In Transit', tracking: 'TRK012345' },
    
];


const productNames = productsData.map(product => product.name);
const purchasedQuantities = productsData.map(product => product.purchased);


const ctx = document.getElementById('productsChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: productNames,
        datasets: [{
            label: 'Total Purchased',
            data: purchasedQuantities,
            backgroundColor: 'rgba(238, 246, 10, 0.5)',
            borderColor: 'rgba(193, 242, 16, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, // Added for mobile responsiveness
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantity Purchased'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Product Name'
                }
            }
        }
    }
});

usersData.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="px-3 py-2">${user.id}</td>
        <td class="px-3 py-2 whitespace-nowrap">${user.name}</td>

        <td class="px-3 py-2 max-w-[220px] truncate" title="${user.email}">
            ${user.email}
        </td>

        <td class="px-3 py-2 whitespace-nowrap">${user.joined}</td>
    `;
    usersTableBody.appendChild(row);
});


const productsTableBody = document.getElementById('productsTableBody');
productsData.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="px-4 py-2">${product.name}</td>
        <td class="px-4 py-2">${product.category}</td>
        <td class="px-4 py-2">RM${product.price}</td>
        <td class="px-4 py-2">${product.purchased}</td>
    `;
    productsTableBody.appendChild(row);
});

const shippingTableBody = document.getElementById('shippingTableBody');
shippingData.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="px-4 py-2">${order.orderId}</td>
        <td class="px-4 py-2">${order.product}</td>
        <td class="px-4 py-2">${order.status}</td>
        <td class="px-4 py-2">${order.tracking}</td>
    `;
    shippingTableBody.appendChild(row);
});