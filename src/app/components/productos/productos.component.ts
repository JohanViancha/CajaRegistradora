import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { Productos } from '../../models/productos.model';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  comidas: Productos[];
  bebidas: Productos[];
  ruta:string;

  @Output() producto:EventEmitter<Productos>;

  constructor() { 
    this.producto = new EventEmitter();
    this.ruta= '../../../assets/img/';
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
        imagen: 'corona.jpg',
        stock: 15
      },    
    ]

  }

  ngOnInit(): void {
  }

  comprar(produto: Productos){ 
    this.producto.emit(produto);
  }

}
