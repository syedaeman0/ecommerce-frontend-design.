const cartContainer = document.getElementById("cartContainer");
const totalPriceElement = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

cart.forEach((product, index) => {
    total += Number(product.price);
    cartContainer.innerHTML += `
<div class="col-md-3 mb-4">
<div class="product-card">
<img src="${product.image}" class="img-fluid">
<h5 class="mt-3">${product.name}</h5>
<p class="price">$${product.price}</p>
<button class="btn btn-danger" onclick="removeItem(${index})">
Remove</button>
</div>
</div>`;
});
totalPriceElement.innerText = "Total: $" + total;



function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}