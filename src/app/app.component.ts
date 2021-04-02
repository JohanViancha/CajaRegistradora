
import { Component } from '@angular/core';
import { Productos } from './models/productos.model';
import { Pedidos } from './models/pedido.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pedidos: Pedidos[];
  totalPagar:number;

  constructor(){
    this.pedidos =[];
    this.totalPagar = 0;
  }
  comprar_producto(producto: Productos){
    
    const index = this.pedidos.findIndex(element => element.nombre == producto.nombre);
    producto.stock -=1;

    if(index == -1){
      this.pedidos.push({"nombre":producto.nombre, "cantidad":1, "total": producto.precio});
    
    }
    else{
      
      this.pedidos[index].cantidad ++;
      this.pedidos[index].total += producto.precio;
      
    }
   
    this.totalPagar = this.totalPagar + producto.precio;

 
    //this.pedidos.push({"nombre":producto.nombre, "cantidad":1, "total": producto.precio});


  }
}
