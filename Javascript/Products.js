   itemId.then(itemId=>{

/**créer une classe qui s'appelle objet pour les articles pour le faire en orienter objet*/
/** */
let cameraProduct = new Camera (itemId.name, itemId.price, itemId.imageUrl, itemId.description, itemId._id);
console.log(cameraProduct);

        /*Div principale de la page produit*/
        var page = document.getElementById("pageProduct");

        /**Création des sous-div de la page produit (img / textes) */
        var title = document.createElement("h2");
        var price =  document.createElement("p");
        var image = document.createElement("img");
        var description  = document.createElement("p");
        var lenses = document.createElement("div");


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
            var productPrice = document.createTextNode(cameraProduct.price);
            var productDescription = document.createTextNode(cameraProduct.description);
            

        /**Ajout des textes/images créés à leur div respective */

                title.appendChild(productName);
                price.appendChild(productPrice);
                description.appendChild(productDescription);
                image.src = cameraProduct.image;


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
                  
                 var InCart = new Object(); /**ici faire le json */

                InCart.cartLense = clientInput;
                InCart.cartName = productName;
                InCart.cartPrice = productPrice;
                InCart.cartImg = itemId.imageUrl;
                

                    ProductInCart.push(InCart);
                    console.log(ProductInCart);
              }
           })
           
        }


        /**Création de classes */

        page.classList.add("productPage");
        image.classList.add("productPage__img");
        title.classList.add("productPage__title", "bold");
        price.classList.add("productPage__price", "bold");
        description.classList.add("productPage__description");
        lensesChoice.classList.add("productPage__lenseType");

    })
