       /**Classe d'objet de chaque caméra */

       class Camera  {
        constructor (name, price, image, description, id, quantity, lense) {
              this.name = name;
              this.price = price;
              this.image = image;
              this.description = description;
              this.id = id;
              this.quantity = quantity;
              this.lense = lense;
          }

          get CalculatedPrice() {
            return this.price/100 + " $";
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
