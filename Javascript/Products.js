itemId.then(itemId=>{

      /**Création des éléments de la page products */
      /**Prise des éléments de l'api*/
      const cameraProduct = new Camera (itemId.name, itemId.price, itemId.imageUrl, itemId.description, itemId._id, 1);

      /**Div principale de la page produit*/
      var page = document.getElementById("pageProduct");

      /**Création des sous-div de la page produit (img / textes) */
      var title = document.createElement("h2");
      var price =  document.createElement("p");
      var image = document.createElement("img");
      var description  = document.createElement("p");
      var lenses = document.createElement("div");
      var cartButton = document.getElementById("cartButton");


      /**texte choix de lentille */
      var lensesChoice =  document.createElement("p");
      var createChoice =  document.createTextNode("Please choose your lense type :");
      lensesChoice.appendChild(createChoice);

      /**Ajout des éléments à la div principale */
      page.appendChild(title);
      page.appendChild(image);
      page.appendChild(description);
      page.appendChild(price);
      page.appendChild(lensesChoice);
      page.appendChild(lenses);

        /** faire correspondre item ($get) avec les données du tableau */

      var productName = document.createTextNode(cameraProduct.name);
      var productPrice = document.createTextNode(cameraProduct.CalculatedPrice);
      var productDescription = document.createTextNode(cameraProduct.description);
            

      /**Ajout des textes/images créés à leur div respective */

      title.appendChild(productName);
      price.appendChild(productPrice);
      description.appendChild(productDescription);
      image.src = cameraProduct.image;


      /**Ajout des différentes options de lentille */

      var lense = itemId.lenses;
      var buttonLense = document.createElement("select");
      buttonLense.setAttribute("name", "lense");
      buttonLense.classList.add("productPage__checkbox");
      buttonLense.setAttribute("id", "lenseType");
      var choiceContainer = document.createElement("div");
      page.appendChild(choiceContainer);


      for (let i = 0; i < lense.length; i++) {
         var option = document.createElement("option");
         option.setAttribute("value", lense[i]);
         var optionTextnode = document.createTextNode(lense[i]+(" - ("+ cameraProduct.name + ")"));

         option.appendChild(optionTextnode);

         /** Création des choix de lentille*/

         choiceContainer.appendChild(buttonLense);
         buttonLense.appendChild(option);
      }

        /**Création de classes */

        page.classList.add("productPage");
        image.classList.add("productPage__img");
        title.classList.add("productPage__title", "bold");
        price.classList.add("productPage__price", "bold");
        description.classList.add("productPage__description");
        lensesChoice.classList.add("productPage__lenseType");
})

   itemId.then(itemId=>{

         /**Bouton pour ajouter au panier (localStorage) */
         cartButton.onclick = function(){
          lenseValue = lenseListener();
          console.log(lenseValue)
            let cameraBasket = new Camera (itemId.name, itemId.price, itemId.imageUrl, itemId.description, itemId._id, 1, lenseValue)

            let items = JSON.parse(localStorage.getItem("basket"))

            if (items) { 
               if(items.some(items => items.lense === cameraBasket.lense)){

                  for(var i = 0; items.length > i; i++) {
                     if (items[i].lense === cameraBasket.lense) {
                        plusMinusItem(items[i], items, 1);
                     }
                  }
               }  else {
                  items.push(cameraBasket)
                  localStorage.setItem("basket", JSON.stringify(items))
               }
            } else {
                  items = new Array;
                   items.push(cameraBasket)
                  localStorage.setItem("basket", JSON.stringify(items))
            }
         }
   }) 

   
   console.log(localStorage)

