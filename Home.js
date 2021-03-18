        /**Pour la page principale (home) (check URL)*/

        if (window.location.href == "http://127.0.0.1:5500/Home.html") {
        
    /** reprise des données de l'api*/ 

        product.then(product=>{
            console.log(product)

/**
 * Boucle qui s'active pour chaque élément du tableau Product contenant les objets de l'api
*/

for (let i = 0; i < product.length; i++) {

    /*Création des différentes div (1 div = un produit) + ajout classe / id*/

    var divSquare = document.createElement("div")
    divSquare.className = 'main__square';
    divSquare.id = 'mainSquare' + [i];


    /*Ajout des classes bootstrap*/

    divSquare.classList.add("col-9");
    divSquare.classList.add("col-md-5");
    divSquare.classList.add("col-md-5");
    divSquare.classList.add("col-lg-3");


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

    /*Création des éléments de texte et img*/

    var id = document.createTextNode ("product reference : " + product[i]._id);
    var name = document.createTextNode(product[i].name);
    var price = document.createTextNode(product[i].price/100 + " $");
    var description = document.createTextNode(product[i].description);    
       
    var image = document.createElement("img");
    image.src = product[i].imageUrl;


      /*Ajout de tout les éléments "product" aux sous-div du MAIN*/ 

        document.getElementById('main').appendChild(divSquare);

        document.getElementById('mainSquare' + [i]).appendChild(divImg);
        divImg.appendChild(image);

        document.getElementById('mainSquare' + [i]).appendChild(div);
        div.appendChild(name);

        document.getElementById('mainSquare' + [i]).appendChild(div2);
        div2.appendChild(price);

        document.getElementById('mainSquare' + [i]).appendChild(div3);
        div3.appendChild(description);

        document.getElementById('mainSquare' + [i]).appendChild(div4);
        div4.appendChild(id);        

 }
})

        /**Modification des url pour chaque objet différent*/
        
        product.then(product=>{
            console.log(product)

            for (let i = 0; i < product.length; i++) {

            var elements =  document.getElementById('mainSquare' + [i]);
            var productPage = document.getElementById("pageProduct");
    
            /*Chaque produit amène sur la "page produit" + change les éléments de la page produits*/
    
    
            elements.onclick = function PageRedirect () {
                window.location.href = "Products.html?item=" + [i]; /** mettre l'id des objets plutot que le [i]*/
                productPage.innerHTML = elements.innerHTML;
            }
            }
        })


/**
 * Carrousel
 */

        product.then(product=> {

                /**Prise des éléments du DOM */

             var itemImg1 =  document.getElementById("slideImg1");
             var itemTxt1 =  document.getElementById("slideTxt1");
             var itemTitle1 = document.getElementById("slideTitle1");

             var itemImg2 =  document.getElementById("slideImg2");
             var itemTxt2 =  document.getElementById("slideTxt2");
             var itemTitle2 = document.getElementById("slideTitle2");

             var itemImg3 =  document.getElementById("slideImg3");
             var itemTxt3 =  document.getElementById("slideTxt3");
             var itemTitle3 = document.getElementById("slideTitle3");
             
                /**Création des text nodes */

             var description1 = document.createTextNode(product[1].description);
             var description2 = document.createTextNode(product[2].description);
             var description3 = document.createTextNode(product[3].description);

             var title1 = document.createTextNode(product[1].name);
             var title2 = document.createTextNode(product[2].name);
             var title3 = document.createTextNode(product[3].name);


                /**Assembler les textes et images aux objets du DOM (carousel) */

            itemImg1.setAttribute("src", product[1].imageUrl);
            itemImg2.setAttribute("src", product[2].imageUrl); 
            itemImg3.setAttribute("src", product[3].imageUrl);  

            itemTxt1.appendChild(description1);
            itemTxt2.appendChild(description2);
            itemTxt3.appendChild(description3);
            
            itemTitle1.appendChild(title1);
            itemTitle2.appendChild(title2);
            itemTitle3.appendChild(title3);
            

        })
    }
    
else {
    console.log ("if in Home page, error related to Home.js")
}