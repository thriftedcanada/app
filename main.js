import { db, ref, push, onValue } from "./firebase.js";

// Function to fetch and display products
function fetchProducts() {
    const productsRef = ref(db, 'products');
    onValue(productsRef, (snapshot) => {
        const data = snapshot.val();
        const productList = document.getElementById("product-list");
        productList.innerHTML = ""; // Clear the list

        for (let id in data) {
            const product = data[id];
            const listItem = document.createElement("div");
            listItem.innerHTML = `
                <h3>${product.title}</h3>
                <p>Price: €${product.price}</p>
                <p>${product.description}</p>
            `;
            productList.appendChild(listItem);
        }
    });
}

// Function to add a product
function addProduct(title, price, description) {
    const productsRef = ref(db, 'products');
    push(productsRef, { title, price, description }).then(() => {
        alert("Product added successfully!");
        window.location.href = "index.html";
    });
}

// Event listener for the add-product form
if (document.getElementById("add-product-form")) {
    document.getElementById("add-product-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;
        addProduct(title, price, description);
    });
}

// Fetch products when the page loads
if (document.getElementById("product-list")) {
    fetchProducts();
}
