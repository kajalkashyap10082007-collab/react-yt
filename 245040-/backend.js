let productBox = createProductBox();

function createProductBox() {
    let div = document.createElement("div");
    div.id = "product-box";
    div.className = "p-4 m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-";
    document.body.appendChild(div);
    return div;
}

fetchProducts();

function fetchProducts() {
    let xhr = new XMLHttpRequest();
    let URL = "https://dummyjson.com/products";

    xhr.onload = () => {
        let productsObject = JSON.parse(xhr.responseText);
        let productArray = productsObject.products;
        console.log(productsObject);
        productArray.forEach(product => {
            createProductCard(product);
        });
    };

    xhr.open("GET", URL);
    xhr.send();
}

function createProductCard(product) {
    let div = document.createElement("div");
    div.className = "border-2 border-gray-300 shadow-md rounded-xl p-4 hover:shadow-xl transition-all";
    
    let img1 = document.createElement("img");
    img1.src = product.thumbnail;
    img1.alt = product.title;
    img1.className = "h-48 w-full object-cover";

    //  let img2 = document.createElement("img");
    // img2.src = https://source.unsplash.com/400x200/?${encodeURIComponent(product.title)};
    // img2.alt = product.title + " external image";
    // img2.className = "h-40 w-full object-cover mt-1 rounded-b-md";

    let title = document.createElement("h1");
    title.className = "text-lg font-bold text-gray-800 mb-2";
    title.innerText = product.title;

    let price = document.createElement("p");
    price.className = "text-sm text-green-600 font-semibold";
    price.innerText = "Price: $" + product.price;

    let description = document.createElement("p");
    description.className = "text-sm text-gray-600 mt-2";
    description.innerText = product.description;

    div.appendChild(img1);
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(description);

    productBox.appendChild(div);
}
