
/*get id (prendre id de la page) (voir liens)*/


/**Récuperer parametres d'une url */
function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace( 
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;	
    }
    return vars;
}
        /*Array avec les données de l'API*/

        async function getData() {
            let data = await fetch("http://localhost:2000/api/cameras");
            let dataTraite = (await data.text()).toString();
            return JSON.parse(dataTraite);
        }
        

/**Si l'url contient le paramètre ITEM {..} Sinon {..} (accueil ou page produit) */

        if(window.location.href.indexOf("item") != -1){
            const product = getData()
        
            product.then(product=>{
                console.log(product);
                console.log("this worked !")

                /*Div principale de la page produit*/
                var page2 = document.getElementById("pageProduct");

                /**Création des sous-div de la page produit (img / textes) */
                var title2 = document.createElement("h2");
                var price2 =  document.createElement("p");
                var image2 = document.createElement("img");
                var description2  = document.createElement("p");

                /**Ajout des éléments à la div principale */
                page2.appendChild(title2);
                page2.appendChild(price2);
                page2.appendChild(image2);
                page2.appendChild(description2);

                console.log(page2);

                /**Prise en compte du numéro de l'objet dans l'url ($_GET) et le faire
                 * correspondre avec les données du tableau.
                 */

                var item =  $_GET("item");
                console.log(item);

                    var name = document.createTextNode(product[item].name);
                    var price = document.createTextNode(product[item].price/100 + " $");
                    var description = document.createTextNode(product[item].description);
                   
    
                /**Ajout des textes/images créés à leur div respective */
                        title2.appendChild(name);
                        price2.appendChild(price);
                        description2.appendChild(description);
                        image2.src = product[item].imageUrl;

                /**Création de classes */

                page2.classList.add("productPage");

                image2.classList.add("productPage__img");

                title2.classList.add("productPage__title", "bold");

                price2.classList.add("productPage__price", "bold");

                description2.classList.add("productPage__description");


            })
        }

        else {
        const product = getData()
        
        product.then(product=>{
            console.log(product)

    /*Boucle qui s'active pour chaque élément du tableau Product contenant les objets de l'api*/

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


/**création des éléments + noms de classe*/

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

    /*Création des éléments de texte*/

    var id = document.createTextNode ("product reference : " + product[i]._id);
    var name = document.createTextNode(product[i].name);
    var price = document.createTextNode(product[i].price/100 + " $");
    var description = document.createTextNode(product[i].description);
        

    /*Céation des images*/

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
                window.location.href = "Products.html?item=" + [i];
                productPage.innerHTML = elements.innerHTML;
    
            }
            }
        })
    }
    