
/**Création des éléments contenants de la page */

var cartBody = document.getElementById("carts");
var eachProduct = document.createElement ("div");

var eachProductPrice = document.createElement("p");
var eachProductName = document.createElement("h2");
var eachProductLense = document.createElement("p");
var eachProductImage = document.createElement("img");


/**Prise du local storage pour la page panier */
var basket__json = localStorage.getItem("basket")
var basket = JSON.parse(basket__json);

console.log(basket);

function createElements() {
for (var i = 0; i < basket.length; i++) {

    var basketQuantity = basket[i].quantity;
    var basketName = basket[i].name;
    var basketPrice = basket[i].price;
    var basketImg = basket[i].image;
    var basketId = basket[i].id;

    if (basketQuantity < 2) {

        var eachProduct = document.createElement ("div");
    var eachProductPrice = document.createElement("p");
    var eachProductName = document.createElement("h2");
    var eachProductLense = document.createElement("p");
    var eachProductImage = document.createElement("img");
    var eachProductId = document.createElement("p");
    var eachProductQuantity = document.createElement("p");

    cartBody.appendChild(eachProduct);
    eachProduct.appendChild(eachProductImage);
    eachProduct.appendChild(eachProductName);
    eachProduct.appendChild(eachProductLense);
    eachProduct.appendChild(eachProductPrice);
    eachProduct.appendChild(eachProductId);
    eachProduct.appendChild(eachProductQuantity);

    var names = document.createTextNode(basketName);  
    var id = document.createTextNode(basketId);
    var price = document.createTextNode(basketPrice);
    var quantity = document.createTextNode(basketQuantity);
    
    eachProductName.appendChild(names);  
    eachProductId.appendChild(id);
    eachProductPrice.appendChild(price);
    eachProductQuantity.appendChild(quantity);
    eachProductImage.src = basketImg;
    }

    else {
        basketQuantity += 1;
    }
}
}
createElements();