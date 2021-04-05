function results() {
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var card = document.getElementById("card").value;
    var expiration = document.getElementById("expiration").value;

    alert("Your order has been registered, Thank you for your purchase !")
    
}

/** ajouter informations paiement + regex + regex avec picto selon les 4 premiers chiffres */
/**(visa ou mastercard ?) */
    var iconChange = document.getElementById("cardIcon");
    
    var regexVisa = /^[0-4][0-9][0-9][0-9]\s/;
    var regexMaster = /^[5-9][0-9][0-9][0-9]\s/;



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