
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

    var basketName = basket[i].name;
    var basketPrice = basket[i].price/100 + "$";
    var basketImg = basket[i].image;
    var basketId = basket[i].id;
    var quantity = basket[i].quantity;

    var eachProduct = document.createElement ("div");
    var eachProductPrice = document.createElement("p");
    var eachProductName = document.createElement("h2");
    var eachProductLense = document.createElement("p");
    var eachProductImage = document.createElement("img");
    var eachProductId = document.createElement("p");
    var eachProductQuantity = document.createElement("p");
    eachProductQuantity.id = "quantity"+[i]
    var ButtonPlus = document.createElement("button");
    var ButtonMinus = document.createElement("button");

    var ButtonContainer = document.createElement("div");
    ButtonContainer.appendChild(ButtonPlus);    
    ButtonContainer.appendChild(ButtonMinus);
      /**Création de classes + bootstrap*/
      eachProduct.classList.add("cartPage");
      eachProductPrice.classList.add("cartPage__price");
      eachProductName.classList.add("cartPage__name");
      eachProductImage.classList.add("cartPage__image");

      ButtonPlus.classList.add("incrementButton");
      ButtonPlus.id = "buttonPlus"+[i];
      ButtonMinus.classList.add("incrementButton");
      ButtonMinus.id = "buttonMinus"+[i];

    
      eachProduct.classList.add("col-9");
      eachProduct.classList.add("col-md-4");
      eachProduct.classList.add("col-lg-4");


/**Ajouter les éléments à la page */

    cartBody.appendChild(eachProduct);
    eachProduct.appendChild(eachProductImage);
    eachProduct.appendChild(eachProductName);
    eachProduct.appendChild(eachProductLense);
    eachProduct.appendChild(eachProductPrice);
    eachProduct.appendChild(eachProductId);
    eachProduct.appendChild(eachProductQuantity);
    eachProduct.appendChild(ButtonContainer);

    var names = document.createTextNode(basketName);  
    var id = document.createTextNode(basketId);
    var price = document.createTextNode(basketPrice);
    var quantity = document.createTextNode(quantity);
    var plus = document.createTextNode("+");
    var minus = document.createTextNode("-");
    ButtonPlus.appendChild(plus);
    ButtonMinus.appendChild(minus);
    
    eachProductName.appendChild(names);  
    eachProductId.appendChild(id);
    eachProductPrice.appendChild(price);
    eachProductQuantity.appendChild(quantity);
    eachProductImage.src = basketImg;


    /** Boutons d'ajout et retrait de la quantité pour un même objet
    */

    document.getElementById("buttonPlus"+[i]).onclick = function() {
        this.parentNode.parentNode.children[5].innerHTML++
    }
    
    document.getElementById("buttonMinus"+[i]).onclick = function() {
      this.parentNode.parentNode.children[5].innerHTML--
    }

    }
}
/** 
 * 
 * fonction onclick sur les boutons et pas addevent listener
 * 
 * 
 */

createElements();

/**-----------------Fonction pour avoir le prix total du panier------ */

function getTotalPrice() {

    var docPrice = document.getElementById("totalPrice");
    docPrice.classList.add("totalPrice");

    var totalPrice = 0;

    for (var i = 0; i < basket.length; i++) {
        totalPrice += parseInt(basket[i].price/100);
     }

     var FinalPrice = document.createTextNode(totalPrice + " $");
     docPrice.appendChild(FinalPrice);
}

getTotalPrice();


