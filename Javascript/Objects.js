       /**Classe d'objet de chaque caméra */

       class Camera  {
             name;
             price;
             image;
             description;
             id;
             quantity;
             getMyCamera() {
                   return this.name, this.price, this.image, this.description, this.id, this.quantity;
             }
             /** déclarer les variables ici*/
             /** en suite faire une fonction GET pour récupérer ces variables dans le reste du code*/
        constructor (name, price, image, description, id, quantity) {
              this.name = name;
              this.price = price/100 + " $";
              this.image = image;
              this.description = description;
              this.id = id;
              this.quantity = quantity;
          }
      };

      var cameraArray = new Array;

/**array avec les objets pour la page Home*/

      product.then(product=>{

      function camera() {
        for (let i = 0; i < product.length; i++) {
            let camera = new Camera(product[i].name, product[i].price, product[i].imageUrl, product[i].description, product[i]._id);

            cameraArray.push(camera);
      }
    }

    camera();
    })
