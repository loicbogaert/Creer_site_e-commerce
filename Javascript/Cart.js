
/**Création des éléments contenants de la page */

var cartBody = document.getElementById("cart");
var eachProduct = document.createElement ("div");

var eachProductPrice = document.createElement("p");
var eachProductName = document.createElement("h2");
var eachProductLense = document.createElement("p");
var eachProductImage = document.createElement("img");


/**Prise du local storage pour la page panier */
var basket__json = localStorage.getItem("basket")
var basket = JSON.parse(basket__json);

console.log(basket);