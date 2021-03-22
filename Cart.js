/** Idée pour la page de panier
 * 
 * Tableau qui récupère et stocke les input de la page produit a été créé
 * 
 * suite : voir avec la commande post pour enregistrer le panier
 * 
 * prendre ensuite les informations enregistrées avec post pour les intégrer à la page panier
 * 
 *   */


/**Création des éléments contenants de la page */

var cartBody = document.getElementById("cart");
var eachProduct = document.createElement ("div");

var eachProductPrice = document.createElement("p");
var eachProductName = document.createElement("h2");
var eachProductLense = document.createElement("p");
var eachProductImage = document.createElement("img");
/** */


var ProductInCart = new Array;