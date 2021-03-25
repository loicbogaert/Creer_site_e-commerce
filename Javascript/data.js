/**Ajout de la fonction $_GET pour prendre les parametres d'URL */

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
        let data = await fetch("http://localhost:3000/api/cameras");
        let dataTraite = (await data.text()).toString();
        return JSON.parse(dataTraite);
    }

    const product = getData()

    product.then(product=>{
        console.log(product);
    })

        /**Prise des parametres URL pour "itemId"" (page product)*/
    
        var theId = ($_GET("itemId"));

    /**Données de l'API pour la page product (Selon l'ID de l'objets)*/

    async function getById() {
        let byId = await fetch("http://localhost:3000/api/cameras/" + (theId));
        let byIdTraite = (await byId.text()).toString();
        return JSON.parse(byIdTraite);
    }
    const itemId = getById();
        

