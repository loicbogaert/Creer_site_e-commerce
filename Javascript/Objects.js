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

          /**Calcul du prix en $ */
          get CalculatedPrice() {
            return this.price/100 + " $";
          }
      };
