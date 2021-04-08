function results() {
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var card = document.getElementById("card").value;

    alert("Your order has been registered, Thank you for your purchase !")
    
}

/** visa ou mastercard (regex)  */
    var iconChange = document.getElementById("cardIcon");
    
    var regexVisa = /^[0-4][0-9][0-9][0-9]/;
    var regexMaster = /^[5-9][0-9][0-9][0-9]/;

/*------fonction qui vérifie le type de carte utilisée pour le paiement----------- */

    document.getElementById("card").addEventListener("keyup", CreditCard);

    function CreditCard() {
      const valid1 = regexVisa.test(document.getElementById("card").value)
      const valid2 = regexMaster.test(document.getElementById("card").value)
     
        if (valid1) {
            iconChange.classList.remove("fa-credit-card")
            iconChange.classList.remove("fa-cc-mastercard")
            iconChange.classList.remove("fas")
            iconChange.classList.remove("fab")
            iconChange.classList.add("fab")
            iconChange.classList.add("fa-cc-visa")
        } else if (valid2) {
            iconChange.classList.remove("fa-cc-visa")
            iconChange.classList.remove("fa-credit-card")
            iconChange.classList.remove("fas")
            iconChange.classList.remove("fab")
            iconChange.classList.add("fab")
            iconChange.classList.add("fa-cc-mastercard")
        } else {
            iconChange.classList.remove("fa-cc-visa")
            iconChange.classList.remove("fa-cc-mastercard")
            iconChange.classList.remove("fas")
            iconChange.classList.remove("fab")
            iconChange.classList.add("fas")
            iconChange.classList.add("fa-credit-card")
        }
    }

    /** envoyer les résultats du form avec fetch */

    var basket__json = localStorage.getItem("basket")
    var basket = JSON.parse(basket__json);


    const form = document.getElementById('form');

    form.addEventListener('submit' , function (e) {
        e.preventDefault();

        const contact = new Object();
        contact.firstName = "agh",
        contact.lastName ="azed",
        contact.address ="azed",
        contact.city ="zaedf",
        contact.email ="azef",
        console.log(contact)

        /**
         * const contact : {
         *  * les differents parties de l'objet*
         * }
         * 
         */

        const products = new Array

        for (var i = 0; i < basket.length; i++) {
            products.push(basket[i].id)
        }
        console.log(products)

        fetch("http://localhost:3000/api/cameras/order", {
            method: "POST",
            body: [contact,
            products]
    }).then(function (response) {
        return response.text(); 
    }).then(function (text) {
        console.log(text);
    })
})

/** faire un stringify sur le body pour corriger l'erreur
 * 
 * + faire un header
*/

/**<!-- if (!req.body.contact ||
      !req.body.contact.firstName ||
      !req.body.contact.lastName ||
      !req.body.contact.address ||
      !req.body.contact.city ||
      !req.body.contact.email ||
      !req.body.products) {
    return res.status(400).send(new Error('Bad request!'));
  }--> */


  /**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */

  /**   EXEMPLE POUR LA REQUETE POST *****
   * 
   * fetch("http://example.com/api/endpoint/", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    name: myName,
    password: myPassword
  })
})
.then( (response) => { 
   //do something awesome that makes the world a better place
});
   */