/**constructor des objets d'appareil photo */

function Camera (name, price, image, description, id) {
    this.name = name;
    this.price = price/100 + " $";
    this.image = image;
    this.description = description;
    this.id = id;
};