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


function searchProducts(event){

event.preventDefault()

const searchValue = document.getElementById("searchInput").value.toLowerCase()
const categoryValue = document.getElementById("categorySelect").value

let filtered = products.filter(product => {

const nameMatch = product.name.toLowerCase().includes(searchValue)

const categoryMatch = categoryValue === "all" || product.category === categoryValue

return nameMatch && categoryMatch

})

displayProducts(filtered)

}

function displayProducts(list){

const container = document.getElementById("recommendedItems")

if(!container) return

container.innerHTML = ""

list.forEach(product => {

container.innerHTML += `

<a class="col product-small mb-4"
href="product.html?name=${product.name}&price=${product.price}&image=${product.image}&category=${product.category}&description=${product.description}">

<img src="${product.image}" class="img-fluid">
<p>${product.name}</p>

</a>

`
})

}


// filter product
function filterCategory(category) {

    if (category === "all") {
        displayProducts(products)
        return
    }
    let filtered = products.filter(p => p.category === category)

    displayProducts(filtered)

}
