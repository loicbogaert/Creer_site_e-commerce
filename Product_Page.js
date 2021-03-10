var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response2 = JSON.parse(this.responseText)


        /*Array avec les données de l'API*/
        let product2 = new Array();
        product2 = response2;

        console.log(product2);

        let myArray = new Array();
        myArray = document.getElementsByClassName('main__square');
        console.log(myArray);


        /*Div principale de la page produit*/
var page2 = document.getElementById("pageProduct");

/**Création des sous-div de la page produit (img / textes) */
var image2 = document.createElement("img");
var title2 = document.createElement("h2");
var price2 =  document.createElement("p");
var description2  = document.createElement("p");

/**Ajout des éléments à la div principale */
page2.appendChild(image2);
page2.appendChild(title2);
page2.appendChild(price2);
page2.appendChild(description2);


console.log(page2);

    }
};


request.open("GET", "http://localhost:2000/api/cameras");
request.send();