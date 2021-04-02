import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { Productos } from '../../models/productos.model';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() nombre:string;
  @Input() productos: Productos[];
  ruta:string;

  @Output() producto:EventEmitter<Productos>;

  constructor() { 
    this.producto = new EventEmitter();
    this.ruta= '../../../assets/img/';
  }

  ngOnInit(): void {
  }

  comprar(produto: Productos){ 
    this.producto.emit(produto);
  }

}
