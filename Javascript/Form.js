/** visa ou mastercard (regex)  */
    var iconChange = document.getElementById("cardIcon");
    
    var regexVisa = /^[0-4][0-9][0-9][0-9]/;
    var regexMaster = /^[5-9][0-9][0-9][0-9]/;

/*------fonction qui vérifie le type de carte utilisée pour le paiement à chaque key entrée----------- */

    document.getElementById("card").addEventListener("keyup", CreditCard);

    function CreditCard() {
      const valid1 = regexVisa.test(document.getElementById("card").value);
      const valid2 = regexMaster.test(document.getElementById("card").value);
     
        if (valid1) {
            iconChange.classList.remove("fa-credit-card");
            iconChange.classList.remove("fa-cc-mastercard");
            iconChange.classList.remove("fas");
            iconChange.classList.remove("fab");
            iconChange.classList.add("fab");
            iconChange.classList.add("fa-cc-visa");
        } else if (valid2) {
            iconChange.classList.remove("fa-cc-visa");
            iconChange.classList.remove("fa-credit-card");
            iconChange.classList.remove("fas");
            iconChange.classList.remove("fab");
            iconChange.classList.add("fab");
            iconChange.classList.add("fa-cc-mastercard");
        } else {
            iconChange.classList.remove("fa-cc-visa");
            iconChange.classList.remove("fa-cc-mastercard");
            iconChange.classList.remove("fas");
            iconChange.classList.remove("fab");
            iconChange.classList.add("fas");
            iconChange.classList.add("fa-credit-card");
        }
    }

    /** envoyer les résultats du form avec fetch */

    var basket__json = localStorage.getItem("basket")
    var basket = JSON.parse(basket__json);


    const form = document.getElementById('form');

    form.addEventListener('submit' , function (e) {
        e.preventDefault();

        var firstname = document.getElementById("firstName").value;
        var lastname = document.getElementById("lastName").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var email = document.getElementById("email").value;
        var card = document.getElementById("card").value;

        /**Création de l'objet contact */

        const contact = new Object();
        contact.firstName = firstname,
        contact.lastName = lastname,
        contact.address = address,
        contact.city = city,
        contact.email = email;
        contact.card = card;

        /**
         * --------------requête POST---------------
         */

        const products = new Array

        for (var i = 0; i < basket.length; i++) {
            products.push(basket[i].id);
        }

        fetch("http://localhost:3000/api/cameras/order", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({contact,
            products})
    }).then(function (response) {
        return response.text(); 
    }).then(function (text) {
     var info = JSON.parse(text);

     /**Gestion du pop-in lorsque la commande sera passée (message de remerciement à l'utilisateur) */

     var addText = document.getElementById("pop-message");
     var orderID = document.createTextNode(" " + info.orderId);
     addText.appendChild(orderID);
                
     /**Appel du pop-in bootstrap */
     $('#popin').modal();
    })
})