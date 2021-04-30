 /**Prise des data local storage */

 let data = JSON.parse(localStorage.getItem("basket"))

 /**Fonction pour incrémenter de la quantité dans le local storage */
 
      function plusMinusItem(myData, allData, plusMinus) {
        if (plusMinus) {
          myData.quantity ++
          localStorage.setItem("basket", JSON.stringify(allData))
        }
        else {
          myData.quantity --
          localStorage.setItem("basket", JSON.stringify(allData))
        }
       }
 
 /**Fonction pour retirer de la quantité dans le local storage */
 
       function deleteItem(myData, allData) {
       }

/**Fonction pour calculer le prix total du panier dans localStorage */
var basket__json = localStorage.getItem("basket")
var basket = JSON.parse(basket__json);

       function getTotalPrice(quantity) {

         var totalPrice = 0;

        for (var i = 0; i < basket.length; i++) {
            totalPrice += parseInt(basket[i].price/100*basket[i].quantity);
         }
         var FinalPrice = totalPrice + " $";
            return FinalPrice;
    }
