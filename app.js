const products = [

    {
        name: "Camera",
        price: 850,
        category: "tech",
        image: "assets/Image/tech/6.png"
    },

    {
        name: "Smart Watch",
        price: 220,
        category: "tech",
        image: "assets/Image/tech/8.png"
    },

    {
        name: "Smart Phone",
        price: 700,
        category: "tech",
        image: "assets/Image/tech/image 23.png"
    },

    {
        name: "Gaming Headphones",
        price: 120,
        category: "tech",
        image: "assets/Image/tech/image 29.png"
    },

    {
        name: "Laptop",
        price: 1200,
        category: "tech",
        image: "assets/Image/tech/image 34.png"
    },

    {
        name: "Wireless Headphone",
        price: 150,
        category: "tech",
        image: "assets/Image/tech/image 86.png"
    },

    {
        name: "iPhone",
        price: 999,
        category: "tech",
        image: "assets/Image/tech/image 33.png"
    },

    {
        name: "Electric Kettle",
        price: 60,
        category: "tech",
        image: "assets/Image/tech/image 85.png"
    },

    {
        name: "Sofa",
        price: 650,
        category: "interior",
        image: "assets/Image/interior/1.png"
    },

    {
        name: "Plant Pot",
        price: 35,
        category: "interior",
        image: "assets/Image/interior/image 89.png"
    },

    {
        name: "Lamp",
        price: 70,
        category: "interior",
        image: "assets/Image/interior/6.png"
    },

    {
        name: "Mud Pot",
        price: 25,
        category: "interior",
        image: "assets/Image/interior/3.png"
    },

    {
        name: "Folded Chair",
        price: 90,
        category: "interior",
        image: "assets/Image/interior/7.png"
    },

    {
        name: "Coffee Maker",
        price: 180,
        category: "appliances",
        image: "assets/Image/interior/8.png"
    },

    {
        name: "Juicer",
        price: 140,
        category: "appliances",
        image: "assets/Image/interior/9.png"
    },

    {
        name: "Bed",
        price: 750,
        category: "interior",
        image: "assets/Image/interior/image 93.png"
    },

    {
        name: "T-Shirt",
        price: 35,
        category: "cloth",
        image: "assets/Layout/alibaba/Image/cloth/image 30.png"
    },

    {
        name: "Jacket",
        price: 120,
        category: "cloth",
        image: "assets/Layout/alibaba/Image/cloth/image 26.png"
    },

    {
        name: "volet",
        price: 60,
        category: "appliances",
        image: "assets/Layout/alibaba/Image/cloth/image 24.png"
    },

    {
        name: "Winter Coat",
        price: 200,
        category: "cloth",
        image: "assets/Layout/alibaba/Image/cloth/Bitmap.png"
    },

    {
        name: "Hoodie",
        price: 80,
        category: "cloth",
        image: "assets/Layout/alibaba/Image/cloth/Bitmap (2).png"
    },

    {
        name: "Sports Wear",
        price: 90,
        category: "cloth",
        image: "assets/Layout/alibaba/Image/cloth/2 1.png"
    }

];

let visibleProducts = 8;
const step = 4;
function displayProducts(list) {

    const container = document.getElementById("productContainer");
    const button = document.getElementById("loadBtn");

    container.innerHTML = "";

    list.slice(0, visibleProducts).forEach(product => {

        container.innerHTML += `
<div class="col-md-3 mb-4">
<div class="product-card">
<img src="${product.image}" class="img-fluid">
<h5 class="mt-3">${product.name}</h5>
<p class="price">$${product.price}</p>
<a href="product.html?name=${product.name}&price=${product.price}&image=${product.image}&category=${product.category}" class="btn btn-primary">
Buy Now
</a>
</div>
</div>
`;

    });


    if (visibleProducts >= list.length) {
        button.innerText = "View Less";
    } else {
        button.innerText = "Load More";
    }

}

// load more
function loadMoreProducts() {
    visibleProducts += 4;
    displayProducts(products);
}
function loadMoreProducts() {

    const button = document.getElementById("loadBtn");

    if (button.innerText === "Load More") {

        visibleProducts += step;

    } else {

        visibleProducts = 8;
        window.scrollTo({
            top: document.getElementById("product").offsetTop,
            behavior: "smooth"
        });
    }

    displayProducts(products);
}




function searchProducts(event) {

    event.preventDefault();

    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    const categoryValue = document.getElementById("categorySelect").value;

    let filtered = products;

    if (categoryValue !== "all") {
        filtered = filtered.filter(p => p.category === categoryValue);
    }

    if (searchValue !== "") {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchValue));
    }

    displayProducts(filtered);

}
displayProducts(products);


