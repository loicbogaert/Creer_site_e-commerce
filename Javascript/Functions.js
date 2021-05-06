 /**Prise des data local storage */

 let data = JSON.parse(localStorage.getItem("basket"));

 /**Fonction pour incrémenter de la quantité dans le local storage */
 
function plusMinusItem(thisLense, myData, plusMinus) { /** plusMinus = 0 ou 1 */
  if (plusMinus) {
    for(var i = 0; myData.length > i; i++) {
      if (myData[i].lense === thisLense) {
        myData[i].quantity ++;
        localStorage.setItem("basket", JSON.stringify(myData));
    }
  }
} else {
    for(var i = 0; myData.length > i; i++) {
      if (myData[i].lense === thisLense) {
        myData[i].quantity --;
        localStorage.setItem("basket", JSON.stringify(myData));
      }
    }
  }
};

/** Fonction pour supprimer les objets du local storage depuis le panier */

function deleteFromCart(thisLense, myData) {
  for(var i = 0; myData.length > i; i++) {
    if (myData[i].lense === thisLense) {
      myData.splice([i],[1]);
      localStorage.setItem("basket", JSON.stringify(myData));
    }
  }
};

/**Fonction pour calculer le prix total du panier dans localStorage */
var basket__json = localStorage.getItem("basket");
var basket = JSON.parse(basket__json);

       function getTotalPrice() {

         var totalPrice = 0;

        for (var i = 0; i < basket.length; i++) {
            totalPrice += parseInt(basket[i].price/100*basket[i].quantity);
         }
         var FinalPrice = totalPrice + " $";
            return FinalPrice;
    }

/**Fonction pour écouter le choix de la lentille dans la page produit */

    function lenseListener() {
      var lenseType = document.getElementById("lenseType");
      var lenseValue = lenseType.options[lenseType.selectedIndex].text;
      return lenseValue;
   }
