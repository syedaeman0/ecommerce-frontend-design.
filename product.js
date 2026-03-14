const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const price = params.get("price");
const image = params.get("image");
const category = params.get("category");

if (document.getElementById("productName")) {

document.getElementById("productName").innerText = name;
document.getElementById("productPrice").innerText = "$" + price;
document.getElementById("productImage").src = image;

}

function addToCart() {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let product = {
name: name,
price: price,
image: image
};

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

alert("Product added to cart!");

}


// RELATED PRODUCTS

const relatedContainer = document.getElementById("relatedProducts");

if (relatedContainer) {

const related = products.filter(p => p.category === category && p.name !== name);

related.forEach(product => {

relatedContainer.innerHTML += `
<div class="col-md-3">
<div class="card p-2 shadow-sm">
<img src="${product.image}" class="card-img-top">
<div class="card-body text-center">
<h6>${product.name}</h6>
<p>$${product.price}</p>
<a href="product.html?name=${product.name}&price=${product.price}&image=${product.image}&category=${product.category}" class="btn btn-primary btn-sm">View</a>
</div>
</div>
</div>
`;

});

}