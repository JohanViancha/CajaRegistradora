export class Productos{
    nombre:string;
    precio:number;
    imagen:string;
    stock: number;

    constructor(nombre:string = "", precio: number = 0.0, imagen:string ="", stock:number = 0){

        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock;
    }
}