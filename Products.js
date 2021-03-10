var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText)


        /*Array avec les données de l'API*/
        let product = new Array();
        product = response;


        /*Création d'une promesse*/

    const promise = new Promise ((resolve, reject) => {
        if(product.length >= 1) {
            resolve()
        }else {
            reject()
        }
    });


    
    /*Uitilisation de la promesse*/

    promise.then(() => {

        /*Boucle pour créer tout les éléments des différents "produits" + ajout de classes*/

       setTimeout (function Products() {
        for (let i = 0; i < product.length; i++) {

        var divSquare = document.createElement("div")
        divSquare.className = 'main__square';
        divSquare.id = 'mainSquare' + [i];

        /*bootstrap classes*/
        divSquare.classList.add("col-9");
        divSquare.classList.add("col-md-5");
        divSquare.classList.add("col-md-5");
        divSquare.classList.add("col-lg-3");


        /**création des éléments + noms de classe*/
        var divImg = document.createElement("div");
        divImg.className = 'main__img';

        var div = document.createElement("h2");
        div.className = 'main__title';

        var div2 = document.createElement("p");
        div2.className = 'main__price';

        var div3 = document.createElement("p");
        div3.className = 'main__description';

        var div4 = document.createElement("p");
        div4.className = 'main__code';

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
                


                /** Set des variables pour la fonction d'en dessous (prise des éléments de page princpale et de la page produit)*/

                    var elements =  document.getElementById('mainSquare' + [i]);
                console.log(elements.innerHTML);
                    var productPage = document.getElementById("pageProduct");


                    /*Chaque produit amène sur la "page produit" + change les éléments de la page produits*/


                    elements.onclick = function PageRedirect () {
                        window.location.href = "Products.html";
                        productPage.innerHTML = elements.innerHTML;
                    }
                                       
          }
        }, 0);
           
        
    }).catch(() => {
        console.log('error')
});
}
};




request.open("GET", "http://localhost:2000/api/cameras");
request.send();
