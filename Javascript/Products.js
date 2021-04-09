
  itemId.then(itemId=>{

/***/
const cameraProduct = new Camera (itemId.name, itemId.price, itemId.imageUrl, itemId.description, itemId._id, 1);
console.log(cameraProduct)

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
        var choiceContainer = document.createElement("div");
        page.appendChild(choiceContainer);


        for (let i = 0; i < lense.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", lense[i])
            var optionTextnode = document.createTextNode(lense[i]);

            option.appendChild(optionTextnode);

           /** écoute du choix de lentille */

           buttonLense.value = lense[i];

           buttonLense.addEventListener('input', function(event){
              var clientInput = event.target.value;
           })
         choiceContainer.appendChild(buttonLense)
         buttonLense.appendChild(option)
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
      let cameraBasket = new Camera (itemId.name, itemId.price, itemId.imageUrl, itemId.description, itemId._id, 1)
         /**Bouton pour ajouter au panier (localStorage) */
         var cartButton = document.getElementById("cartButton");
         cartButton.onclick = function(){

            let data = JSON.parse(localStorage.getItem("basket"))

            /** if id déjà présent, faire une incrémentation sur la quantité*/
     
   
            var tab = new Array;
/** */
            if (data) { 
               if(data.some(data => data.name === cameraBasket.name)){
                  cameraBasket.quantity ++
                  console.log(cameraBasket.quantity);

                 tab.push(cameraBasket) /** ce tab.push delete tout le reste du panier */
                  console.log(localStorage)
               }
                  /**problemes : 
                   * 
                   * Ecrase l'objet précèdant quand on ajoute un objet
                   * quantité reset au refresh/chgmt de page
                   * 
                  */
               
               else {
                  data.push (cameraBasket)
                  localStorage.setItem("basket", JSON.stringify(data))
                  console.log(localStorage)
               }
            } else {
                  data.push(cameraBasket)
                  localStorage.setItem("basket", JSON.stringify(data))
                  console.log(localStorage)
            }
         }
   }) 
   
   console.log(localStorage)