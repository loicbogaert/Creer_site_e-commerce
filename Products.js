
 if(window.location.href.indexOf("item") != -1){
        
    product.then(product=>{
        console.log(product);
        console.log("this worked !");

        /**Prise en compte du numéro de l'objet dans l'url avec la méthode ($_GET) */

        var item =  $_GET("item");
        console.log(item);

        /*Div principale de la page produit*/
        var page2 = document.getElementById("pageProduct");

        /**Création des sous-div de la page produit (img / textes) */
        var title2 = document.createElement("h2");
        var price2 =  document.createElement("p");
        var image2 = document.createElement("img");
        var description2  = document.createElement("p");
        var lenses = document.createElement("div");

        var lensesChoice =  document.createElement("p");
        var createChoice =  document.createTextNode("Please choose your lense type :");
        lensesChoice.appendChild(createChoice);
       
        /**Ajout des éléments à la div principale */
        page2.appendChild(title2);
        page2.appendChild(image2);
        page2.appendChild(description2);
        page2.appendChild(price2);
        page2.appendChild(lensesChoice);
        page2.appendChild(lenses);
        

        console.log(page2);

        /** faire correspondre item ($get) avec les données du tableau */

            var name = document.createTextNode(product[item].name);
            var price = document.createTextNode(product[item].price/100 + " $");
            var description = document.createTextNode(product[item].description);
            

        /**Ajout des textes/images créés à leur div respective */

                title2.appendChild(name);
                price2.appendChild(price);
                description2.appendChild(description);
                image2.src = product[item].imageUrl;


        /**Ajout des différentes options de lentille */
        var lense = product[item].lenses;
        for (let i = 0; i < lense.length; i++) {
           var buttonLense = document.createElement("input");
           buttonLense.setAttribute("type", "radio");
           buttonLense.setAttribute("name", "lense");
           buttonLense.classList.add("productPage__checkbox");

           var choiceContainer = document.createElement("div");

           var lensesLabel = document.createElement("label");
           lenses.appendChild(lensesLabel);

           var lensesText = document.createTextNode(lense[i]);
           lensesLabel.appendChild(lensesText);

           choiceContainer.appendChild(buttonLense);
           choiceContainer.appendChild(lensesLabel);
           lenses.appendChild(choiceContainer);

           /** écoute du choix de lentille */
           buttonLense.value = lense[i];

           buttonLense.addEventListener('input', function(event){
              var clientInput = event.target.value;
              console.log(clientInput);
           })
        }

        /**Création de classes */

        page2.classList.add("productPage");
        image2.classList.add("productPage__img");
        title2.classList.add("productPage__title", "bold");
        price2.classList.add("productPage__price", "bold");
        description2.classList.add("productPage__description");
        lensesChoice.classList.add("productPage__lenseType");

    })
}

else {
    console.log("error if in product page")
}