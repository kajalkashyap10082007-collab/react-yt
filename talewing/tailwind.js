let productBox = createProductBox();

function createProductBox() {
    let div = document.createElement("div");
    div.id = "product-box";
    div.className = "p-4 m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-2 border black-400 bg-green-300 rounded-xl";
    document.body.appendChild(div);
    return div;
}

fetchProducts();

function fetchProducts() {
    let xhr = new XMLHttpRequest();
    let URL = "https://dummyjson.com/todos";

    xhr.onload = () => {
        let productsObject = JSON.parse(xhr.responseText);
        let productArray = productsObject.todos;
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
    div.className = "border-2 border-black-300 shadow-md rounded-xl p-4 hover:shadow-xl hover:bg-yellow-200 transition-all bg-orange-200";
    
    // let img1 = document.createElement("img");
    // img1.src = product.thumbnail;
    // img1.alt = product.title;
    // img1.className = "h-48 w-full object-cover";

    //  let img2 = document.createElement("img");
    // img2.src = https://source.unsplash.com/400x200/?${encodeURIComponent(product.title)};
    // img2.alt = product.title + " external image";
    // img2.className = "h-40 w-full object-cover mt-1 rounded-b-md";

    let title = document.createElement("h1");
    title.className = "text-lg font-bold text-gray-800 mb-2";
    title.innerText = "Id:" + product.id;

    let todo = document.createElement("p");
    todo.className = "text-sm text-red-600 font-semibold";
    todo.innerText =  product.todo;

    
    let completed = document.createElement("p");
    completed.className = "text-sm text-green-600 font-semibold";
    completed.innerText =  product.completed;

      let userId = document.createElement("p");
    userId.className = "text-sm text-purple-600 font-semibold";
    userId.innerText =  product.userId;

    // let description = document.createElement("p");
    // description.className = "text-sm text-gray-600 mt-2";
    // description.innerText = product.description;

    // div.appendChild(img1);
    div.appendChild(title);
    div.appendChild(todo);
    div.appendChild(completed);
    div.appendChild(userId);
    // div.appendChild(description);

    productBox.appendChild(div);
}
