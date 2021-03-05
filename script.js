var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText)


        /*Array avec les données de l'API*/
        let product = new Array();
        product = response;
        console.log(product);


        
        /*Boucle pour créer tout les éléments des différents "produits"*/
        
        document.getElementById('search').onclick = function Products() {
                for (let i = 0; i < product.length; i++) {

                var divSquare = document.createElement("div")
                divSquare.className = 'main__square';
                divSquare.id = 'mainSquare' + [i];

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

                var id = document.createTextNode (product[i]._id);
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

        /*Ajout de classes aux éléments créés*/

    }
}
    }
};



request.open("GET", "http://localhost:2000/api/cameras");
request.send();
