const products = [

    {
        name: "Camera",
        price: 850,
        category: "tech",
        image: "assets/Image/tech/6.png",
        description: "High resolution camera perfect for photography and travel."
    },

    {
        name: "Smart Watch",
        price: 220,
        category: "tech",
        image: "assets/Image/tech/8.png",
        description: "Modern smart watch with health tracking and notifications."
    },

    {
        name: "Smart Phone",
        price: 700,
        category: "tech",
        image: "assets/Image/tech/image 23.png",
        description: "Latest smartphone with powerful processor, large display and high quality camera for everyday use."
    },

    {
        name: "Gaming Headphones",
        price: 120,
        category: "tech",
        image: "assets/Image/tech/image 29.png",
        description: "Comfortable gaming headphones with clear sound, deep bass and noise reduction."
    },

    {
        name: "Laptop",
        price: 1200,
        category: "tech",
        image: "assets/Image/tech/image 34.png",
        description: "High performance laptop suitable for office work, study and entertainment."
    },

    {
        name: "Wireless Headphone",
        price: 150,
        category: "tech",
        image: "assets/Image/tech/image 86.png",
        description: "Wireless headphones with long battery life and crystal clear sound."
    },

    {
        name: "iPhone",
        price: 999,
        category: "tech",
        image: "assets/Image/tech/image 33.png",
        description: "Premium smartphone with advanced camera system and smooth performance."
    },

    {
        name: "Kettle",
        price: 60,
        category: "tech",
        image: "assets/Image/tech/image 85.png",
        description: "Fast boiling electric kettle perfect for tea, coffee and instant meals."
    },

    {
        name: "Sofa",
        price: 650,
        category: "interior",
        image: "assets/Image/interior/1.png",
        description: "Modern and comfortable sofa designed for living room relaxation."
    },

    {
        name: "Plant Pot",
        price: 35,
        category: "interior",
        image: "assets/Image/interior/image 89.png",
        description: "Decorative plant pot ideal for indoor plants and home decoration."
    },

    {
        name: "Lamp",
        price: 70,
        category: "interior",
        image: "assets/Image/interior/6.png",
        description: "Elegant lamp that provides warm lighting and enhances room style."
    },

    {
        name: "Mud Pot",
        price: 25,
        category: "interior",
        image: "assets/Image/interior/3.png",
        description: "Elegant lamp that provides warm lighting and enhances room style."
    },

    {
        name: "Folded Chair",
        price: 90,
        category: "interior",
        image: "assets/Image/interior/7.png",
        description: "Portable folding chair perfect for small spaces and outdoor use."
    },

    {
        name: "Coffee Maker",
        price: 180,
        category: "appliances",
        image: "assets/Image/interior/8.png",
        description: "Easy to use coffee maker for preparing fresh coffee at home."
    },

    {
        name: "Juicer",
        price: 140,
        category: "appliances",
        image: "assets/Image/interior/9.png",
        description: "Easy to use coffee maker for preparing fresh coffee at home."
    },

    {
        name: "Bed",
        price: 750,
        category: "interior",
        image: "assets/Image/interior/image 93.png",
        description: "Powerful juicer machine for making healthy fresh juices."
    },

    {
        name: "Suit",
        price: 35,
        category: "cloth",
        image: "assets/Layout/alibaba/Image/cloth/image 30.png",
        description: "Strong and comfortable bed designed for a peaceful sleep."
    },

    {
        name: "Bag",
        price: 120,
        category: "cloth",
        image: "assets/Layout/alibaba/Image/cloth/image 26.png",
        description: "Soft cotton t-shirt ideal for daily casual wear."
    },

    {
        name: "volet",
        price: 60,
        category: "appliances",
        image: "assets/Layout/alibaba/Image/cloth/image 24.png",
        description: "Stylish jacket designed to keep you warm in cool weather."
    },

    {
        name: "T-Shirt",
        price: 200,
        category: "cloth",
        image: "assets/Layout/alibaba/Image/cloth/Bitmap.png",
        description: "Useful household appliance designed for daily convenience."
    },

    {
        name: "shorts",
        price: 80,
        category: "cloth",
        image: "assets/Layout/alibaba/Image/cloth/Bitmap (2).png",
        description: "Thick winter coat that provides warmth and comfort in cold weather."
    },

    {
        name: "jacket",
        price: 90,
        category: "cloth",
        image: "assets/Layout/alibaba/Image/cloth/2 1.png",
        description: "Lightweight sportswear designed for workouts and active lifestyle."
    }

];

function searchProducts(event) {

    event.preventDefault();

    let input = document.getElementById("searchInput").value.toLowerCase().trim();
    let category = document.getElementById("categorySelect").value;

    let filteredProducts = products.filter(product => {

        let matchName = input === "" || product.name.toLowerCase().includes(input);
        let matchCategory = category === "all" || product.category === category;

        return matchName && matchCategory;

    });

    if (filteredProducts.length === 0) {

        Swal.fire({
            icon: "error",
            title: "Product not found",
            text: "This item is not available"
        });

    } else {

        displayProducts(filteredProducts);

    }

    document.getElementById("searchInput").value = "";

}

function displayProducts(list) {

    const container = document.getElementById("recommendedItems")

    if (!container) return

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

// show deal option
function showDeals() {

    const dealContainer = document.getElementById("dealContainer")

    if (!dealContainer) return

    const techDeals = products.filter(p => p.category === "tech")

    dealContainer.innerHTML = ""

    techDeals.slice(0, 5).forEach(product => {

        dealContainer.innerHTML += `

<div class="col deal-product text-center">

<a href="product.html?name=${product.name}&price=${product.price}&image=${product.image}&category=${product.category}&description=${product.description}">

<img src="${product.image}" class="img-fluid">

<h6 class="mt-2">${product.name}</h6>

<p class="price">$${product.price}</p>

</a>

</div>

`

    })

}
showDeals()

// show electric consumer


function HomeOutdoor() {

    const container = document.getElementById("homeProducts")

    const selectedProducts = products.filter(p =>
        p.name === "Sofa" ||
        p.name === "Lamp" ||
        p.name === "Kettle" ||
        p.name === "Mud Pot" ||
        p.name === "Coffee Maker" ||
        p.name === "Folded Chair" ||
        p.name === "Plant Pot" ||
        p.name === "Juicer"
    )

    container.innerHTML = ""

    selectedProducts.forEach(product => {

        container.innerHTML += `

<a class="col-md-3 product-small"
href="product.html?name=${product.name}&price=${product.price}&image=${product.image}&category=${product.category}&description=${product.description}">

<img src="${product.image}">
<p>${product.name}</p>

</a>

`

    })

}

HomeOutdoor()

// home and outdoor
function showHomeOutdoor() {

    const container = document.getElementById("homeOutdoorProducts")

    const selectedProducts = products.filter(product =>
        product.name === "Camera" ||
        product.name === "Smart Watch" ||
        product.name === "iPhone" ||
        product.name === "Wireless Headphone" ||
        product.name === "Laptop" ||
        product.name === "Plant Pot" ||
        product.name === "Sofa" ||
        product.name === "Bed"
    )

    container.innerHTML = ""

    selectedProducts.forEach(product => {

        container.innerHTML += `

<a class="col-md-3 product-small"
href="product.html?name=${product.name}&price=${product.price}&image=${product.image}&category=${product.category}&description=${product.description}">

<img src="${product.image}">
<p>${product.name}</p>

</a>

`

    })

}

showHomeOutdoor()

// recomended items
function showRecommended() {

    const container = document.getElementById("recommendedItems")

    const recommended = products.filter(p =>
        p.category === "cloth" ||
        p.name === "Smart Watch" ||
        p.name === "Kettle" ||
        p.name === "Laptop" ||
        p.name === "Plant Pot" ||
        p.name === "Sofa"
    )

    container.innerHTML = ""

    recommended.slice(0, 10).forEach(product => {

        container.innerHTML += `

<a class="col product-small mb-4"
href="product.html?name=${product.name}&price=${product.price}&image=${product.image}&category=${product.category}&description=${product.description}">

<img src="${product.image}" class="img-fluid">
<p>${product.name}</p>

</a>

`

    })

}

showRecommended()



