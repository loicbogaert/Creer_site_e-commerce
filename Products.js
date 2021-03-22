
 if(window.location.href.indexOf("itemId") != -1){

    itemId.then(itemId=>{

        /*Div principale de la page produit*/
        var page2 = document.getElementById("pageProduct");

        /**Création des sous-div de la page produit (img / textes) */
        var title2 = document.createElement("h2");
        var price2 =  document.createElement("p");
        var image2 = document.createElement("img");
        var description2  = document.createElement("p");
        var lenses = document.createElement("div");

        /**texte choix de lentille */
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

        /** faire correspondre item ($get) avec les données du tableau */

            var name = document.createTextNode(itemId.name);
            var price = document.createTextNode(itemId.price/100 + " $");
            var description = document.createTextNode(itemId.description);
            

        /**Ajout des textes/images créés à leur div respective */

                title2.appendChild(name);
                price2.appendChild(price);
                description2.appendChild(description);
                image2.src = itemId.imageUrl;


        /**Ajout des différentes options de lentille */
        var lense = itemId.lenses;
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
                
                /**Bouton qui prend l'info au clic */

                

              var cartButton = document.getElementById("cartButton");
              cartButton.onclick = function(){
                  
                 var InCart = new Object();

                InCart.cartLense = clientInput;
                InCart.cartName = name;
                InCart.cartPrice = price;
                InCart.cartImg = itemId.imgUrl;
                

                    ProductInCart.push(InCart);
                    console.log(ProductInCart);
              }
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