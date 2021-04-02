import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Productos } from '../../models/productos.model';
import { Pedidos } from '../../models/pedido.model';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  @Input() pedido: Pedidos[];
   @Output() eliminarProducto: EventEmitter<Productos>;

  constructor() {
    
    this.eliminarProducto = new EventEmitter();
  }

  ngOnInit(): void {
  }

  calcularTotal(){
    let resultado = 0;
    this.pedido.forEach((element)=>{
      resultado += element.producto.precio*element.cantidad;
    });

    return resultado;
  }

  eliminar(index){
    this.eliminarProducto.emit(this.pedido[index].producto);
    this.pedido[index].cantidad-=1;
    this.pedido[index].total -= this.pedido[index].producto.precio;

    if( this.pedido[index].cantidad == 0){
      this.pedido.splice(index,1);
    }

  }

}
