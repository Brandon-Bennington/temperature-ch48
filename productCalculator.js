let products = [];
let taxRate = parseFloat(document.getElementById('tax').value);

function addProduct() {
    const product = document.getElementById('product').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const tax = parseFloat(document.getElementById('tax').value);

    if (!product || isNaN(price) || isNaN(quantity)) {
        alert('Please enter valid product details.');
        return;
    }

    products.push({ product, price, quantity, tax });
    displayProducts();
    calculateTotal();
}

function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.product} - $${item.price.toFixed(2)} x ${item.quantity} <button onclick="deleteProduct(${index})">Delete</button>`;
        productList.appendChild(li);
    });
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    products.forEach(item => {
        const productTotal = item.price * item.quantity;
        const taxAmount = productTotal * (item.tax / 100);
        total += productTotal + taxAmount;
    });

    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}

function clearProducts() {
    products = [];
    displayProducts();
    calculateTotal();
}
