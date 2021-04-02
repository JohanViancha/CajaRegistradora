
import { Component } from '@angular/core';
import { Productos } from './models/productos.model';
import { Pedidos } from './models/pedido.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  comidas: Productos[];
  bebidas: Productos[];
  pedidos: Pedidos[];

  constructor(){
    this.pedidos =[];
    this.comidas = [
      {
        nombre: "Hamburguesa",
        precio: 12000,
        imagen: 'hamburguesa.jpg',
        stock: 10
      },
      {
        nombre: "Perro Caliente",
        precio: 11000,
        imagen: 'perrocaliente.jpg',
        stock: 5
      },
      {
        nombre: "Pizza",
        precio: 9000,
        imagen: 'pizza.jpg',
        stock: 2
      },
      {
        nombre: "Arepas rellenas",
        precio: 7000,
        imagen: 'arepas.jpg',
        stock: 8
      },

      {
        nombre: "Lazaña",
        precio: 10500,
        imagen: 'lazaña.jpg',
        stock: 15
      },

      {
        nombre: "Picadas",
        precio: 25000,
        imagen: 'picadas.jpg',
        stock: 3
      },

      {
        nombre: "Pastas a la carbonara",
        precio: 15000,
        imagen: 'pastas.jpg',
        stock: 4
      },
    ]

    this.bebidas = [
      
      {
        nombre: "Gaseosa Cocacola",
        precio: 3000,
        imagen: 'cocacola.jpg',
        stock: 3
      },

      {
        nombre: "Jugo Hit",
        precio: 2500,
        imagen: 'jugohit.png',
        stock: 9
      },


      {
        nombre: "Botella de agua",
        precio: 2000,
        imagen: 'agua.png',
        stock: 10
      },

      {
        nombre: "Cerveza Cornoa",
        precio: 4000,
        imagen: 'corona.png',
        stock: 15
      },    
    ]


  }
  comprar_producto(producto: Productos){
    const index = this.pedidos.findIndex(element => element.producto.nombre == producto.nombre);
    if(producto.stock>0){
      producto.stock -=1;
      if(index == -1){
        this.pedidos.push({"producto":producto, "cantidad":1, "total": producto.precio});
      }
      else{    
        this.pedidos[index].cantidad ++;
        this.pedidos[index].total += producto.precio;
        
      }
  }

  }

  eliminarProducto(producto: Productos){  
    producto.stock+=1;
  }
  
}
