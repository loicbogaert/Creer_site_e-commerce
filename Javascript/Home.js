    /** reprise des données de l'api*/ 
     product.then(product=>{


/**Création des éléments de la page Home */
    for (let i = 0; i < product.length; i++) {
        const camera = new Camera(product[i].name, product[i].price, product[i].imageUrl, product[i].description, product[i]._id);

        
        /*Création des différentes div (1 div = un produit) + ajout classe / id*/
    
        var divSquare = document.createElement("div");
        divSquare.classList.add ('main__square');
        divSquare.id = 'mainSquare' + [i];
    
        /*création des éléments + noms de classe*/

        var divImg = document.createElement("div");
        divImg.classList.add("main__img");
        var div = document.createElement("h2");
        div.classList.add ("main__title", "bold");
        var div2 = document.createElement("p");
        div2.classList.add ("main__price");
        var div3 = document.createElement("p");
        div3.classList.add ("main__description");
        var div4 = document.createElement("p");
        div4.classList.add ("main__code");
                
        /*Ajout des classes bootstrap*/

        divSquare.classList.add("col-9");
        divSquare.classList.add("col-md-5");
        divSquare.classList.add("col-lg-3");

        /*Création des éléments de texte et img*/
    
        var id = document.createTextNode ("product reference : " + camera.id);
        var name = document.createTextNode(camera.name);
        var price = document.createTextNode(camera.CalculatedPrice);
        var description = document.createTextNode(camera.description);    
       
        var image = document.createElement("img");
        image.src = camera.image;
       
        
        /*Ajout de tout les éléments "product" aux sous-div du MAIN*/ 

        document.getElementById('main').appendChild(divSquare);

        var squareId = document.getElementById('mainSquare' + [i]);

                /*Chaque produit amène sur la "page produit" + change les éléments de la page produits*/
    
                var link = document.createElement("a");
                link.setAttribute("href", "Products.html?itemid=" + (product[i]._id));
                squareId.appendChild(link);
                link.classList.add("productLink");
       
                
        link.appendChild(divImg);
        divImg.appendChild(image);
        link.appendChild(div);
        div.appendChild(name);
        link.appendChild(div2);
        div2.appendChild(price);
        link.appendChild(div3);
        div3.appendChild(description);
        link.appendChild(div4);
        div4.appendChild(id); 
    

    }
    
    
        /**Boucle pour afficher dynamiquement le carousel*/

    var carouItem = new Array;
    carouItem =  document.getElementsByClassName("carousel-item");

    for(let i = 0; i < carouItem.length; i++) {
        let camera = new Camera (product[i].name, product[i].price, product[i].imageUrl, product[i].description, product[i]._id);

        var description = document.createTextNode(camera.description);
        var title = document.createTextNode(camera.name);

        var carouImg = document.getElementsByClassName("img-fluid");
        var carouTxt = document.getElementsByClassName("carouTxt");
        var carouTitle = document.getElementsByClassName("carouTitle");

        carouImg[i].setAttribute("src", camera.image);
        carouTxt[i].appendChild(description);
        carouTitle[i].appendChild(title);
    }
})