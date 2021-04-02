import { Component, Input, OnInit } from '@angular/core';
import { Productos } from '../../models/productos.model';
import { Pedidos } from '../../models/pedido.model';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  @Input() pedido: Pedidos[];
  @Input() totalPagar: number;

  constructor() {

    
  }

  ngOnInit(): void {
  }

  eliminar(index){
    this.pedido[index].cantidad-=1;
    if( this.pedido[index].cantidad == 0){
      console.log(index);
      this.pedido.splice(index,1);
    }

  }

}
