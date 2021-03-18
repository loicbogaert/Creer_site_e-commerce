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

    const product = getData()

    product.then(product=>{
        console.log(product);
    })